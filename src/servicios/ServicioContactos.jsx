

const apiUrl = 'http://localhost:8080/contacto';

export const ServicioContacto = {
  listarContactos: async () => {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Error al obtener los contactos');
    }
    return response.json();
  },
  crearContacto: async (datos) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });
    if (!response.ok) {
      throw new Error('Error al crear el contacto');
    }
    return response.json();
  },
};