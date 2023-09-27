const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputTelefono = document.getElementById("inputTelefono");
const inputComentarios = document.getElementById("inputComentarios")
const inputStore = document.getElementById("inputStore")


const getApi = async () => {
try {
    const respuesta = await fetch(`http://localhost:4000/api/usuarios`);
    const datos = await respuesta.json();
    console.log (datos)
} catch (error) {
   console.log (error) 
}
    console.log ("hola aqui")
}

const postUSer = async() => {
    try {
        const respuesta = await fetch("http://localhost:4000/api/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name: inputNombre.value,
        email: inputEmail.value,
        phone: inputTelefono.value,
        coments: inputComentarios.value,
        store: inputStore.value
        })
        })
        const datos = await respuesta.json();
        console.log(datos)
    } catch (error) {
        console.log (error)
    }
};


const putUSer = async() => {
    try {
        const respuesta = await fetch("http://localhost:4000/api/usuarios/64f93f611f200a5ee1449327", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: inputNombre.value,
            email: inputEmail.value,
            phone: inputTelefono.value,
            coments: inputComentarios.value,
            store: inputStore.value
        })
        })
        const datos = await respuesta.json();
        console.log(datos)
    } catch (error) {
        console.log (error)
    }
};

const deletUser = async () => {
    try {
        const respuesta = await fetch(`http://localhost:4000/api/usuarios/64f4e9041ba73970c433cf7c`, {
            method: "DELETE"
        });
        const datos = await respuesta.json();
        console.log (datos)
    } catch (error) {
       console.log (error) 
    }
        console.log ("hola aqui")
    }
