interface IList {
  id: number;
  name: string;
  bio: string;
}

let list: IList[] = [
  { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
  { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
  { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
  { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

function deleteById(list: IList[], id: number): void {
  const index: number = list.findIndex((item) => { return item.id === id});
  if (index != -1) list.splice(index, 1);
}

function changeBio(list: IList[], text: string, id: number): void {
  const index: number = list.findIndex((item) => { return item.id === id});
  if (index != -1) list[index].bio = text;
}

function changeName(list: IList[], text: string, id: number): void {
  const index: number = list.findIndex((item) => { return item.id === id});
  if (index != -1) list[index].name = text;
}

function showTable(list: IList[]){
  let tbody: HTMLTableSectionElement = document.querySelector('tbody') as HTMLTableSectionElement;
  tbody.innerHTML = '';
  list.forEach((item: any) => {
    console.log(item);
    let tr: HTMLTableRowElement = document.createElement('tr') as HTMLTableRowElement;
    for (let camp in item) {
      let td: HTMLTableCellElement = document.createElement('td') as HTMLTableCellElement;
      td.innerHTML = item[camp];
      tr.appendChild(td);
    };
    tbody.appendChild(tr);
  });
}

//manipulating form view by button
function showEdit() {
  let styleEdit: HTMLElement = document.getElementById('place-to-show-edit') as HTMLElement;
  let styleDelete: HTMLElement = document.getElementById('place-to-show-delete') as HTMLElement;
  if (styleEdit.style.display == 'table') {
    styleEdit.style.display = 'none';
    styleDelete.style.display = 'none';
  } else {
    styleEdit.style.display = 'table';
    styleDelete.style.display = 'none';
  }
}

//manipulating form view by button
function showDelete() {
  let styleEdit: HTMLElement = document.getElementById('place-to-show-edit') as HTMLElement;
  let styleDelete: HTMLElement = document.getElementById('place-to-show-delete') as HTMLElement;
  if (styleDelete.style.display == 'table') {
    styleDelete.style.display = 'none';
    styleEdit.style.display = 'none';
  } else {
    styleDelete.style.display = 'table';
    styleEdit.style.display = 'none';
  }
}

showTable(list);
const buttonChange: HTMLButtonElement = document.querySelector('#change') as HTMLButtonElement;
buttonChange.addEventListener('click', function (e: MouseEvent) {
  e.preventDefault();
  let name: string = (document.getElementById('name') as HTMLInputElement).value;
  let id: number = parseInt((document.getElementById('id') as HTMLInputElement).value);
  let bio: string = (document.getElementById('bio') as HTMLInputElement).value;
  changeName(list, name, id);
  changeBio(list, bio, id);
  showTable(list);
});

const buttonDelete: HTMLButtonElement = document.querySelector('#delete') as HTMLButtonElement;
buttonDelete.addEventListener('click', function (e: MouseEvent) {
  e.preventDefault();
  let id: number = parseInt((document.getElementById('idDelete') as HTMLInputElement).value);
  deleteById(list, id);
  showTable(list);
});