
function UnGrid(objectSelector,titleSelector,namesArray,posXArray,posYArray,backgroundSelector,backgroundHeight='120vh') {

  this.titleSelector = titleSelector;
  this.objectSelector = objectSelector;
  this.namesArray = namesArray;
  this.posXArray = posXArray;
  this.posYArray = posYArray;
  this.backgroundSelector = backgroundSelector;
  this.backgroundHeight = backgroundHeight;

  const d = document
  let templateOn, template = ["archive","home","page","shop"]
  // controla el template activo
  templateOn = template[1]
  //
  let on = d.body.classList.contains(templateOn)
  let products = d.querySelectorAll(objectSelector)
  let names = d.querySelectorAll(titleSelector)
  let name,product,x,y,found,foundIndex
  // estilos contenedor
  d.querySelector(backgroundSelector).style.minHeight = backgroundHeight
  // ejecuta el mapeo
  if (!on) {

    console.log("No se esta ejecutando UnGrid")

  } else if (on) {
    //itera la cantidad de objetos que encuentre en el template
    for (var i = 0; i < names.length; i++) {
      // sueltalos
      products[i].style.transition = "3s"
      products[i].style.position = "absolute"
      products[i].style.width = "9%" // mapped element width
      name = names[i].innerHTML
      //
      found = namesArray.includes(name)// true or false
      foundIndex = namesArray.indexOf(name)// sequence index
      // itera sobre el grid
      if (found === false) {

        console.log(name + ": not Mapped!");//debug

      } else if (found === true) {

        x = "translateX("+ posXArray[foundIndex]+")"
        y = posYArray[foundIndex]
        console.log(names[i].innerHTML + ": Mapped");//debug
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
