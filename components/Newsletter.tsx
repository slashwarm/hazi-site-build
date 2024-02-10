import React, { useState } from 'react';
import { styled } from 'styled-components';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { Alert } from 'components/Alert';
import { Heading, Paragraph } from 'components/Typography';
import { Row, Column, Wrapper } from 'components/Wrapper';

type SubscribeRequestBody = {
  email: string;
};

type SubscribeResponseBody = {
  error?: string;
};

const BackgroundImage = styled.div`
  --gradient-stop: 95%;

  @media (min-width: 768px) {
    background: linear-gradient(
        -95.5deg,
        #f4f5fb 38.1%,
        rgba(244, 245, 251, 0) var(--gradient-stop)
      ),
      url('/postman.png') no-repeat fixed, #f4f5fb;
    background-position: right 40%;
    background-size: cover;
  }

  @media (min-width: 1024px) {
    --gradient-stop: 90%;
  }

  @media (min-width: 1400px) {
    --gradient-stop: 80%;
  }

  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.7) 29.9%,
      rgba(0, 0, 0, 0) 81.57%
    ),
    url('/postman.png') no-repeat fixed, #f4f5fb;
  background-position: 30% 38%;
  background-size: cover auto;
  transform: scaleX(-1);
  z-index: -1;
  border-radius: 8px;
  filter: saturate(50%);
`;

const Box = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  box-shadow: 0px 8px 20px 8px rgba(44, 82, 157, 0.03),
    0px 40px 40px -40px rgba(44, 82, 157, 0.08);
  isolation: isolate;
  padding: 64px 32px;

  @media (min-width: 768px) {
    padding: 80px 64px;
  }

  @media (min-width: 1400px) {
    padding: 96px 64px;
  }
`;

const LeftColumn = styled(Column)`
  align-items: unset;
  justify-content: left;
  text-align: left;
`;

const LeftRow = styled(Row)`
  align-items: unset;
  justify-content: left;
  text-align: left;
`;

const TextGroup = styled(LeftColumn)`
  gap: 16px;
  max-width: 700px;

  @media (max-width: 1023px) {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    gap: 8px;
  }
`;

const ButtonGroup = styled(LeftRow)`
  width: 100%;
  gap: 32px;

  @media (max-width: 1399px) {
    gap: 26px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const Header = styled(LeftColumn)`
  gap: 32px;

  @media (max-width: 1399px) {
    gap: 26px;
  }

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

const NewsletterWrapper = styled(Wrapper)`
  padding: 64px 8px;

  @media (min-width: 768px) {
    padding: 80px 16px;
  }

  @media (min-width: 1400px) {
    padding: 96px 16px;
  }
`;

export default function Newsletter() {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(null);
  const isValidEmail = regex.test(email) || email === '';

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!regex.test(email)) {
      setAlert({
        type: 'error',
        text: 'Kérjük adj meg egy érvényes e-mail címet!',
      });
      return;
    }

    const response = await fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data: SubscribeResponseBody = await response.json();

    if (!response.ok) {
      setAlert({
        type: 'error',
        text: data.error || 'Hiba történt a feliratkozás során.',
      });
      return;
    }

    setAlert({
      type: 'success',
      text: 'Sikeresen feliratkoztál a hírlevélre! Köszönjük!',
    });
    setEmail('');
  };

  return (
    <NewsletterWrapper>
      <Box>
        <BackgroundImage />

        <form onSubmit={handleSubmit}>
          <Header>
            <TextGroup>
              <Heading invert={true}>Maradj naprakész!</Heading>
              <Paragraph invert={true}>
                Iratkozz fel hírlevelünkre, hogy elsőként értesülj új
                szolgáltatásainkról, híreinkről és praktikus logisztikai
                tippekről.
              </Paragraph>
            </TextGroup>
            <ButtonGroup>
              <TextField
                onChange={handleEmailChange}
                placeholder='emailcimed@domain.hu'
                value={email}
                style={{ maxWidth: '700px' }}
              />
              <Button
                type='submit'
                variant='primary'
                disabled={!isValidEmail}
                style={{ width: 'fit-content' }}
              >
                Feliratkozok
              </Button>
            </ButtonGroup>
            {alert && (
              <Alert style={{ maxWidth: '700px' }} type={alert.type}>
                {alert.text}
              </Alert>
            )}
          </Header>
        </form>
      </Box>
    </NewsletterWrapper>
  );
}
