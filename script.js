let packing = confirm("Посылка в праздничной упаковке ?");
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

  return distance * tarif * ratioDelivery + ratioPacking;
}

console.log(calculateDelivery(10, "standard", false));
console.log(calculateDelivery(10, "standard", true));
console.log(calculateDelivery(10, "express", false));
console.log(calculateDelivery(10, "express", true));
