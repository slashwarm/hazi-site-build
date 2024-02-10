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

const StyledInput = styled.input<InputProps>((props) => ({
  width: '100%',
  border: `1px solid ${props.theme.global.borders.borderDefault}`,
  background: props.theme.input.backgroundDefault,
  borderRadius: '8px',
  margin: '0',
  padding: 0,
  outline: 'none',
  transition: 'box-shadow 0.3s ease-in-out',

  // small screens
  height: '40px',
  fontSize: '14px',
  paddingLeft: '8px',
  paddingRight: '8px',

  '@media (min-width: 768px)': {
    // large screens
    height: '64px',
    fontSize: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },

  '&::placeholder': {
    color: props.theme.global.text.textSecondary,
  },

  '&:hover': {
    background: props.theme.input.backgroundHover,
    borderColor: props.theme.global.borders.borderHover,
  },

  '&:active': {
    background: props.theme.input.backgroundTyped,
    borderColor: props.theme.global.borders.borderTyped,
  },

  '&:focus': {
    background: props.theme.input.backgroundFocused,
    borderColor: props.theme.global.borders.borderFocused,
    boxShadow: `0px 0px 0px 3px ${props.theme.button.shadow}`,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    color: props.theme.global.text.textDisabled,
    background: props.theme.input.backgroundDisabled,
    borderColor: props.theme.global.borders.borderDisabled,
  },
}));

const TextField: React.FC<InputProps> = ({ children, ...props }) => (
  <StyledInput {...props}>{children}</StyledInput>
);

export default TextField;
