import axios from 'axios';

export const getData = (params) => {

   const endpoint = params === "a" ? 'https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0':"nas"
  return axios.get(endpoint)
    .then(response => {
      // Hacer algo con los datos recibidos en la respuesta
      console.log("🚀 ~ file: backend.js:16 ~ getData ~ response:", response)
      return response.data;
    })
    .catch(error => {
      // Manejar el error en caso de que ocurra
      console.error('Error al hacer la solicitud:', error);
      throw error;
    });
};
   
