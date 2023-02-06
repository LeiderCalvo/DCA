const esMayorDeEdad = (persona) => {
  return persona.edad > 18;
};

const esElGrupoMayor = (grupo) => {
  return grupo.every(esMayorDeEdad);
};

const pepito = {
  edad: 16,
  nombre: "pepito",
  cedula: 23438949238,
};

const maria = {
  edad: 20,
  nombre: "maria",
  cedula: 238949238,
};

const grupo = [maria, pepito];

if (esElGrupoMayor(grupo)) {
  console.log("todos son mayores");
} else {
  console.log("almenos uno es menor");
}
