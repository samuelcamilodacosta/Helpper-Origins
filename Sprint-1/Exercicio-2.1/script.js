var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function findItem(id) {
    return list.indexOf(list.filter(function (item) { return item.id == id; })[0], 0);
}
function changeName(action, text, i) {
    list[i].name = text;
    return "Changed " + action;
}
function changeBio(action, text, i) {
    list[i].bio = text;
    return "Changed " + action;
}
function returnName(list, id) {
    var i = findItem(id);
    if (i != -1)
        return (list[i].name);
    return 'This ID doesn\'t exist.';
}
function returnBio(list, id) {
    var i = findItem(id);
    if (i != -1)
        return (list[i].bio);
    return 'This ID doesn\'t exist.';
}
function deleteById(list, id) {
    var i = findItem(id);
    if (i != -1) {
        list.splice(i, 1);
        return 'Deleted item.';
    }
    return 'Item not found';
}
function changeBioOrName(list, action, text, id) {
    var i = findItem(id);
    if (i != -1) {
        if (action == 'name')
            changeName(action, text, i);
        else if (action == 'bio')
            changeBio(action, text, i);
        else
            return 'Invalid action!';
    }
    return 'ID not found!';
}
console.log(returnName(list, 3));
console.log(returnBio(list, 3));
console.log(deleteById(list, 3));
console.log(returnName(list, 3));
console.log(changeBioOrName(list, 'name', 'Nikola Tesla - O maior gênio de todos os tempos!', 2));
console.log(list);
