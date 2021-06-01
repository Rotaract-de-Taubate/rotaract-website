import styled from 'styled-components';

import Map from '../map/map';

const Subtitle = styled.h2`
  font-family: "Quicksand", sans-serif;
  letter-spacing: -.3px;
  font-weight: 700;
  color: #d4377a;
  font-size: 1.25em;
`;

const Title = styled.h3`
  font-family: "Quicksand", sans-serif;
  letter-spacing: -.3px;
  font-weight: 700;
  color: #81256f;
  font-size: 3.25em;
  line-height: 1;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
`;

const HeaderText = styled.p`
  margin-bottom: 0;
  font-size: 1.125em;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 0;
  color: #555555;
`;

const Header = styled.div`
  margin: 0 auto;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: 80px;

  @media(max-width: 768px) {
    margin-top: 20px;
  }
`;

const MapSection = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <Header className="col-10 col-md-8">
          <Subtitle>Onde doar?</Subtitle>
          <Title>Locais de entrega</Title>
          <HeaderText>Confira o endereço mais próximo de você e não deixe para amanhã. Sua colaboração é muito importante para quem precisa.</HeaderText>
        </Header>
      </div>
    </div>
    <Map />
  </>
  )
};

export default MapSection;