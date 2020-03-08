// Ungrid settings para posicionar los productos
const row1 = [
  ["Bed VIP2", "Bed A1", "Bed A2", "Bed A3", "Bed A4", "Bed A5", "Bed A6", "Bed A7", "Bed VIP1"],
  ['10%', '150%', '260%', '370%', '480%', '590%', '700%', '810%', '940%'],
  ["3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%"]
]
const row2 = [
  ["Bed VIP4", "Bed B1", "Bed B2", "Bed B3", "Bed B4", "Bed B5", "Bed B6", "Bed B7", "Bed VIP3"],
  ['10%', '150%', '260%', '370%', '480%', '590%', '700%', '810%', '940%'],
  ["28%", "28%", "28%", "28%", "28%", "28%", "28%", "28%", "28%"]
]
const row3 = [
  ["AREA A", "AREA B", "AREA C", "Bed VIP6", "Bed C1", "Bed C2", "Bed C3", "Bed C4", "Bed C5", "Bed VIP5"],
  ['20%', '230%', '820%', '190%', '300%', '400%', '500%', '600%', "700%", '940%'],
  ["59%", "73%", "71%", "51%", "53%", "55%", "56%", "58%", "60%", "61%"]
] // fin ungrid settings
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

const mappedElement = "#mapa_playa ul.products li";
const searchForTag = "#mapa_playa ul.products li a h2";
const parentContainer = "#mapa_playa";
const parentHeight = '140vh';

jQuery(document).ready(() => {

  img();
  lugar_disponible();
  palmeras();

  // movil
  if (window.innerWidth < 588) {
    jQuery(document).ajaxStart(function() {
      console.log("AJAX START!!!!");
    });
    jQuery(document).ajaxComplete((e) => {
      console.log("AJAX COMPLETE!!!!");
      // lugar_disponible();
    });
  } else {
    // default
  }
  //arregla la altura del contenedor pagina en movil
  let pageContainer = document.querySelector("#page-container")
  jQuery(window).on("resize", () => {

    if (window.innerWidth <= 970) {
      setTimeout(() => {
        pageContainer.style.paddingTop = "155px";
      },500);
    } else {
      pageContainer.style.paddingTop = "82px";
    }
  });

  // Mapa solo en Home, Archive o Custom term
  if (document.body.classList.contains('home') ||
  document.body.classList.contains('archive') ||
  document.body.classList.contains('term-yaya-spots')) {

    let top = new UnGrid(mappedElement, searchForTag, row3[0], row3[1], row3[2], parentContainer, parentHeight)
    let middle = new UnGrid(mappedElement, searchForTag, row2[0], row2[1], row2[2], parentContainer, parentHeight)
    let bottom = new UnGrid(mappedElement, searchForTag, row1[0], row1[1], row1[2], parentContainer, parentHeight)

  }
  //
  // limpia texto antes del precio
  let prods = document.querySelectorAll(".price")
  for (var i = 0; i < prods.length; i++) {
    prods[i].firstChild.nodeValue = ""
  }

  console.log("Scripts OK.")

})

function img() {
  jQuery('.imgLiquid.imgLiquidFill').imgLiquid()
  jQuery('.imgLiquid.imgLiquidNoFill').imgLiquid({
    fill: false
  })

}

