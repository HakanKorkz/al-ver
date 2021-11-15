export default class Data {

    constructor() {
        this.cartTo = [
            { id: 1, item: 'ev', quantity: 1, price: 500000 },
            { id: 2, item: 'Araba', quantity: 2, price: 10000 },
            { id: 3, item: 'Telefon', quantity: 1, price: 23000 }
        ]
    }


    cart() {
        return this.cartTo
    }

}