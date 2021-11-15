export default class HomeService {

    Form(data) {

        return `<td> ${data} </td>`


    }


    homeForm(...data) {
        let list = document.getElementById('list')
        data.map(data => {
            let btn = '<button type="button"  class="click" data-id="' + data.id + '"> Sepete ekle </button>'
            let id = this.Form(data.id)
            let item = this.Form(data.item)
            let quantity = this.Form(data.quantity)
            let price = this.Form(data.price)
            let btnid = this.Form(btn)
            list.innerHTML += '<tr>' + id + item + quantity + price + btnid + '</tr>'
        })

    }

    homeAdd(data) {
        console.log(data)
    }

}