import { Cliente } from './cliente';
// import { Proveedor } from './Proveedor';
// import { Veterinaria } from './Veterinaria';

const clienteJuan = new Cliente("Juan", "123456789", [
    { nombre: "Fido", especie: "perro" },
    { nombre: "Rex", especie: "gato" }
]);

// const proveedor = new Proveedor("Proveedor 1", "987654321");
// const veterinaria = new Veterinaria("Vet 1", "Calle Falsa 123");

console.log(clienteJuan);

console.log(clienteJuan.getId());

const Diego = new Cliente ("Diego Fischer", "2284-507340",[{nombre:"Ciri", especie:"gato"}]);
console.log(Diego);
console.log(Diego.getId);

