import React, {useState, useEffect} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import styled from 'styled-components';

import  { MODAL_STATE } from '../../types';

const CloseButton = styled.button`
  font-size: 30px;
`;

interface Props {
  state: MODAL_STATE;
  onModalClose: () => void;
  onModalChangeState: (state: MODAL_STATE) => void;
}

const ModalDonation: React.FC<Props> = ({
  state,
  onModalClose
}) => {

  useEffect(() => {
    setModal(state !== MODAL_STATE.closed);
  }, [state])

  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = () => setModal(!modal);

  const closeBtn = <CloseButton className="btn close" onClick={toggleModal}>&times;</CloseButton>;

  return (
    <Modal isOpen={modal} toggle={toggleModal} className="modal-dialog-centered" onClosed={onModalClose}>
      <ModalHeader close={closeBtn} toggle={toggleModal}>Registre sua doação</ModalHeader>
      <ModalBody>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              Formulário de doação.
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ModalDonation;
