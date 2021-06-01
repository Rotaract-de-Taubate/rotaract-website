import React, {useState} from 'react';
import {
} from 'react-icons/fa';

import { MODAL_STATE } from './types';

import Header from './components/header';
import Hero from './components/hero'
import Modal from './components/modal';
import MapSection from './components/map-section';

import './App.css';

function App() {
  const [modalState, setModalState] = useState<MODAL_STATE>(MODAL_STATE.closed);
  const handleModalState = (newModalState: MODAL_STATE) => {
    setModalState(newModalState);
  }

  return (
    <div className="App">
      <Header onModalState={handleModalState} />
      <Hero onModalState={handleModalState} />
      <MapSection />
      <Modal
        state={modalState}
        onModalClose={() => { setModalState(MODAL_STATE.closed)}}
        onModalChangeState={(state) => { setModalState(state)}}
      />
    </div>
  );
}

export default App;
