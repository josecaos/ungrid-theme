const d = document

function ungrid(namesArray,posXArray,posYArray,backgroundSelector,backgroundHeight) {

  let on = d.body.classList.contains("archive")
  let products = d.querySelectorAll("ul.products>li")
  let names = d.querySelectorAll(".woocommerce-LoopProduct-link h3")
  let name,product,x,y,found,foundIndex = 0
  // estilos base
  d.querySelector(backgroundSelector).style.height = '100vh'
  // ejecuta el mapeo
  if (!on) {

    console.log("No se esta ejecutando UnGrid")

  } else if (on) {

    //repite cantidad de objetos que encuentre en el template
    for (var i = 0; i < names.length; i++) {
      // sueltalos
      products[i].style.display = "none"
      products[i].style.opacity = 0
      products[i].style.position = "absolute"
      products[i].style.width = "70px"
      // encuentralos
      name = names[i].innerHTML
      found = namesArray.includes(name)// true or false
      console.log(x);
      if (found === false) {

        console.log(name + ": not found");

      } else if (found === true) {//if found
        x = "translateX("+ posXArray[foundIndex] +"px)"
        console.log(names[i].innerHTML);
        products[i].style.transition = "0.5s"
        products[i].style.opacity = 1
        products[i].style.display = "block"
        products[i].style.bottom = "20px"
        product = products[i].style.transform = x
        foundIndex = foundIndex+1

      }
    }//endfor

    return console.log("Ungrid Activo")

  }//endif

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
