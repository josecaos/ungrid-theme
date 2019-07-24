const d = document
let templateOn, template = ["archive","home","page"]

function UnGrid(namesArray,posXArray,posYArray,backgroundSelector,backgroundHeight) {

  this.namesArray = namesArray;
  this.posXArray = posXArray;
  this.posYArray = posYArray;
  this.backgroundSelector = backgroundSelector;
  this.backgroundHeight = backgroundHeight;

  // controla el template activo
  templateOn = template[1]
  //
  let on = d.body.classList.contains(templateOn)
  let products = d.querySelectorAll("ul.products li")
  let names = d.querySelectorAll("ul.products li a h3")
  let name,product,x,y,found,foundIndex
  // estilos base
  d.querySelector(backgroundSelector).style.minHeight = '120vh'
  // ejecuta el mapeo
  if (!on) {

    console.log("No se esta ejecutando UnGrid")

  } else if (on) {
    //itera la cantidad de objetos que encuentre en el template
    for (var i = 0; i < names.length; i++) {
      // sueltalos
      products[i].style.transition = "3s"
      // products[i].style.display = "none"
      products[i].style.opacity = 1
      products[i].style.position = "absolute"
      products[i].style.width = "9%"
      name = names[i].innerHTML
      //
      found = namesArray.includes(name)// true or false
      foundIndex = namesArray.indexOf(name)// sequence index
      // itera sobre el grid
      if (found === false) {

        console.log(name + ": not found!");//debug

      } else if (found === true) {

        x = "translateX("+ posXArray[foundIndex]+")"
        y = posYArray[foundIndex]
        console.log("Found: " + names[i].innerHTML + "| Found Index: " + foundIndex);//debug
        products[i].style.opacity = 1
        products[i].style.display = "block"
        products[i].style.bottom = y
        products[i].style.transform = x
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
