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

    public returnName(id: number): void {
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                alert(this._list[index].name);
                return ;
            }
        }
        alert("ID not found!");
    }
    public returnBio(id: number): void{
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                alert(this._list[index].bio);
                return ;
            }
        }
        alert("ID not found!");
    }
    public deleteLine(id: number): void{
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                this._list.splice(index, 1);
                alert(`Line of id: ${id} deleted!`)
                return;
            }
        }
        alert("Id not found!");
        return;
    }
    public changeBioOrName(id: number, action: string, text: string): void{
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
              if (action == 'name'){
                  this._list[index].name = text; 
                  alert(`Property: ${action} of id: ${id} changed to ${text}`);
                  return;
              }
              else if (action == 'biography'){ 
                  this._list[index].bio = text;
                  alert(`Property: ${action} of id: ${id} changed to ${text}`);
                  return;
              }
              else {
                alert("Property that you want to change not found!"); 
                return;
                }
            }
        }
        alert("ID not found!");
        return;
    }
}

