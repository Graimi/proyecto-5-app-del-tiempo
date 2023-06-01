// Creamos la función base para llamar a las apis
async function Api(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

// Almacenamos en una constante nuestra API Key
export const ApiKey = 'cb658f072db01ec164fb8a14cc6d9da9';

export default Api;

// Pasar aquí todo lo que hay en weather y pasar en el return las plantillas para el current, yesterday o forecast
