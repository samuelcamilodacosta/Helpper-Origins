interface IList {
    id: number;
    name: string;
    bio: string
}

export default class List {
    private _list: IList[];
    private _tbody: HTMLTableSectionElement;
    constructor(list: IList[]) {
        this._list = list;
        this._tbody = document.querySelector('tbody') as HTMLTableSectionElement;
    }
    public showTable(){
        this._tbody;  
        this._tbody.innerHTML = '';
        this._list.forEach((object: any) => {
            let tr: HTMLTableRowElement = document.createElement('tr') as HTMLTableRowElement;
            for (let property in object) {
                let td: HTMLTableCellElement = document.createElement('td') as HTMLTableCellElement;
                td.innerHTML = object[property];
                tr.appendChild(td);
            };
        this._tbody.appendChild(tr);
        });
    }
}
