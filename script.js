// Рассчёт доставки
function calculateDelivery() {
  const distance = parseFloat(document.getElementById("dist").value);
  const typeDelivery = document.getElementById("type").value;
  const packing = document.getElementById("pack").checked;

  if (isNaN(distance) || distance <= 0) {
    document.getElementById("cost").innerText =
      "Пожалуйста, введите корректное расстояние.";
    return;
  }

  const cost = getDeliveryCost(distance, typeDelivery, packing);
  document.getElementById("cost").innerText = cost.toFixed(2) + " руб.";
}

// Функция для расчёта стоимости
function getDeliveryCost(distance, typeDelivery, packing) {
  const tarif = 5;
  let ratioDelivery = typeDelivery === "standard" ? 1 : 1.3;
  let ratioPacking = packing ? 15 : 0;

  return distance * tarif * ratioDelivery + ratioPacking;
}
