// import {UnGrid} from '/js/ungrid.js';

jQuery(document).ready(() => {

  ungrid(["Bed A3","Bed A1","mundo"],[100,200,300],[100,200,300],".products")

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
