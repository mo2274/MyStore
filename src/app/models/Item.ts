export class Item {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    count: number;
    
    constructor(id: number, name: string, price: number, url: string, description: string, count: number) {
       this.id = id;
       this.name = name;
       this.price = price;
       this.url = url;
       this.description = description;
       this.count = count;
    }
   }