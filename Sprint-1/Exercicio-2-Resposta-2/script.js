var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function findIndex(id) {
    return list.indexOf(list.filter(function (item) { return item.id == id; })[0], 0);
}
function changeName(list, text, index) {
    list[index].name = text;
}
function changeBio(list, text, index) {
    list[index].bio = text;
}
function returnName(list, id) {
    var index = findIndex(id);
    if (index != -1)
        return list[index].name;
}
function returnBio(list, id) {
    var index = findIndex(id);
    if (index != -1)
        return list[index].bio;
}
function deleteById(list, id) {
    var index = findIndex(id);
    if (index != -1)
        list.splice(index, 1);
}
function changeBioOrName(list, action, text, id) {
    var index = findIndex(id);
    if (index != -1) {
        if (action == 'name')
            changeName(list, text, index);
        if (action == 'bio')
            changeBio(list, text, index);
    }
}
