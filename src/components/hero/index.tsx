import React from 'react';
import styled from 'styled-components';
import {
  FaMapMarkerAlt,
  FaCarAlt,
} from 'react-icons/fa';

import { MODAL_STATE } from '../../types';
import logo from './donate.svg';
import Button from '../button';

const Section = styled.section`
  display: flex;
  width: calc(100% - 30px);
  padding: 40px;
  background-image: url(banner-bg.png);
  background-repeat: no-repeat;
  background-position: center center;
  text-align: left;
`;

const Row = styled.div`
  align-items: center;
`;

const HeroTitle = styled.h1`
  margin-top: 20px;
  font-family: 'Quicksand', sans-serif;
  color: #81256f;
  font-size: 4.5em;
  letter-spacing: -3px;
  margin-bottom: 25px;
  line-height: 1.13;
`;

const HeroText = styled.p`
  font-size: 1.125em;
  color: #555555;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 40px;
`;

const HeroImg = styled.img`
  width: 100%;
`;

const HeroButtons = styled.div`
  display: flex;
  Button {
    margin-right: 15px;
  }
`;

interface Props {
  onModalState: (modalState: MODAL_STATE) => void;
}


const Hero: React.FC<Props> = ({ onModalState }) => {
  return (
    <Section>
      <div className="container">
        <Row className="row">
          <div className="col-md-5">
            <HeroImg src={logo} />
          </div>
          <div className="col-md-7">
            <HeroTitle>Faça sua doação de agasalho hoje!</HeroTitle>
            <HeroText>
              O frio está chegando na nossa cidade e muitas famílias estão precisando de um agasalho.
              Participe de nossa campanha e concorra a um vale compras na Lavista.
            </HeroText>
            <HeroButtons>
    	        <Button secondary lg onClick={() => { onModalState(MODAL_STATE.map) }}>
                <FaMapMarkerAlt />
                Locais de coleta
              </Button>
              <Button lg onClick={() => { onModalState(MODAL_STATE.delivery) }}>
                <FaCarAlt />
                Solicitar retirada
              </Button>
            </HeroButtons>
          </div>
        </Row>
        
      </div>
    </Section>
  );
}

export default Hero;