// interactua con el calendario del mapa
function lugar_disponible() {

  let dia = document.querySelectorAll('.wc-bookings-availability-cal-date');

  dia.forEach((item) => { // click

    let numeroDia = item.textContent;

    item.addEventListener('click', (e) => {
      // DEBUG:
      fecha(item);

      //
      // si la ventana es menor a 589 busca en lista movil
      let disponiblesDia, existentes;
      let ventana = window.innerWidth;

      //Ilumina el dia clickado + borra fondo  de los demas dias
      let dias = document.querySelectorAll('.wc-bookings-availability-cal-date');
      dias.forEach((item) => {
        item.style.backgroundColor = 'lightgray';
      })
      item.style.backgroundColor = '#008EA9';
      //
      if (ventana > 588) { // escritorio
        disponiblesDia = item.nextElementSibling
        existentes = extrae_disponibles(disponiblesDia.childNodes);
        compara_disponibles(existentes, todosLugares);

      } else { // movil


        jQuery(document).ajaxStart(function() {
          console.log("AJAX START!!!!");
        });
        jQuery(document).ajaxComplete((e) => {
          console.log("AJAX COMPLETE!!!!");
          // lugar_disponible();
        });


        setTimeout(() => {

          let disponiblesDiaMovil = document.querySelectorAll('.wc-bookings-availability-event-table .wc-bookings-availability-item-information');

          disponiblesDia = disponiblesDiaMovil;
          existentes = extrae_disponibles_movil(disponiblesDia);
          compara_disponibles_movil(existentes, todosLugares);

        }, 10000);
        // confirma funcion por seguridad de tiempos de carga en el ajax del calendario
        // setTimeout(() => {
        //
        //   existentes = extrae_disponibles_movil(disponiblesDia);
        //   compara_disponibles_movil(existentes,todosLugares);
        //
        // },8000);

      } //termina interaccion movil

    }); //fin click

  }); //fin for


  const extrae_disponibles = (lugares) => {

    let resultado = [];
    for (let spot of lugares) {
      let lugar = spot.childNodes[0].textContent;
      //
      resultado.push(lugar);
    }
    return resultado;
  }

  const extrae_disponibles_movil = (lugares) => {

    let resultado = [];

    for (let spot of lugares) {

      let textoEstatus = spot.parentElement.querySelector('button');
      let lugar = spot.childNodes[0].childNodes[0].textContent;

      if (textoEstatus.textContent === "Sold out") {
        let textoOcupado;
        textoOcupado = lugar + ' (Sold Out)';
        resultado.push(textoOcupado);
        console.log("No Disponible!");
      } else {
        console.log("Disponibles!");
        resultado.push(lugar);
      }

    }
    return resultado;
  }

  const compara_disponibles = (disponibles, lugaresTodos) => {

    let disponiblesFiltrado = [];
    // busca todos los lugares en el array de resultado
    disponibles.forEach((item) => {

      let existe;
      existe = lugaresTodos.includes(item);

      if (existe === true) {
        disponiblesFiltrado.push(item);
      }
    });

    asigna_disponibilidad(disponiblesFiltrado);

  }

  const compara_disponibles_movil = (disponibles, lugaresTodos) => {

    let disponiblesFiltrado = [];
    // busca todos los lugares en el array de resultado
    console.log(disponibles);
    disponibles.forEach((item) => {

      let existe;
      existe = lugaresTodos.includes(item);

      if (existe === true) {
        disponiblesFiltrado.push(item);
      }
    });

    asigna_disponibilidad_movil(disponiblesFiltrado);

  }

  const asigna_disponibilidad = (disponibles) => {

    let lugares = document.querySelectorAll(".product");
    let disponible;
    if (disponibles.length != 0) { //pasa si hay lugares

      //asigna clase hidden a section.sold "cintillo de ocupado"
      lugares.forEach((item, i) => {
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
    }

  }

  const fecha = (e) => {

    let mes;
    let dia = e.innerHtml;
    let year;

    console.log("mes: ", e);
    console.log("dia: ", e);
    console.log("year: ", e);

  }

}
const asigna_disponibilidad_movil = (disponibles) => {

  let lugares = document.querySelectorAll(".product");
  let disponible;
  if (disponibles.length != 0) { //pasa si hay lugares

    //asigna clase hidden a section.sold "cintillo de ocupado"
    lugares.forEach((item, i) => {
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
    // console.log("No hay lugares disponibles");
  }

}

function palmeras() {
  let palmera1 = document.querySelector(".flotante-1");
  let palmera2 = document.querySelector(".flotante-2");
  let palmera3 = document.querySelector(".flotante-3");

  if (!!palmera1 || !!palmera2 || !!palmera3) {

    palmera1.animate([
      { transform: 'rotate(0deg) translateX(546%)' },
      { transform: 'rotate(0.25deg) translateX(546%)' },
      { transform: 'rotate(0deg) translateX(546%)' },
      { transform: 'rotate(0.25deg) translateX(546%)' },
      { transform: 'rotate(0.5deg) translateX(546%)' },
      { transform: 'rotate(0.75deg) translateX(546%)' },
      { transform: 'rotate(0deg) translateX(546%)' },
    ], {
      duration: 13000,
      iterations: Infinity
    });
    palmera2.animate([
      { transform: 'rotate(0deg) translateX(285%)' },
      { transform: 'rotate(0.25deg) translateX(285%)' },
      { transform: 'rotate(0deg) translateX(285%)' },
      { transform: 'rotate(0.25deg) translateX(285%)' },
      { transform: 'rotate(0.5deg) translateX(285%)' },
      { transform: 'rotate(0.75deg) translateX(285%)' },
      { transform: 'rotate(0deg) translateX(285%)' },
    ], {
      duration: 14000,
      iterations: Infinity
    });
    palmera3.animate([
      { transform: 'rotate(1deg) translateX(4%)' },
      { transform: 'rotate(1.5deg) translateX(4%)' },
      { transform: 'rotate(1deg) translateX(4%)' },
      { transform: 'rotate(1.5deg) translateX(4%)' },
      { transform: 'rotate(1.75deg) translateX(4%)' },
      { transform: 'rotate(2deg) translateX(4%)' },
      { transform: 'rotate(1deg) translateX(4%)' },
    ], {
      duration: 10000,
      iterations: Infinity
    });
  }

  // Inicio palmeras
  let flotante = document.querySelectorAll('.flotante');
  setTimeout(() => {

    flotante.forEach((item) => {
      item.style.opacity = 1;
    });

  }, 2000)
}
