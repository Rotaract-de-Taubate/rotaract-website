import React from 'react';
import styled from 'styled-components';
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

const HeartIcon = styled(FaHeart)`
  margin-right: 10px;
  font-size: 15px;
`;
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
            <Button secondary onClick={() => { onModalState(MODAL_STATE.map) }}>
              <HeartIcon />
              Doar!
            </Button>
          </HeaderRightContent>
        </HeaderContent>
      </div>
    </Header>
  );
}

export default App;
