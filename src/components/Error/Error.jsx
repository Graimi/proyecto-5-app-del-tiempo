import React from 'react';
import './Error.css';

// Si el código da error lanzaremos el siguiente template
function Error() {
  return (
    <div className="wt-error">
      <img
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685811317/App%20Tiempo/error-404_wcufcw.png"
        alt="error"
        className="wt-error-img"
      />
      <h2>El uso de esta app es limitada </h2>
      <h3>
        Recarga <br /> Si el error persiste es debido a la falta de datos espere hasta mañana
      </h3>
    </div>
  );
}

export default Error;
