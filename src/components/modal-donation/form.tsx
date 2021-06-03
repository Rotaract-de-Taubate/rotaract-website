import React, {useState, useEffect} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  color: #81256f;
  font-weight: 700;
  line-height: 1;
  font-family: "Quicksand", sans-serif;
`;

const InputGroup = styled.div`
  margin-bottom: 30px;
`;

const HeartIcon = styled(FaHeart)`
  margin-right: 10px;
  font-size: 15px;
`;

const SubmitButton = styled.button`
  background-color: #d4377a;
  font-size: 0.875em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .3px;
  border-radius: 50px;
  box-shadow: 0px 3px 5px 0px rgb(0 0 0 / 10%);
  padding: 16px 39px;
  line-height: 1;
  border: 0;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all .4s ease;
  width: 100%;
`;

const FormDonation: React.FC = () => {
  return (
    <form action="#" method="POST" id="xs-donation-form" className="xs-donation-form">
      <InputGroup>
        <Label htmlFor="xs-donate-name">Local da doação</Label>
        Viva Eventos
      </InputGroup>
      <InputGroup>
        <Label htmlFor="xs-donate-charity">Nome completo</Label>
        <input type="text" name="name" id="name" className="form-control" placeholder="Escreva seu nome completo" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="xs-donate-charity">E-mail</Label>
        <input type="text" name="email" id="email" className="form-control" placeholder="Seu melhor e-mail" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="xs-donate-charity">Celular</Label>
        <input type="text" name="phone" id="-phone" className="form-control" placeholder="Seu número de celular" />
      </InputGroup>
      <SubmitButton type="submit" className="btn btn-success">
        <HeartIcon />
        Registrar doação
      </SubmitButton>
    </form>
  );
}

export default FormDonation;
