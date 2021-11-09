interface IList {
    id: number;
    name: string;
    bio: string
}

class FactoryList {
    private _list: IList[];
    constructor(list: IList[]) {
        this._list = list;
    }
    public showTable(){
        let tbody = document.querySelector('tbody') as HTMLTableSectionElement;;  
        tbody.innerHTML = '';
        this._list.forEach((object: any) => {
            delete object.id;
            let tr: HTMLTableRowElement = document.createElement('tr') as HTMLTableRowElement;
            for (let property in object) {
                let td: HTMLTableCellElement = document.createElement('td') as HTMLTableCellElement;
                td.innerHTML = object[property];
                tr.appendChild(td);
            };
        tbody.appendChild(tr);
        });
    }
}

export default class List extends FactoryList{
    private _buttonAda: HTMLElement;
    private _buttonGenius: HTMLElement;
    constructor(list: IList[]) {
        super(list)
        this._buttonAda = document.getElementById('buttonWhoCreatesAda') as HTMLElement;
        this._buttonGenius = document.getElementById('buttonGeniusList') as HTMLElement;
    }
    public showButtonWhoCreatesAda(){
        this._buttonAda.style.display = 'flex';
        this._buttonGenius.style.display = 'none';
    }
    public buttonShowGeniusList(){
        this._buttonAda.style.display = 'none';
        this._buttonGenius.style.display = 'flex';
    }
}
