import axios from "axios";
const Url = "http://localhost:3000/enviar/";

async function enviarForm(formData) {
  try {
    const res = await axios.post(`${Url}`,formData);
    return res.data;
  } catch (error) {
    console.error("Error en sendForm:", error);
    throw error; 
  }
}


export default {enviarForm}