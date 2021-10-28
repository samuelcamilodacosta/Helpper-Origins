var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function returnName(lista, identificador) {
    var i;
    for (i = 0; i < lista.length; i++) {
        if (lista[i].id == identificador) {
            return lista[i].name;
        }
    }
    return 'Esse ID não existe ou não possui a propriedade nome';
}
function returnBio(lista, identificador) {
    var i;
    for (i = 0; i < lista.length; i++) {
        if (lista[i].id == identificador) {
            return lista[i].bio;
        }
    }
    return 'Esse ID não existe ou não possui a propriedade bio';
}
function deleteId(lista, identificador) {
    var i;
    for (i = 0; i < lista.length; i++) {
        if (lista[i].id == identificador) {
            lista.splice(i, 1);
            return 'Item deletado';
        }
    }
    return 'Item não encontrado';
}
function alterarBioOrName(lista, action, texto, id) {
    var i;
    for (i = 0; i < lista.length; i++) {
        if (lista[i].id == id) {
            if (action == 'nome') {
                lista[i].name = texto;
                return lista;
            }
            else if (action == 'bio') {
                lista[i].bio = texto;
                return lista;
            }
            else {
                return 'Ação inválida!';
            }
        }
    }
    return 'ID para alteração não encontrado!';
}
console.log(returnName(lista, 3));
console.log(returnBio(lista, 3));
console.log(deleteId(lista, 3));
console.log(returnName(lista, 3));
console.log(alterarBioOrName(lista, 'nome', 'Nikola Tesla és el brabo', 2));
