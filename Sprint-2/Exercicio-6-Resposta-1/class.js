export default class List {
    constructor(list) {
        this._list = list;
    }
    returnName(id) {
        for (let index = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                alert(this._list[index].name);
                return;
            }
        }
        alert("ID not found!");
    }
    returnBio(id) {
        for (let index = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                alert(this._list[index].bio);
                return;
            }
        }
        alert("ID not found!");
    }
    deleteLine(id) {
        for (let index = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                this._list.splice(index, 1);
                alert(`Line of id: ${id} deleted!`);
                return;
            }
        }
        alert("Id not found!");
        return;
    }
    changeBioOrName(id, action, text) {
        for (let index = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                if (action == 'name') {
                    this._list[index].name = text;
                    alert(`Property: ${action} of id: ${id} changed to ${text}`);
                    return;
                }
                else if (action == 'biography') {
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
