import React, {useState, useEffect} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import styled from 'styled-components';
import {
  FaMapMarkerAlt,
  FaCarAlt,
} from 'react-icons/fa';

import  { MODAL_STATE } from '../../types';
import Map from './map';
import Delivery from './delivery';

const OptionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid #f1f1f1;
  border-radius: 15px;
  background: #ffffff;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: .3px;
  font-size: .75em;
  cursor: pointer;
  label {
    cursor: pointer;
  }
  svg {
    font-size: 40px;
    margin-bottom: 20px;
  }

  :hover, &.selected {
    border: 2px solid #d4377a;
    color: #d4377a;
    svg {
      color: #d4377a;
    }
  }
`;

const CloseButton = styled.button`
  font-size: 30px;
`;

interface Props {
  state: MODAL_STATE;
  onModalClose: () => void;
  onModalChangeState: (state: MODAL_STATE) => void;
}

const RctModal: React.FC<Props> = ({
  state,
  onModalClose,
  onModalChangeState,
}) => {

  useEffect(() => {
    setModal(state !== MODAL_STATE.closed);
  }, [state])

  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = () => setModal(!modal);

  const closeBtn = <CloseButton className="btn close" onClick={toggleModal}>&times;</CloseButton>;

  return (
    <Modal isOpen={modal} toggle={toggleModal} className="modal-dialog-centered" onClosed={onModalClose}>
      <ModalHeader close={closeBtn} toggle={toggleModal}>Como prefere doar?</ModalHeader>
      <ModalBody>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-6">
              <OptionButton
                className={ state === MODAL_STATE.map ? 'selected' : ''}
                onClick={() => { onModalChangeState(MODAL_STATE.map) }}
              >
                <FaMapMarkerAlt />
                <label>Locais de coleta</label>
              </OptionButton>
            </div>
            <div className="col-md-6 col-6">
              <OptionButton
                className={ state === MODAL_STATE.delivery ? 'selected' : ''}
                onClick={() => { onModalChangeState(MODAL_STATE.delivery) }}
              >
                <FaCarAlt />
                <label>Solicitar retirada</label>
              </OptionButton>
            </div>
          </div>
          { state === MODAL_STATE.map && <Map />}
          { state === MODAL_STATE.delivery && <Delivery />}
        </div>
      </ModalBody>
    </Modal>
  );
}

export default RctModal;
