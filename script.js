let totalPrice = 2.99;
let countTomato = 0;
let countSalad = 0;
let countMeat=0;
let countOnion=0;
const onionPrice=0.3;
const meatPrice=3;
const saladPrice = 0.5;
const tomatoPrice = 1;
const totalspan = document.getElementById("total");
totalspan.innerHTML = "Total:" + totalPrice + "$";
function addPrice(product) {
  switch (product) {
    case "tomato": {
      totalPrice += tomatoPrice;
      break;
    }
    case "salad": {
      totalPrice += saladPrice;
      break;
    }
    case "meat": {
      totalPrice += meatPrice;
      break;
    }
    case "onion": {
      totalPrice += onionPrice;
      break;
    }
  }
  totalspan.innerHTML = "Total:" + totalPrice + "$";
}

function minusPrice(product) {
  switch (product) {
    case "tomato": {
      totalPrice -= tomatoPrice;
      break;
    }
    case "salad": {
      totalPrice -= saladPrice;
      break;
    }
    case "meat": {
      totalPrice -= meatPrice;
      break;
    }
    case "onion": {
      totalPrice -= onionPrice;
      break;
    }
  }
  totalspan.innerHTML = "Total:" + totalPrice + "$";
}

function add(product) {
  const p = document.createElement("img");
  p.className = "addon";
  const div = document.getElementById("container");
  addPrice(product);
  switch (product) {
    case "tomato": {
      p.src = "tomato.png";
      countTomato++;
      p.id = "tomato-" + countTomato;
      div.appendChild(p);
      break;
    }
    case "salad": {
      p.src = "hasa.png";
      countSalad++;
      p.id = "salad-" + countSalad;
      div.appendChild(p);
      break;
    }
    case "meat": {
      p.src = "burgermeat.png";
      countMeat++;
      p.id = "meat-" + countMeat;
      div.appendChild(p);
      break;
    }
    case "onion": {
      p.src = "onion.png";
      countOnion++;
      p.id = "onion-" + countOnion;
      div.appendChild(p);
      break;
    }
  }
}

function remove(product) {
  const div = document.getElementById("container");
  switch (product) {
    case "tomato": {
      if (countTomato > 0) {
        minusPrice(product);
        const id = "tomato-" + countTomato;
        countTomato--;
        const p = document.getElementById(id);
        div.removeChild(p);
      }
      break;
    }
    case "salad": {
      if (countSalad > 0) {
        minusPrice(product);
        const id = "salad-" + countSalad;
        countSalad--;
        const p = document.getElementById(id);
        div.removeChild(p);
        break;
      }
    }
    case "meat": {
      if (countMeat > 0) {
        minusPrice(product);
        const id = "meat-" + countMeat;
        countMeat--;
        const p = document.getElementById(id);
        div.removeChild(p);
        break;
      }
    }
    case "onion": {
      if (countOnion > 0) {
        minusPrice(product);
        const id = "onion-" + countOnion;
        countOnion--;
        const p = document.getElementById(id);
        div.removeChild(p);
        break;
      }
    }
  }
}
