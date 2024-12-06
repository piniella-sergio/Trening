let distance = document.getElementById("distForm");
let typeDelivery = document.getElementById("typeForm");
let packing = document.getElementById("packForm");
let calc = document.getElementById("calc");
// let cost = document.getElementById("cost");

// Вёрстка страницы

// Рассчёт доставки
function calculateDelivery(distance, typeDelivery, packing) {
  const tarif = 5;
  let ratioDelivery = null;
  let ratioPacking = null;

  if (typeDelivery === "standard") {
    ratioDelivery = 1;
  } else {
    ratioDelivery = 1.3;
  }

  if (packing) {
    ratioPacking = 15;
  } else {
    ratioPacking = 0;
  }

  // return distance * tarif * ratioDelivery + ratioPacking;
  console.log(distance * tarif * ratioDelivery + ratioPacking);
}

// cost.innerHTML = ("<h2>Стоимость доставки: </h2>", calculateDelivery());

// console.log(cost);

calculateDelivery();
