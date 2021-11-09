class FactoryList {
    constructor(list) {
        this._list = list;
    }
    showTable() {
        let tbody = document.querySelector('tbody');
        ;
        tbody.innerHTML = '';
        this._list.forEach((object) => {
            delete object.id;
            let tr = document.createElement('tr');
            for (let property in object) {
                let td = document.createElement('td');
                td.innerHTML = object[property];
                tr.appendChild(td);
            }
            ;
            tbody.appendChild(tr);
        });
    }
}
export default class List extends FactoryList {
    constructor(list) {
        super(list);
        this._buttonAda = document.getElementById('buttonWhoCreatesAda');
        this._buttonGenius = document.getElementById('buttonGeniusList');
    }
    showButtonWhoCreatesAda() {
        this._buttonAda.style.display = 'flex';
        this._buttonGenius.style.display = 'none';
    }
    buttonShowGeniusList() {
        this._buttonAda.style.display = 'none';
        this._buttonGenius.style.display = 'flex';
    }
}
