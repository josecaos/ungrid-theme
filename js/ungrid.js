const d = document
let templateOn, template = ["archive","home","page"]

function ungrid(namesArray,posXArray,posYArray,backgroundSelector,backgroundHeight) {
  // controla el template activo
  templateOn = template[1]

  //
  let on = d.body.classList.contains(templateOn)
  let products = d.querySelectorAll("ul.products li")
  // let products = d.querySelectorAll("div#et-main-area li")//version index
  let names = d.querySelectorAll("ul.products li a h3")
  // let names = d.querySelectorAll("div#et-main-area li a h3")//version index
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
      products[i].style.width = "90px"
      // encuentralos
      name = names[i].innerHTML
      found = namesArray.includes(name)// true or false
      if (found === false) {

        console.log(name + ": not found");

      } else if (found === true) {//if object is found
        x = "translateX("+ posXArray[foundIndex] +"px)"
        // console.log(names[i].innerHTML);
        names[i].style.fontSize = '1em'
        products[i].style.transition = "3s"
        products[i].style.opacity = 1
        products[i].style.display = "block"
        products[i].style.bottom = "20px"
        products[i].style.transform = x
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
