import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { brandColors } from '../../../common/constants/style.constants';

const StyledButton = styled.button`
  border: 1px solid ${brandColors.gold};
  color: ${brandColors.gold};
  background-color: hsla(4, 18%, 15%, 1);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid hsla(4, 18%, 15%, 1);
  }
`;

export function GoBackButton() {
  const navigate = useNavigate();
  return (
    <StyledButton type="button" onClick={() => navigate(-1)}>
      Back
    </StyledButton>
  );
}
