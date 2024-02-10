import { styled } from 'styled-components';
import Button from 'components/Button';
import { Headline, Subline, Paragraph } from 'components/Typography';
import { Row, Column, Wrapper } from 'components/Wrapper';
import { RightArrowIcon } from 'components/Icons';

const Cover = styled.img`
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 21 / 8;
  object-fit: cover;

  @media (max-width: 767px) {
    aspect-ratio: 16 / 9;
  }
`;

const ButtonGroup = styled(Row)`
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Header = styled(Column)`
  gap: 32px;
  max-width: 910px;

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

const HeroWrapper = styled(Wrapper)`
  padding: 32px 8px;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 64px 16px;
    gap: 64px;
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <Header>
        <Column>
          <Headline>
            <span className='desktop-text'>Headline</span>
            <span className='mobile-text'>
              A jövő fulfillment megoldása a jelenben
            </span>
          </Headline>
          <Subline>Subline</Subline>
        </Column>

        <Paragraph>
          <span className='desktop-text'>
            Profi logisztika, alacsony költségek és növekedési lehetőség. Tartsd
            a fókuszod az értékesítésen, mi intézzük a logisztikát!
          </span>
          <span className='mobile-text'>
            Webáruházak és e-kereskedők számára automatizált és költséghatékony
            raktári logisztikai megoldások. Akár 30-50% megtakarítást nyújtunk a
            manuális raktározási költségekhez képest.
          </span>
        </Paragraph>

        <ButtonGroup>
          <Button variant='primary' endIcon={<RightArrowIcon />}>
            <span className='desktop-text'>Ingyenes felmérés</span>
            <span className='mobile-text'>Ajánlatot kérek</span>
          </Button>
          <Button variant='outlined'>Többet akarok tudni</Button>
        </ButtonGroup>
      </Header>

      <Cover src='/cover.png' alt='Woman holding something idk' />
    </HeroWrapper>
  );
}
