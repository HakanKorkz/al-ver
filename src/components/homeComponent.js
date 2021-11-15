import Data from "../database/homeData.js";
import homeModel from "../models/homeModel.js";
import HomeService from "../services/homeService.js";

let CartData = new Data()

let CartCount=CartData.cart().length

let homeMode  

let HomeServic = new HomeService()

for (let i = 0; i < CartCount; i++) {

   homeMode=   new homeModel(CartData.cart()[i])

   HomeServic.homeForm(homeMode)
    
}

let btn = document.getElementsByClassName('click')

let Count=btn.length
       
for (let i = 0; i < Count; i++) {


btn[i].addEventListener('click',()=>{
    
  let dataId=btn[i].getAttribute('data-id')

  console.log(dataId)



})

}

const ekle = document.getElementById('ekle')

ekle.addEventListener('submit',()=> {

  let inputs = document.getElementsByClassName("data")
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    if (input.value==null ||  input.value=="") return false

    HomeServic.homeAdd(input.value)
   
    
  }

})