var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function returnName(list, id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id)
            return list[i].name;
    }
}
function returnBio(list, id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id)
            return list[i].bio;
    }
}
function deleteById(list, id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id)
            list.splice(i, 1);
    }
}
function changeBioOrName(list, action, text, id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            if (action == 'name')
                list[i].name = text;
            if (action == 'bio')
                list[i].bio = text;
        }
    }
}
