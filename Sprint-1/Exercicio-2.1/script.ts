interface list {
  id: number;
  name: string;
  bio: string;
}

let list = [
  { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
  { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
  { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
  { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

function findItem(id: number) {
  return list.indexOf(list.filter((item) => item.id == id)[0], 0);
}
function changeName(action: string, text: string, i: number): void {
  list[i].name = text;
}
function changeBio(action: string, text: string, i: number): void {
  list[i].bio = text;
}

function returnName(list: any[], id: number): string {
  let i: number = findItem(id);
  if (i != -1) return (list[i].name);
}

function returnBio(list: any[], id: number): object[] {
  let i: number = findItem(id);
  if (i != -1) return (list[i].bio);
}

function deleteById(list: any[], id: number): void {
  let i: number = findItem(id);
  if (i != -1) list.splice(i, 1);
}

function changeBioOrName(list: any[], action: string, text: string, id: number): void {
  let i: number = findItem(id);
  if (i != -1) {
    if (action == 'name') changeName(action, text, i);
    if (action == 'bio') changeBio(action, text, i);
  }
}