import styled from 'styled-components';

const Button = styled.button<{ lg?: boolean, secondary?: boolean }>`
  background-color: ${props => (props.secondary ? '#d4377a' : '#81256f')}; ;
  padding: 16px 39px;
  color: #ffffff;
  box-shadow: 0px 3px 5px 0px rgb(0 0 0 / 10%);
  border-radius: 50px;
  border: 0;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${props => (props.lg ? '0.875em' : '.75em')};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: .3px;
  display: flex;
  align-items: center;
  svg {
    font-size: ${props => (props.lg ? '24px' : '15px;')};
    margin-right: 10px;
  }
`;

export default Button;
