const d = document

function ungrid(findNamesInArray,posXArray,posYArray,backgroundSelector,backgroundHeight) {

  let tarjeta = d.querySelectorAll("ul.products>li.product-type-booking")
  let nombre = d.querySelectorAll(".woocommerce-LoopProduct-link h3")
  let on = d.body.classList.contains("archive")
  // estilos base
  d.querySelector(backgroundSelector).style.height = '100vh'

  if (!on) {

    console.log("No se esta ejecutando UnGrid")

  } else if (on) {

    console.log("Ungrid Activo")

    //
    for (var i = 0; i < nombre.length; i++) {
      console.log(tarjeta[i]);
      tarjeta[i].style.position = "absolute"
      console.log((i+1) + " -> " + nombre[i].innerHTML)
    }
    //
    return console.log(xArray + " <> " + yArray)

  }

}

// Class Version
// export class UnGrid {
//
//   constructor( x, y ) {
//           this.x = x
//           this.y = y
//       }
//
//   init ( () => {
//
//     console.log("UnZip Ok.");
//
//   }
// )
// }
