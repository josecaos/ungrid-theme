const d = document
let templateOn, template = ["archive","home","page"]

function ungrid(namesArray,posXArray,posYArray,backgroundSelector,backgroundHeight) {
  // controla el template activo
  templateOn = template[1]
  //
  let on = d.body.classList.contains(templateOn)
  let products = d.querySelectorAll("ul.products li")
  let names = d.querySelectorAll("ul.products li a h3")
  let name,product,x,y,found,foundIndex
  // estilos base
  d.querySelector(backgroundSelector).style.height = '100vh'
  // ejecuta el mapeo
  if (!on) {

    console.log("No se esta ejecutando UnGrid")

  } else if (on) {

    console.log("Main Iter: " + i)
    //itera la cantidad de objetos que encuentre en el template
    for (var i = 0; i < names.length; i++) {
      // sueltalos
      products[i].style.transition = "4s"
      products[i].style.display = "none"
      products[i].style.opacity = 0
      products[i].style.position = "absolute"
      products[i].style.width = "90px"
      name = names[i].innerHTML
      // busca si el argumento se encuentra en el DOM
      found = namesArray.includes(name)// true or false
      foundIndex = namesArray.indexOf(name)
      // itera sobre el grid
      if (found === false) {

        console.log(name + ": not found!");//debug

      } else if (found === true) {//if object is found

        x = "translateX("+ posXArray[foundIndex] +"%)"
        y = "translateY("+ posYArray[foundIndex] +"%)"
        console.log("Found: " + names[i].innerHTML + "| Found Index: " + foundIndex);//debug
        products[i].style.transition = "1s"
        products[i].style.opacity = 1
        products[i].style.bottom = "50px"
        products[i].style.display = "block"
        products[i].style.transform = x
        products[i].style.transform = y
        foundIndex = foundIndex+1
      }
    }//endfor

    return console.log("UnGrid Activo")

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
