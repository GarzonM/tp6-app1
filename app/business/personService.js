import * as repo from '../data/personRepository.js';

export function getAllPersons() {
  return repo.getPersons();
}

export function createPerson(nombre, apellido, edad) {
  const person = { nombre, apellido, edad: parseInt(edad) };
  repo.addPerson(person);
}

export function editPerson(index, nombre, apellido, edad) {
  const updated = { nombre, apellido, edad: parseInt(edad) };
  repo.updatePerson(index, updated);
}

export function removePerson(index) {
  repo.deletePerson(index);
}