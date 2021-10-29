interface list {
  id: number;
  name: string;
  bio: string;
  excluir: number;
}

let list = [
  { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
  { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
  { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
  { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

function deleteById(list: any[], id: number): void {
  let i: number = list.indexOf(list.filter((item) => item.id == id)[0], 0);
  if (i != -1) list.splice(i, 1);
}

function changeBio(list: any[], text: string, id: number): void {
  let i: number = list.indexOf(list.filter((item) => item.id == id)[0], 0);
  if (i != -1) list[i].bio = text;
}

function changeName(list: any[], text: string, id: number): void {
  let i: number = list.indexOf(list.filter((item) => item.id == id)[0], 0);
  if (i != -1) list[i].name = text;
}

function showTable() {
  let tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  list.forEach(function (item) {
    let tr = document.createElement('tr');
    for (let camp in item) {
      let td = document.createElement('td');
      td.innerHTML = item[camp];
      tr.appendChild(td);
    };
    tbody.appendChild(tr);
  });
}

//manipulating form view by button
function showEdit() {
  if (document.getElementById('place-to-show-edit').style.display == 'table') {
    document.getElementById('place-to-show-edit').style.display = 'none';
    document.getElementById('place-to-show-delete').style.display = 'none';
  } else {
    document.getElementById('place-to-show-edit').style.display = 'table';
    document.getElementById('place-to-show-delete').style.display = 'none';
  }
}

//manipulating form view by button
function showDelete() {
  if (document.getElementById('place-to-show-delete').style.display == 'table') {
    document.getElementById('place-to-show-delete').style.display = 'none';
    document.getElementById('place-to-show-edit').style.display = 'none';
  } else {
    document.getElementById('place-to-show-delete').style.display = 'table';
    document.getElementById('place-to-show-edit').style.display = 'none';
  }
}

showTable();
const btnChange = document.querySelector('#change') as HTMLInputElement;
btnChange.addEventListener('click', function (e) {
  e.preventDefault();
  let name: string = (document.getElementById('name') as HTMLInputElement).value;
  let id: number = parseInt((document.getElementById('id') as HTMLInputElement).value);
  let bio: string = (document.getElementById('bio') as HTMLInputElement).value;
  changeName(list, name, id);
  changeBio(list, bio, id);
  showTable();
});

const btnDelete = document.querySelector('#delete') as HTMLInputElement;
btnDelete.addEventListener('click', function (e) {
  e.preventDefault();
  let id: number = parseInt((document.getElementById('idDelete') as HTMLInputElement).value);
  deleteById(list, id);
  showTable();
});