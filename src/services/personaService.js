const API_URL = 'http://localhost:3000/personas';

export const obtenerPersonas = async () => {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error('Error al obtener las personas');
    }

    return await respuesta.json();
};

export const obtenerPersona = async (id) => {
    const respuesta = await fetch(`${API_URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error('Error al obtener la persona');
    }

    return await respuesta.json();
};

export const crearPersona = async (persona) => {
    const respuesta = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)
    });

    if (!respuesta.ok) {
        throw new Error('Error al crear la persona');
    }

    return await respuesta.json();
};

export const actualizarPersona = async (id, persona) => {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)
    });

    if (!respuesta.ok) {
        throw new Error('Error al actualizar la persona');
    }

    return await respuesta.json();
};

export const eliminarPersona = async (id) => {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    if (!respuesta.ok) {
        throw new Error('Error al eliminar la persona');
    }

    return await respuesta.json();
};