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
        /**
         * This method returns the name searched by id.
         * 
         * @param _list - an object with array of the interface values.
         * @param id - the value to look for in the list.
         * 
         * @returns the name searched or an id not found warning for an alert.
         */
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                return alert(this._list[index].name);
            }
        }
        return alert("ID not found!");
    }
    public returnBio(id: number): void{
        /**
         * This method returns the bio searched by id.
         * 
         * @param _list - an object with array of the interface values.
         * @param id - the value to look for in the list.
         * 
         * @returns the bio searched or an id not found warning for an alert.
         */
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                return alert(this._list[index].bio);
            }
        }
        return alert("ID not found!");
    }
    public deleteLine(id: number): void{
        /**
         * This method delete an array from the object by id.
         * 
         * @param _list - an object with array of the interface values.
         * @param id - the value to look for in the list.
         * 
         * @returns alert alert saying if the array of id was deleted or not found.
         */
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id){
                this._list.splice(index, 1);
                return alert(`Line of id: ${id} deleted!`);
            }
        }
        
        return alert("Id not found!");
    }

    public changeBioOrName(id: number, action: string, text: string): void{
        /**
         * This method changes the name or biography received by the user.
         * 
         * @param _list - an object with array of the interface values.
         * @param id - the value to look for in the list to change.
         * @param text - the string that will replace the old value found
         * 
         * @returns alerts confirming changes or saying if any properties were not found
         */
        for (let index: number = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
              if (action == 'name'){
                  this._list[index].name = text; 
                  return alert(`Property: ${action} of id: ${id} changed to ${text}`);;
              }
              else if (action == 'biography'){ 
                  this._list[index].bio = text;
                  return alert(`Property: ${action} of id: ${id} changed to ${text}`);;
              }
              else {
                return alert("Property that you want to change not found!");
                }
            }
        }
        return alert("ID not found!");
    }
}

