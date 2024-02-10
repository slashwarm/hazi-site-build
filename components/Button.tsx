import styled from 'styled-components';

type ButtonProps = {
  readonly theme?: any;
  readonly variant?: 'primary' | 'outlined';
  readonly disabled?: boolean;
  readonly endIcon?: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly type?: 'button' | 'submit' | 'reset';
  readonly style?: React.CSSProperties;
  readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledBox = styled.div<ButtonProps>`
  color: inherit;
  height: 100%;
  background-color: ${({ theme, variant }) =>
    theme.button[variant].backgroundRightDefault};
  border: 0;
  border-radius: 0px 8px 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;

  @media (min-width: 768px) {
    width: 64px;
  }

  path {
    fill: ${({ theme, variant }) => theme.button[variant].textDefault};
  }
`;

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background: ${({ theme, variant }) =>
    theme.button[variant].backgroundDefault};
  border: ${({ theme, variant }) =>
    variant === 'primary'
      ? 0
      : `1px solid ${theme.button[variant].borderDefault}`};
  color: ${({ theme, variant }) => theme.button[variant].textDefault};
  width: auto;
  font-weight: 600;
  margin: 0;
  padding: 0; // remove default button padding
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  // small screens
  height: 40px;
  font-size: 14px;
  padding-left: 8px;
  gap: 8px; // we use this for right-padding

  @media (max-width: 767px) {
    svg {
      width: 12px;
      height: 12px;
    }

    > .desktop-text {
      display: visible;
    }

    > .mobile-text {
      display: none;
    }
  }

  @media (min-width: 768px) {
    // large screens
    height: 64px;
    font-size: 16px;
    padding-left: 16px;
    gap: 16px; // we use this for right-padding

    svg {
      width: 16px;
      height: 16px;
    }

    > .desktop-text {
      display: none;
    }

    > .mobile-text {
      display: visible;
    }
  }

  &:not(:disabled):hover:not(:active) {
    background: ${({ theme, variant }) =>
      theme.button[variant].backgroundHover};
    border-color: ${({ theme, variant }) => theme.button[variant].borderHover};
    box-shadow: 0px 8px 24px ${({ theme }) => theme.button.shadow};

    > ${StyledBox} {
      background-color: ${({ theme, variant }) =>
        theme.button[variant].backgroundRightHover};
    }
  }

  &:focus {
    outline: none;
    background: ${({ theme, variant }) =>
      theme.button[variant].backgroundFocused};
    border-color: ${({ theme, variant }) =>
      theme.button[variant].borderFocused};
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.button.shadow};

    > ${StyledBox} {
      background-color: ${({ theme, variant }) =>
        theme.button[variant].backgroundRightFocused};
    }
  }

  &:not(:disabled):active {
    background: ${({ theme, variant }) =>
      theme.button[variant].backgroundPressed};
    border-color: ${({ theme, variant }) =>
      theme.button[variant].borderPressed};

    > ${StyledBox} {
      background-color: ${({ theme, variant }) =>
        theme.button[variant].backgroundRightPressed};
    }
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.global.text.textDisabled};
    background: ${({ theme, variant }) =>
      theme.button[variant].backgroundDisabled};
    border-color: ${({ theme, variant }) =>
      theme.button[variant].borderDisabled};

    > ${StyledBox} {
      background-color: ${({ theme, variant }) =>
        theme.button[variant].backgroundRightDisabled};
    }

    path {
      fill: ${({ theme }) => theme.global.text.textDisabled};
    }
  }
`;

const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  endIcon,
  ...props
}) => (
  <StyledButton {...props} variant={variant} onMouseDown={handleMouseDown}>
    {children}
    {endIcon && <StyledBox variant={variant}>{endIcon}</StyledBox>}
  </StyledButton>
);

export default Button;
