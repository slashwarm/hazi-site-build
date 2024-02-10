import Head from 'next/head';
import { ThemeProvider, styled } from 'styled-components';
import { theme } from 'constants/Theme';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { AddIcon, RightArrowIcon } from 'components/Icons';
import Newsletter from 'components/Newsletter';
import Hero from 'components/Hero';

const Content = styled.main`
  background: url('/background.png') no-repeat center center fixed;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
`;

const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  gap: 10px;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Content>
        <Hero />
        <Newsletter />

        <Showcase>
          <TextField />
          <TextField placeholder='Ez a placeholder' />
          <TextField disabled />
          <TextField placeholder='Ez a placeholder' disabled />
          <Button>Feliratkozok</Button>
          <Button variant='primary' disabled>
            Feliratkozok
          </Button>
          <Button variant='primary' endIcon={<RightArrowIcon />}>
            Feliratkozok
          </Button>
          <Button variant='primary' endIcon={<AddIcon />} disabled>
            Feliratkozok
          </Button>
          <Button variant='outlined'>Feliratkozok</Button>
          <Button variant='outlined' disabled>
            Feliratkozok
          </Button>
        </Showcase>
      </Content>
    </ThemeProvider>
  );
}
