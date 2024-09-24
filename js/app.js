

async function obtenerUsuarioPorId(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}/todos`
  try {
    const respuesta = await fetch(url)
    if (!respuesta.ok) {
      throw new Error("no se encontro el id solicitado")
    }
    const dato = await respuesta.json();
    return dato;
  } catch (e) {
    console.error(e);
  }
}

obtenerUsuarioPorId("1").then((e)=>{console.log(e)}).catch(e=>{console.log(e)});






