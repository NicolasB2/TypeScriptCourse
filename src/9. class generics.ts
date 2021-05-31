class DataStorage <T>{
    private data: T[] = [];

    addItem(item:T) {
        this.data.push(item);
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems() {
        return [...this.data]
    }
}

const TextStorage = new DataStorage<string>();
TextStorage.addItem("Nico");
TextStorage.addItem("Ale");
TextStorage.removeItem("Nico");
console.log(TextStorage.getItems);