import React, {useState, useEffect} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import {
  FaMapMarkerAlt,
  FaCarAlt,
} from 'react-icons/fa';

import  { MODAL_STATE } from '../../types';

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

  svg {
    font-size: 40px;
    margin-bottom: 20px;
  }

  :hover {
    border: 2px solid #d4377a;
    svg {
      color: #d4377a;
    }
  }
`;

interface Props {
  state: MODAL_STATE;
}

const RctModal: React.FC<Props> = ({
  state,
}) => {

  useEffect(() => {
    setModal(state !== MODAL_STATE.closed);
  }, [state])

  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = () => setModal(!modal);

  const closeBtn = <button className="btn close" onClick={toggleModal}>&times;</button>;

  return (
    <Modal isOpen={modal} toggle={toggleModal} className="modal-dialog-centered">
      <ModalHeader close={closeBtn} toggle={toggleModal}>Como prefere entregar?</ModalHeader>
      <ModalBody>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <p className="mb-6">Confira nossos locais de coleta em Taubaté ou solicite um endereço que iremos fazer a retira.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <OptionButton>
                <FaMapMarkerAlt />
                <label>Locais de coleta</label>
              </OptionButton>
            </div>
            <div className="col-md-6 col-sm-12">
              <OptionButton>
                <FaCarAlt />
                <label>Solicitar retirada</label>
              </OptionButton>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default RctModal;
