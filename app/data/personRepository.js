const STORAGE_KEY = 'personas';

function getAll() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveAll(personas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(personas));
}

export function addPerson(person) {
  const personas = getAll();
  personas.push(person);
  saveAll(personas);
}

export function updatePerson(index, updatedPerson) {
  const personas = getAll();
  personas[index] = updatedPerson;
  saveAll(personas);
}

export function deletePerson(index) {
  const personas = getAll();
  personas.splice(index, 1);
  saveAll(personas);
}

export function getPersons() {
  return getAll();
}
