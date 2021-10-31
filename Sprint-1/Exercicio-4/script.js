"use strict";
let list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function deleteById(list, item) {
    const index = list.findIndex((list) => { return list.id === item; });
    if (index != -1)
        list.splice(index, 1);
}
function changeBio(list, text, item) {
    const index = list.findIndex((list) => { return list.id === item; });
    if (index != -1)
        list[index].bio = text;
}
function changeName(list, text, item) {
    const index = list.findIndex((list) => { return list.id === item; });
    if (index != -1)
        list[index].name = text;
}
function showTable(list) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    list.forEach(function (item) {
        let tr = document.createElement('tr');
        for (let camp in item) {
            let td = document.createElement('td');
            td.innerHTML = item[camp];
            tr.appendChild(td);
        }
        ;
        tbody.appendChild(tr);
    });
}
//manipulating form view by button
function showEdit() {
    let styleEdit = document.getElementById('place-to-show-edit');
    let styleDelete = document.getElementById('place-to-show-delete');
    if (styleEdit.style.display == 'table') {
        styleEdit.style.display = 'none';
        styleDelete.style.display = 'none';
    }
    else {
        styleEdit.style.display = 'table';
        styleDelete.style.display = 'none';
    }
}
//manipulating form view by button
function showDelete() {
    let styleEdit = document.getElementById('place-to-show-edit');
    let styleDelete = document.getElementById('place-to-show-delete');
    if (styleDelete.style.display == 'table') {
        styleDelete.style.display = 'none';
        styleEdit.style.display = 'none';
    }
    else {
        styleDelete.style.display = 'table';
        styleEdit.style.display = 'none';
    }
}
showTable(list);
const buttonChange = document.querySelector('#change');
buttonChange.addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let id = parseInt(document.getElementById('id').value);
    let bio = document.getElementById('bio').value;
    changeName(list, name, id);
    changeBio(list, bio, id);
    showTable(list);
});
const buttonDelete = document.querySelector('#delete');
buttonDelete.addEventListener('click', function (e) {
    e.preventDefault();
    let id = parseInt(document.getElementById('idDelete').value);
    deleteById(list, id);
    showTable(list);
});
