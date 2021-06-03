import React, {useState} from 'react';
import {
} from 'react-icons/fa';
import { useParams } from "react-router-dom";

import { MODAL_STATE } from './types';

import Header from './components/header';
import Hero from './components/hero'
import Modal from './components/modal';
import ModalDonation from './components/modal-donation';
import MapSection from './components/map-section';

import './App.css';

const checkPlaceIsValid = (place?: string) => place === 'viva-eventos' || place === 'lavista' || place === 'dcbm';

function Home() {
  let { place } = useParams<{ place?: string }>();
  const [modalState, setModalState] = useState<MODAL_STATE>(MODAL_STATE.closed);
  const [modalDonationState, setModalDonationState] = useState<MODAL_STATE>(checkPlaceIsValid(place) ? MODAL_STATE.delivery : MODAL_STATE.closed);
  
  const handleModalState = (newModalState: MODAL_STATE) => {
    setModalState(newModalState);
  }

  const handleModalDonationState = (newModalState: MODAL_STATE) => {
    setModalDonationState(newModalState);
  }

  return (
    <div className="App">
      <Header onModalState={handleModalState} />
      <Hero onModalState={handleModalState} />
      <MapSection />
      <Modal
        state={modalState}
        onModalClose={() => { handleModalState(MODAL_STATE.closed)}}
        onModalChangeState={(state) => { handleModalState(state)}}
      />
      { place && (
        <ModalDonation
          place={place}
          state={modalDonationState}
          onModalClose={() => { handleModalDonationState(MODAL_STATE.closed)}}
          onModalChangeState={(state) => { handleModalDonationState(state)}}
        />
      )}
      
    </div>
  );
}

export default Home;
