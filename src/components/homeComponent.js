import homeModel from "../models/homeModel.js";
import HomeService from "../services/homeService.js";

let Cart = {id: 1 , item: 'ev', quantity: 1 , price: 500000}
let Cart2 = {id: 2 , item: 'Araba', quantity: 2 , price: 10000}
let homeMode = new homeModel(Cart)
let homeMode2 = new homeModel(Cart2)

let HomeServic = new HomeService()

HomeServic.homeForm(homeMode,homeMode2)
