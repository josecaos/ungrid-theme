// import {UnGrid} from '/js/ungrid.js';
const row1 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ['100','250','400','550','700','850','1000','1150','1300'],
  ["100","200","300","400","500","600","700","700","900"]
]
const row2 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ["0","100","200","300","400","500","600","700","800"],
  ["100","100","100","100","100","100","100","100","100"]
]
const row3 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ["0","100","200","300","400","500","600","700","800"],
  ["100","100","100","100","100","100","100","100","100"]
]
const row4 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ["0","100","200","300","400","500","600","700","800"],
  ["100","100","100","100","100","100","100","100","100"]
]

jQuery(document).ready(() => {

  ungrid(row1[0],row1[1],row1[2],"#mapa_playa")
  // ungrid(row2[0],row2[1],row2[2],"#mapa_playa")
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
