// import {UnGrid} from '/js/ungrid.js';
const row1 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1 + Sea Front Table"],
  ["0","100","200","300","400","500","600","700","800"],
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1 + Sea Front Table"]
]


jQuery(document).ready(() => {

  ungrid(row1[0],row1[1],[100,200],".products")

  console.log("Scripts OK.")

  // let x = new UnGrip()
  // img()

}
)

function img() {
  jQuery('.imgLiquid.imgLiquidFill').imgLiquid()
  jQuery('.imgLiquid.imgLiquidNoFill').imgLiquid({
    fill: false
  })

}
