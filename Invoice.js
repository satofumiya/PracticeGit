class Product{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
}

class InvoiceItem{
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
        this.next = null;
    }
    getTotalPrice(){
        return this.product.price * this.quantity;
    }
}