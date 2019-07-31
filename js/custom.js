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
  ['20%','230%','820%','190%','300%','400%','500%','600%',"700%",'940%'],
  ["63%","77%","75%","55%","57%","59%","60%","62%","64%","65%"]
]
const mappedElement = "ul.products li"
const searchForTag = "ul.products li a h2"
const parentContainer = "#mapa_playa"
const parentHeight = '150vh'

jQuery(document).ready(() => {

  let newArr = normalizeArray(row1[1],"sum",10)

  img()

  let top = new UnGrid(mappedElement,searchForTag,row3[0],row3[1],row3[2],parentContainer,parentHeight)
  let middle = new UnGrid(mappedElement,searchForTag,row2[0],row2[1],row2[2],parentContainer,parentHeight)
  let bottom = new UnGrid(mappedElement,searchForTag,row1[0],newArr,row1[2],parentContainer,parentHeight)
  //
  // limpia texto antes del precio
  let prods = document.querySelectorAll(".price")
  for (var i = 0; i < prods.length; i++) {
    // prods[i].firstChild.nodeValue = ""
  }

  console.log("Scripts OK.")

}
)

function img() {
  jQuery('.imgLiquid.imgLiquidFill').imgLiquid()
  jQuery('.imgLiquid.imgLiquidNoFill').imgLiquid({
    fill: false
  })

}

function normalizeArray(array,oper,value,cleanLastChar=true) {

  let newArray = []
  let simbols = [ '+', '-', '*', '/']
  let simbol

  switch (oper) {
    case 'sum':
      simbol = simbols[0]
      break;
    case 'rest':
      simbol = simbols[1]
      break;
    case 'times':
      simbol = simbols[2]
      break;
    case 'division':
      simbol = simbols[3]
      break;
    default:
    simbol = simbols[0]

  }

  for (var i = 0; i < array.length; i++) {

    let x,y,z,clean

    x = array[i].toString()
    y = value.toString()

    if (cleanLastChar === true) {

      xclean = x.slice(0,x.length-1)
      console.log(xclean)//resultado uno por uno
      z = eval(xclean + simbols[2] + y)

    } else if (cleanLastChar === false) {

      z = eval(x + simbols[2] + y)
    }

    newArray.push(z)

    console.log(newArray)//nuevo array

  }//endfor

  return newArray
}
