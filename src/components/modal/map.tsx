import React from 'react';

import ModalSubtitle from './modal-subtitle';
import MapContainer from '../map/map';

const Map: React.FC = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <ModalSubtitle>Locais de coleta</ModalSubtitle>
        <MapContainer />
      </div>
    </div>
);
}

export default Map;
