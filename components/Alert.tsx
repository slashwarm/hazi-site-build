import { styled } from 'styled-components';

type AlertType = 'error' | 'success';

type AlertProps = {
  readonly theme: any;
  readonly type: AlertType;
  readonly children?: React.ReactNode;
};

export const Alert = styled.div<AlertProps>`
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.global.alert[props.type]};
  color: white;
  text-align: center;

  // small screens
  padding: 8px;

  @media (min-width: 768px) {
    // large screens
    padding: 16px;
  }
`;
