export default class List {
    constructor(list) {
        this._list = list;
        this._tbody = document.querySelector('tbody');
    }
    showTable() {
        this._tbody;
        this._tbody.innerHTML = '';
        this._list.forEach((object) => {
            let tr = document.createElement('tr');
            for (let property in object) {
                let td = document.createElement('td');
                td.innerHTML = object[property];
                tr.appendChild(td);
            }
            ;
            this._tbody.appendChild(tr);
        });
    }
}
