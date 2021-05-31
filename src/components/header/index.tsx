import React from 'react';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';

import { MODAL_STATE } from '../../types';
import logo from './logo.png';
import Button from '../button';

const Header = styled.header`
  width: 100%;
  padding: 15px;
  background: #81256f;
`;

const Logo = styled.img`
  height: 75px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderRightContent = styled.div`
  display: flex;
  align-items: center;
`;

const EmailIcon = styled(AiOutlineMail)`
  color: #ffffff;
  font-size: 24px;
  margin-right: 10px;
`;

const HeartIcon = styled(FaHeart)`
  margin-right: 10px;
  font-size: 15px;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
  color: white;
`;

const HeaderInfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeaderInfoLabel = styled.h5`
  font-weight: 700;
  font-size: 0.875em;
  margin: 0;
`;

const HeaderInfoValue = styled.a`
  font-size: 0.75em;
  font-weight: 400;
`

interface Props {
  onModalState: (modalState: MODAL_STATE) => void;
}

const App: React.FC<Props> = ({ onModalState }) => {
  return (
    <Header>
      <div className="container">
        <HeaderContent>
          <Logo src={logo} alt="Logo Rotaract" />
          <HeaderRightContent>
            {/* <HeaderInfo>
              <EmailIcon />
              <HeaderInfoText>
                <HeaderInfoLabel>E-mail de contato</HeaderInfoLabel>
                <HeaderInfoValue>rotaract.taubate@gmail.com</HeaderInfoValue>
              </HeaderInfoText>
            </HeaderInfo> */}
            <Button secondary onClick={() => { onModalState(MODAL_STATE.options) }}>
              <HeartIcon />
              Doar agora!
            </Button>
          </HeaderRightContent>
        </HeaderContent>
      </div>
    </Header>
  );
}

export default App;
