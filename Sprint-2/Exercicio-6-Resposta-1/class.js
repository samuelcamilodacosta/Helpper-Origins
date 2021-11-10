export default class List {
    constructor(list) {
        this._list = list;
    }
    returnName(id) {
        /**
         * This method returns the name searched by id.
         *
         * @param list - an object with array of the interface values.
         * @param id - the value to look for in the list.
         *
         * @returns the name searched or an id not found warning for an alert.
         */
        for (let index = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                return alert(this._list[index].name);
            }
        }
        return alert("ID not found!");
    }
    returnBio(id) {
        /**
         * This method returns the bio searched by id.
         *
         * @param list - an object with array of the interface values.
         * @param id - the value to look for in the list.
         *
         * @returns the bio searched or an id not found warning for an alert.
         */
        for (let index = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                return alert(this._list[index].bio);
            }
        }
        return alert("ID not found!");
    }
    deleteLine(id) {
        /**
         * This method delete an array from the object by id.
         *
         * @param list - an object with array of the interface values.
         * @param id - the value to look for in the list.
         *
         * @returns alert alert saying if the array of id was deleted or not found.
         */
        for (let index = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                this._list.splice(index, 1);
                return alert(`Line of id: ${id} deleted!`);
            }
        }
        return alert("Id not found!");
    }
    changeBioOrName(id, action, text) {
        /**
         * This method changes the name or biography received by the user.
         *
         * @param list - an object with array of the interface values.
         * @param id - the value to look for in the list to change.
         * @param text - the string that will replace the old value found
         *
         * @returns alerts confirming changes or saying if any properties were not found
         */
        for (let index = 0; index < this._list.length; index++) {
            if (this._list[index].id == id) {
                if (action == 'name') {
                    this._list[index].name = text;
                    return alert(`Property: ${action} of id: ${id} changed to ${text}`);
                    ;
                }
                else if (action == 'biography') {
                    this._list[index].bio = text;
                    return alert(`Property: ${action} of id: ${id} changed to ${text}`);
                    ;
                }
                else {
                    return alert("Property that you want to change not found!");
                }
            }
        }
        return alert("ID not found!");
    }
}
