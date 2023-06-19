import React, { createContext, useState } from 'react';

export const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [city, setCity] = useState('Madrid'); // Ejemplo: valor inicial es 'Madrid'

  return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>;
};

export default CityProvider