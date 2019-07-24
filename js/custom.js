// import {UnGrid} from '/js/ungrid.js';
const row1 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ['10%','150%','260%','370%','480%','590%','700%','810%','940%'],
  ["6%","6%","6%","6%","6%","6%","6%","6%","6%"]
]
const row2 = [
  ["Bed VIP4","Bed B1","Bed B2","Bed B3","Bed B4","Bed B5","Bed B6","Bed B7","Bed VIP3"],
  ['10%','150%','260%','370%','480%','590%','700%','810%','940%'],
  ["32%","32%","32%","32%","32%","32%","32%","32%","32%"]
]
const row3 = [
  ["AREA A","AREA B","AREA C","Bed VIP6","Bed C1","Bed C2","Bed C3","Bed C4","Bed C5","Bed VIP5"],
  ['20%','250%','820%','190%','300%','400%','500%','600%',"700%",'940%'],
  ["63%","78%","75%","55%","57%","59%","60%","62%","64%","65%"]
]


jQuery(document).ready(() => {
  img()
  let uno = new UnGrid(row1[0],row1[1],row1[2],"#mapa_playa")
  let dos = new UnGrid(row2[0],row2[1],row2[2],"#mapa_playa")
  let tres = new UnGrid(row3[0],row3[1],row3[2],"#mapa_playa")


  console.log("Scripts OK.")

}
)

function img() {
  jQuery('.imgLiquid.imgLiquidFill').imgLiquid()
  jQuery('.imgLiquid.imgLiquidNoFill').imgLiquid({
    fill: false
  })

}
