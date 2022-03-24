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

class Invoice{
    constructor(invoiceNumber, invoiceItemHead){
        this.invoiceNumber = invoiceNumber;
        this.invoiceItemHead = invoiceItemHead;
    }

    amountDue(taxes){
        this.invoiceItem = this.invoiceItemHead;
        let allTotalPrice = 0;
        
        while(this.invoiceItem != null){
            allTotalPrice += this.invoiceItem.getTotalPrice();
            this.invoiceItem = this.invoiceItem.next;
        }
        

        return(taxes) ? allTotalPrice*1.1 : allTotalPrice;
    }
}