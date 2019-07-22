import {UnGrip} from '/js/ungrip.js';

jQuery(document).ready(() => {

  alert("Debuggg")

  img()

  let x = new UnGrip()
  x.init()
  console.log("Scripts OK.")
}
)

function img() {
  console.log("Images OK.")

  jQuery('.imgLiquid.imgLiquidFill').imgLiquid()
  jQuery('.imgLiquid.imgLiquidNoFill').imgLiquid({
    fill: false
  })

}
