// import {UnGrid} from '/js/ungrid.js';
const row1 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ["0","100","200","300","400","500","600","700","800"],
  ["100","100","100","100","100","100","100","100","100"]
]


jQuery(document).ready(() => {

  ungrid(row1[0],row1[1],[100,200],"#mapa_playa")

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
