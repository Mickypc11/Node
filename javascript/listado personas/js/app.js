const personas = [new Persona("Juan", "Perez"), new Persona("karla", "gomez")];

function mostrarPersonas() {
  console.log("mostar persona");
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersonas() {
  console.log("mostar persona");
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if ((nombre.value != "") & (apellido.value != "")) {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  }else{
      console.log('No se puede agregar');
  }
}
