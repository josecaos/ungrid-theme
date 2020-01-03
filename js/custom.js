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
const todosLugares = [
  "Bed VIP2",
  "Bed VIP1",
  "Bed VIP2",
  "Bed VIP3",
  "Bed VIP4",
  "Bed VIP5",
  "Bed VIP6",
  "AREA A",
  "AREA B",
  "AREA C",
  "Bed A1",
  "Bed A2",
  "Bed A3",
  "Bed A4",
  "Bed A5",
  "Bed A6",
  "Bed A7",
  "Bed B1",
  "Bed B2",
  "Bed B3",
  "Bed B4",
  "Bed B5",
  "Bed B6",
  "Bed B7",
  "Bed C1",
  "Bed C2",
  "Bed C3",
  "Bed C4",
  "Bed C5",
];
const mappedElement = "#mapa_playa ul.products li"
const searchForTag = "#mapa_playa ul.products li a h2"
const parentContainer = "#mapa_playa"
const parentHeight = '140vh'

jQuery(document).ready(() => {

  img();
  lugar_disponible();

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

// //
// function normalizeArray(array,oper,value,cleanLastChar = true,lastChar = '%') {
//
//   this.array = array;
//   this.oper = oper;
//   this.value = value;
//   this.cleanLastChar = cleanLastChar;
//
//   let newArray = []
//   let simbols = ['+', '-', '*', '/', '**']
//   let simbol
//
//   switch (oper) {
//     case 'sum':
//     simbol = simbols[0]
//     break;
//     case 'rest':
//     simbol = simbols[1]
//     break;
//     case 'times':
//     simbol = simbols[2]
//     break;
//     case 'division':
//     simbol = simbols[3]
//     break;
//     case 'power':
//     simbol = simbols[4]
//     break;
//     default:
//     simbol = simbols[0]
//
//   }
//
//   for (var i = 0; i < array.length; i++) {
//
//     let x,y,z,xclean,zfinal
//
//     x = array[i].toString()
//     y = value.toString()
//
//     if (cleanLastChar === true) {
//
//       xclean = x.slice(0,x.length-1)
//       z = eval(xclean + simbol + y)
//       zfinal = z.toString().concat(lastChar)
//       newArray.push(zfinal)
//
//     } else if (cleanLastChar === false) {
//
//       z = eval(x + simbol + y)
//       newArray.push(z)
//     }
//
//   }//endfor
//
//   return newArray
// }

// interactua con el calendario del mapa
function lugar_disponible() {

  setTimeout(() => {

    let dia = document.querySelectorAll('.wc-bookings-availability-cal-date');

    dia.forEach((item) => {// click

      let numeroDia = item.textContent;

      item.addEventListener('click', () => {
        let disponiblesDia = item.nextElementSibling
        let existentes = extrae_disponibles(disponiblesDia.children);

        compara_disponibles(existentes,todosLugares);

        //
      }); //fin click

    });//fin for

  },500);

  const extrae_disponibles = (lugares) => {

    let resultado = [];

    for (let fecha of lugares) {
      let lugar = fecha.childNodes[0].textContent;
      //
      resultado.push(lugar);
    }
    console.log("Cada lugar en calendario: ", resultado);
    return resultado;
  }

  const compara_disponibles = (disponibles, lugaresTodos) => {

    let disponiblesFiltrado = [];
    // TODO: busca todos los lugares en el array de resultado
    disponibles.forEach((item) => {

      let existe;
      existe = lugaresTodos.includes(item);

      if (existe === true) {
        disponiblesFiltrado.push(item);
      }
    });

    console.log("cada lugar disponible: ", disponiblesFiltrado);
    asigna_disponibilidad(disponiblesFiltrado);

  }

  const asigna_disponibilidad = (disponibles) => {

    let lugares = document.querySelectorAll(".product");
    let disponible;
    if (disponibles.length != 0) {//pasa si hay lugares

      //asigna clase hidden a section.sold "cintillo de ocupado"
      lugares.forEach((item,i) => {
        // objeto texto producto
        let texto = item.querySelector(".woocommerce-loop-product__title");
        //asigna cintillo
        disponible = disponibles.includes(texto.textContent)

        let cintilloOcupado = item.querySelector(".sold");
        if (disponible === false) {
          cintilloOcupado.classList.remove("hidden");
        } else if (disponible === true) {
          cintilloOcupado.classList.add("hidden");
        }
      });

    } else {
      lugares.forEach((item) => {
        item.querySelector(".sold").classList.remove("hidden");
      });
      console.log("No hay lugares disponibles");
    }

  }

}
