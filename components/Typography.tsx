import { styled } from 'styled-components';

type TextProps = {
  readonly theme: any;
  readonly invert?: boolean;
};

export const Headline = styled.h1<TextProps>`
  line-height: 72px;
  font-size: 64px;
  font-weight: 600;
  color: ${(props) => props.theme.global.text.textPrimary};
  margin: 0;

  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 40px;
    color: ${(props) =>
      props.invert
        ? props.theme.global.text.textInverted
        : props.theme.global.text.textPrimary};

    > .desktop-text {
      display: none;
    }

    > .mobile-text {
      display: visible;
    }
  }

  @media (min-width: 768px) {
    > .desktop-text {
      display: visible;
    }

    > .mobile-text {
      display: none;
    }
  }
`;

export const Subline = styled.h1<TextProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.global.text.textSecondary};
  margin: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Heading = styled.h2<TextProps>`
  font-size: 36px;
  font-weight: 600;
  color: ${(props) => props.theme.global.text.textPrimary};
  margin: 0;

  @media (max-width: 767px) {
    font-size: 24px;
    color: ${(props) =>
      props.invert
        ? props.theme.global.text.textInverted
        : props.theme.global.text.textPrimary};
  }
`;

export const Paragraph = styled.p<TextProps>`
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.theme.global.text.textPrimary};
  margin: 0;

  @media (max-width: 767px) {
    > .desktop-text {
      display: none;
    }

    > .mobile-text {
      display: visible;
    }

    font-size: 18px;
    color: ${(props) =>
      props.invert
        ? props.theme.global.text.textInverted
        : props.theme.global.text.textPrimary};
  }

  @media (min-width: 768px) {
    > .desktop-text {
      display: visible;
    }

    > .mobile-text {
      display: none;
    }
  }
`;
