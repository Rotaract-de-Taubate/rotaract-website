import React from 'react';
import styled from 'styled-components';

import ModalSubtitle from './modal-subtitle';

const Telephone = styled.p`
  font-family: "Quicksand",sans-serif;
  letter-spacing: -.3px;
  font-weight: 700;
  color: #d4377a;
  font-size: 1.25em;
`;

const Delivery: React.FC = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <ModalSubtitle>Solicitar retirada</ModalSubtitle>
        <div>
          <p>Para solicitar, entre em contato através do telefone:</p>
          <Telephone>(12) 99700-3804</Telephone>
        </div>
      </div>
    </div>
);
}

export default Delivery;
