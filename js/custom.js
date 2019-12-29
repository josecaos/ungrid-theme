const row1 = [
  ["Bed VIP2","Bed A1","Bed A2","Bed A3","Bed A4","Bed A5","Bed A6","Bed A7","Bed VIP1"],
  ['10%','150%','260%','370%','480%','590%','700%','810%','940%'],
  ["3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%" ]
]
const row2 = [
  ["Bed VIP4","Bed B1","Bed B2","Bed B3","Bed B4","Bed B5","Bed B6","Bed B7","Bed VIP3"],
  ['10%','150%','260%','370%','480%','590%','700%','810%','940%'],
  [ "28%", "28%", "28%", "28%", "28%", "28%", "28%", "28%", "28%" ]
]
const row3 = [
  ["AREA A","AREA B","AREA C","Bed VIP6","Bed C1","Bed C2","Bed C3","Bed C4","Bed C5","Bed VIP5"],
  ['20%','230%','820%','190%','300%','400%','500%','600%',"700%",'940%'],
  [ "59%", "73%", "71%", "51%", "53%", "55%", "56%", "58%", "60%", "61%" ]
]
const mappedElement = "#mapa_playa ul.products li"
const searchForTag = "#mapa_playa ul.products li a h2"
const parentContainer = "#mapa_playa"
const parentHeight = '140vh'

jQuery(document).ready(() => {

  // dbug
  let newArr = normalizeArray(row3[2],"rest",2)
  console.log(newArr);
  //
  img();


  //detecta cambio en el contenido del calendario
  // jQuery(document).ajaxStart(function() {
  //   console.log('Ajax call started');
  //   jQuery("#loading").show();
  // });
  jQuery(document).ajaxComplete(function() {
    lugar_disponible()
  });

  // Mapa solo en Home, Archive o Custom term
  if (document.body.classList.contains('home') ||
  document.body.classList.contains('archive') ||
  document.body.classList.contains('term-yaya-spots')) {

    let top = new UnGrid(mappedElement,searchForTag,row3[0],row3[1],row3[2],parentContainer,parentHeight)
    let middle = new UnGrid(mappedElement,searchForTag,row2[0],row2[1],row2[2],parentContainer,parentHeight)
    let bottom = new UnGrid(mappedElement,searchForTag,row1[0],row1[1],row1[2],parentContainer,parentHeight)

  }
  //
  // limpia texto antes del precio
  let prods = document.querySelectorAll(".price")
  for (var i = 0; i < prods.length; i++) {
    prods[i].firstChild.nodeValue = ""
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

//
function normalizeArray(array,oper,value,cleanLastChar = true,lastChar = '%') {

  this.array = array;
  this.oper = oper;
  this.value = value;
  this.cleanLastChar = cleanLastChar;

  let newArray = []
  let simbols = ['+', '-', '*', '/', '**']
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
    case 'power':
    simbol = simbols[4]
    break;
    default:
    simbol = simbols[0]

  }

  for (var i = 0; i < array.length; i++) {

    let x,y,z,xclean,zfinal

    x = array[i].toString()
    y = value.toString()

    if (cleanLastChar === true) {

      xclean = x.slice(0,x.length-1)
      z = eval(xclean + simbol + y)
      zfinal = z.toString().concat(lastChar)
      newArray.push(zfinal)

    } else if (cleanLastChar === false) {

      z = eval(x + simbol + y)
      newArray.push(z)
    }

  }//endfor

  return newArray
}

// interactua con el calendario del mapa
function lugar_disponible() {

  setTimeout(() => {

    let dia = document.querySelectorAll('.fc-day-top');

    let debug = document.querySelectorAll('.fc-event-container a');
    dia.forEach((item) => {
      item.addEventListener('click', () => {

        let fecha = item.dataset.date;
        reconoce_dia(fecha);
        // extrae_disponibles(item);

// DEBUG: trae indice de <td> con respecto a la fecha
        let trBG = document.querySelectorAll(`[data-date*="${fecha}"]`);
        trBG.forEach((item) => {
          console.log('DEBUG: ', item.cellIndex);
          // .fc-day-grid index
          let semana = item.closest('.fc-week');
          semana = semana.children[1].querySelectorAll('tr td');
          semana.forEach((item) => {
            console.log("DEBUG 1.5: ", item);
          })
          console.log('DEBUG2: ',semana);
        });
        //.fc-content-skeleton


        //
      })
    })

  },1000)

  const reconoce_dia = (date) => {
    let subString = date.substring(
      date.lastIndexOf("-") + 1,
    );
    console.log(subString);
  }

  const extrae_disponibles = (elemento) => {
    // let disponible = document.querySelector(elemento);
    console.log('EXTRAE_DISPONIBLE', elemento);
  }

}

// TODO: extrae data-date
//busca los elementos 'a' que tengan ese data-date extraido
//
