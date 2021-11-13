export default class HomeService {

    Form(data) {

        return `<li> ${data} </li>`

    }


    homeForm(...data) {
        let ver = []
        data.map(data => {
            let id = this.Form(data.id)
            let item = this.Form(data.item)
            let quantity = this.Form(data.quantity)
            let price = this.Form(data.price)
            ver=id+'\n'+item+'\n'+quantity+'\n'+price
        })       
       document.getElementById('list').innerHTML=ver

    }

}