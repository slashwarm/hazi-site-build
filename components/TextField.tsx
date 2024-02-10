import styled from 'styled-components';

type InputProps = {
  readonly theme?: any;
  readonly disabled?: boolean;
  readonly placeholder?: string;
  readonly children?: React.ReactNode;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly value?: string;
  readonly style?: React.CSSProperties;
};

const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.global.borders.borderDefault}; // Access borderDefault from theme or fallback to '#ddd'
  background: ${({ theme }) =>
    theme.input
      .backgroundDefault}; // Access backgroundDefault from theme or fallback to '#fff'
  border-radius: 8px;
  margin: 0;
  padding: 0;
  outline: none;
  transition: box-shadow 0.3s ease-in-out;

  // small screens
  height: 40px;
  font-size: 14px;
  padding-left: 8px;
  padding-right: 8px;

  @media (min-width: 768px) {
    // large screens
    height: 64px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.global.text.textSecondary};
  }

  &:hover {
    background: ${({ theme }) => theme.input.backgroundHover};
    border-color: ${({ theme }) => theme.global.borders.borderHover};
  }

  &:active {
    background: ${({ theme }) => theme.input.backgroundTyped};
    border-color: ${({ theme }) => theme.global.borders.borderTyped};
  }

  &:focus {
    background: ${({ theme }) => theme.input.backgroundFocused};
    border-color: ${({ theme }) => theme.global.borders.borderFocused};
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.button.shadow};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.global.text.textDisabled};
    background: ${({ theme }) => theme.input.backgroundDisabled};
    border-color: ${({ theme }) => theme.global.borders.borderDisabled};
  }
`;

const TextField: React.FC<InputProps> = ({ children, ...props }) => (
  <StyledInput {...props}>{children}</StyledInput>
);

export default TextField;
