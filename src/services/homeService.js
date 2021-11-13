export default class HomeService {

    Form(data) {

        return `<li> ${data} </li>`

    }


    homeForm(...data) {       
       let list= document.getElementById('list')
        data.map(data => {
            let id = this.Form(data.id)
            let item = this.Form(data.item)
            let quantity = this.Form(data.quantity)
            let price = this.Form(data.price)
           list.innerHTML=id+'\n'+item+'\n'+quantity+'\n'+price
        })       

    }

}