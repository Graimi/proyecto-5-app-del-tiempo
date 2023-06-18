import React, { createContext, useState } from 'react';

// Crear el contexto
export const CityContext = createContext();

// Componente proveedor del contexto
export function CityProvider({ children }) {
  const [city, setCity] = useState('');

  return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>;
}
