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
         * @returns the name searched or string saying id not found.
         */
        const index = this._list.findIndex((item) => { return item.id === id; });
        if (index != -1)
            return this._list[index].name;
        else
            return "ID not found!";
    }
    returnBio(id) {
        /**
         * This method returns the bio searched by id.
         *
         * @param list - an object with array of the interface values.
         * @param id - the value to look for in the list.
         *
         * @returns the bio searched or string saying id not found.
         */
        const index = this._list.findIndex((item) => { return item.id === id; });
        if (index != -1)
            return this._list[index].bio;
        else
            return "ID not found!";
    }
    deleteById(id) {
        /**
         * This method delete an array from the object by id.
         *
         * @param list - an object with array of the interface values.
         * @param id - the value to look for in the list.
         *
         * @returns alert alert saying if the array of id was deleted or not found.
         */
        const index = this._list.findIndex((item) => { return item.id === id; });
        if (index != -1) {
            this._list.splice(index, 1);
            alert(`Deleted line ID: ${id}.`);
        }
        else
            alert("ID not found!");
    }
    changeBioOrName(id, action, text) {
        /**
         * This method changes the name or biography received by the user.
         *
         * @param list - an object with array of the interface values.
         * @param id - the value to look for in the list to change.
         * @param text - the string that will replace the old value found
         * @param action - if the action is validated, it calls the method responsible for the change.
         *
         * @returns alerts confirming changes or saying if any properties were not found
         */
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
        /**
         * This method change the value of property name for text.
         * @param text - string to be added to the name property.
         * @param _list - object to have the name property be changed.
         * @param index - represents the index of the list that should have its property changed
         */
        this._list[index].name = text;
    }
    changeBio(index, text) {
        /**
         * This method change the value of property bio for text.
         * @param text - string to be added to the bio property.
         * @param _list - object to have the bio property be changed.
         * @param index - represents the index of the list that should have its property changed
         */
        this._list[index].bio = text;
    }
}
