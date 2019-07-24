// import {UnGrid} from '/js/ungrid.js';
const row1 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ['100%','200%','300%','400%','500%','600%','700%','800%','900%'],
  ["1%","1%","1%","1%","1%","1%","1%","1%","1%"]
]
const row2 = [
  ["Bed VIP4","Bed B1","Bed B2","Bed B3","Bed B4","Bed B5","Bed B6","Bed A7","Bed VIP3"],
  ['100%','200%','300%','400%','500%','600%','700%','800%','900%'],
  ["20%","40%","10%","20%","50%","40%","30%","20%","5%"]
]
const row3 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ["0","100","200","300","400","500","600","700","800"],
  ["100","100","100","100","100","100","100","100","100"]
]
const row4 = [
  ["Bed VIP2","Bed B1","Bed B2","Bed B3","Bed B4","Bed B5","Bed B6","Bed B7","Bed VIP1"],
  ["0","100","200","300","400","500","600","700","800"],
  ["100","100","100","100","100","100","100","100","100"]
]

jQuery(document).ready(() => {
  img()
  let uno = new UnGrid(row1[0],row1[1],row1[2],"#mapa_playa")
  let dos = new UnGrid(row2[0],row2[1],row2[2],"#mapa_playa")
  // ungrid(row3[0],row3[1],row3[2],"#mapa_playa")
  // ungrid(row4[0],row4[1],row4[2],"#mapa_playa")

  console.log("Scripts OK.")

}
)

function img() {
  jQuery('.imgLiquid.imgLiquidFill').imgLiquid()
  jQuery('.imgLiquid.imgLiquidNoFill').imgLiquid({
    fill: false
  })

}
