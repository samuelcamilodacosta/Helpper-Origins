export default class List {
    constructor(list) {
        this._list = list;
    }
    returnName(id) {
        const index = this._list.findIndex((item) => { return item.id === id; });
        if (index != -1)
            return this._list[index].name;
        else
            return "ID not found!";
    }
    returnBio(id) {
        const index = this._list.findIndex((item) => { return item.id === id; });
        if (index != -1)
            return this._list[index].bio;
        else
            return "ID not found!";
    }
    deleteById(id) {
        const index = this._list.findIndex((item) => { return item.id === id; });
        if (index != -1) {
            this._list.splice(index, 1);
            alert(`Deleted line ID: ${id}.`);
        }
        else
            alert("ID not found!");
    }
    changeBioOrName(id, action, text) {
        const index = this._list.findIndex((item) => { return item.id === id; });
        if (index != -1) {
            if (action == 'name') {
                this.changeName(index, text);
                return alert("Name changed.");
            }
            else if (action == 'biography') {
                this.changeBio(index, text);
                return alert("Biography changed.");
            }
            else
                return alert("Property that you want to change not found!");
        }
        else
            return alert("ID to change not found!");
    }
    changeName(index, text) {
        this._list[index].name = text;
    }
    changeBio(index, text) {
        this._list[index].bio = text;
    }
}
