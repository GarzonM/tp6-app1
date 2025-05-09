import * as service from '../business/personService.js';

const form = document.getElementById('personForm');
const list = document.getElementById('personList');
let editIndex = null;

function render() {
  list.innerHTML = '';
  const personas = service.getAllPersons();
  personas.forEach((p, i) => {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} ${p.apellido} (${p.edad})`;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.onclick = () => {
      document.getElementById('nombre').value = p.nombre;
      document.getElementById('apellido').value = p.apellido;
      document.getElementById('edad').value = p.edad;
      editIndex = i;
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Eliminar';
    delBtn.onclick = () => {
      service.removePerson(i);
      render();
    };

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

form.onsubmit = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = document.getElementById('edad').value;

  if (editIndex === null) {
    service.createPerson(nombre, apellido, edad);
  } else {
    service.editPerson(editIndex, nombre, apellido, edad);
    editIndex = null;
  }
  form.reset();
  render();
};

render();