import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MaskedInput from "react-text-mask";

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

  &:hover, &:focus {
    background-color: #81256f;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: #ce2a2a;
  margin-top: 10px;
`;

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /[1-9]/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

interface Props {
  place: string,
}

const FormDonation: React.FC<Props> = ({
  place,
}) => {
  const getPlaceName = (placeString: string): string => {
    switch (placeString) {
      case 'dabm': 
        return 'DABM - Medicina Taubaté';
      case 'viva-eventos':
        return 'Viva Eventos';
      case 'lavista':
        return 'Lavista Eyewear';
      default:
        return 'Indefinido';
    }
  };

  return (
    <Formik
       initialValues={{ email: '', phone: '', number: '' }}
       validate={values => {
         const errors: FormErrors = {};
         if (!values.email) {
           errors.email = 'E-mail é obrigatório.';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Endereço de e-mail é inválido.';
         }
         if (!values.phone) {
          errors.phone = 'Celular é obrigatório.';
        } else if (
          !/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/gm.test(values.phone)
        ){
          errors.phone = 'Celular não está preenchido corretamente.'
        }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
      {({ isSubmitting, handleChange, handleBlur }) => (
        <Form>
          <InputGroup>
            <Label htmlFor="xs-donate-name">Local da doação</Label>
            { getPlaceName(place) }
          </InputGroup>
          <InputGroup>
            <Label htmlFor="xs-donate-charity">Nome completo</Label>
            <Field type="text" name="name" className="form-control" placeholder="Escreva seu nome completo" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="xs-donate-charity">E-mail</Label>
            <Field type="email" name="email" className="form-control" placeholder="Seu melhor e-mail" />
            <StyledErrorMessage name="email" component="div" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="xs-donate-charity">Celular</Label>
            <Field name="phone" render={({ field }: any) => (
              <MaskedInput
                {...field}
                mask={phoneNumberMask}
                placeholder="Entre com o seu celular"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control" 
              />
            )}/>
            <StyledErrorMessage name="phone" component="div" />
          </InputGroup>
          <SubmitButton type="submit" className="btn" disabled={isSubmitting}>
            <HeartIcon />
            Registrar doação
          </SubmitButton>
        </Form>
      ) }
    </Formik>
  );
}

export default FormDonation;
