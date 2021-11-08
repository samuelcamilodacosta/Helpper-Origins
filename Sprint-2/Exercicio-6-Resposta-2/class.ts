interface IList {
    id: number;
    name: string;
    bio: string
}

export default class List {
    private _list: IList[]
    constructor(list: IList[]) {
        this._list = list;
    }

    public returnName(id: number): string{
        const index: number = this._list.findIndex((item) => { return item.id === id});
        if (index != -1) return this._list[index].name;
        else return "ID not found!";
    }

    public returnBio(id: number): string{
        const index: number = this._list.findIndex((item) => { return item.id === id});
        if (index != -1) return this._list[index].bio;
        else return "ID not found!";
    }

    public deleteById(id: number): void {
        const index: number = this._list.findIndex((item) => { return item.id === id});
        if (index != -1){
          this._list.splice(index, 1);
            alert(`Deleted line ID: ${id}.`);
        }
        else alert("ID not found!");
    }

    public changeBioOrName(id: number, action: string, text: string){
        const index: number = this._list.findIndex((item) => { return item.id === id});
        if (index != -1) {
          if (action == 'name') {
            this.changeName(index, text);
            return alert("Name changed.");
          }
          else if (action == 'biography') {
            this.changeBio(index, text);
            return alert("Biography changed.");
          }
          else return alert("Property that you want to change not found!");
        }
        else return alert("ID to change not found!");
    }

    private changeName(index: number, text: string): void {
        this._list[index].name = text;
    }

    private changeBio(index: number, text: string): void {
        this._list[index].bio = text;
    }
}

