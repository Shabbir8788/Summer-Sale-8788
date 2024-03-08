// let totalPrice = 0;
// let discountPrice = 0;
// let remainingPrice = 0;

// const couponButton = document.getElementById("apply-btn");
// couponButton.disabled = true;

// const makePurchaseButton = document.getElementById("purchase-btn");
// makePurchaseButton.disabled = true;

// function displayValue(idName, value) {
//   const tag = document.getElementById(idName);
//   tag.innerText = value;
// }

// function addSelectedItemsEntry(itemsType, itemPrice) {
//   const selectedItems = document.getElementById("product-entry");
//   const count = selectedItems.childElementCount;
//   const p = document.createElement("p");
//   p.classList.add("my-4");
//   p.classList.add("font-bold");
//   p.classList.add("text-xl");
//   p.innerHTML = `${count + 1}. ${itemsType}`;
//   selectedItems.appendChild(p);

//   totalPrice += parseFloat(itemPrice);
//   updateTotalPrice();
// }

// function updateTotalPrice() {
//   displayValue("total-price", totalPrice.toFixed(2));
//   if (totalPrice >= 200) {
//     couponButton.disabled = false;
//   } else {
//     couponButton.disabled = true;
//   }

//   if (totalPrice > 0) {
//     makePurchaseButton.disabled = false;
//   } else {
//     makePurchaseButton.disabled = true;
//   }

//   if (discountPrice > 0) {
//     updateDiscount();
//   }
//   updateGrandTotal();
// }

// function couponCode() {
//   const couponCodeInput = document.getElementById("coupon-code");
//   const promoCode = couponCodeInput.value;
//   couponCodeInput.value = "";
//   if (totalPrice >= 200 && promoCode === "SELL200") {
//     updateDiscount();
//   } else {
//     alert("Please enter a valid coupon code for 20% discount");
//   }
// }

// function updateDiscount() {
//   discountPrice = (20 * totalPrice) / 100;
//   displayValue("discount-price", discountPrice.toFixed(2));
// }

// function updateGrandTotal() {
//   remainingPrice = totalPrice - discountPrice;
//   displayValue("remaining-price", remainingPrice.toFixed(2));
// }

// function resetValues() {
//   totalPrice = 0;
//   discountPrice = 0;
//   remainingPrice = 0;
// }

// const goHomeButton = document
//   .getElementById("go-home")
//   .addEventListener("click", function () {
//     resetValues();
//     displayValue("total-price", totalPrice.toFixed(2));
//     displayValue("discount-price", discount.toFixed(2));
//     displayValue("remaining-price", remainingPrice.toFixed(2));
//     displayValue("product-entry", "");

//     couponButton.disabled = true;
//     makePurchaseButton.disabled = true;
//   });

// const couponCodeApply = document
//   .getElementById("apply-btn")
//   .addEventListener("click", function () {
//     couponCode();
//     updateGrandTotal();
//   });

// const kitchenAccessories = document
//   .getElementById("prod1")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("K. Accessories", "39.00");
//   });

// const cuttingBoardKitchenware = document
//   .getElementById("prod2")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("Cutting Board", "25.00");
//   });

// const homeCookerKitchenware = document
//   .getElementById("prod3")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("Home Cooker", "49.00");
//   });

// const sportCapSportswear = document
//   .getElementById("prod4")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("Sports Back Cap", "49.00");
//   });

// const fullJerseySportswear = document
//   .getElementById("prod5")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("Full Jersey Set", "69.00");
//   });

// const sportsCatesSportswear = document
//   .getElementById("prod6")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("Sports cates", "159.00");
//   });

// const singleRelaxChairFurniture = document
//   .getElementById("prod7")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("Single Relax Chair", "185.00");
//   });

// const childrenPlayFurniture = document
//   .getElementById("prod8")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("Children play", "299.00");
//   });

// const flexibleSofaFurniture = document
//   .getElementById("prod9")
//   .addEventListener("click", function () {
//     addSelectedItemsEntry("Flexible Sofa", "399.00");
//   });

let products = {
  data: [
    {
      id: "prod1",
      productType: "K. Accessories",
      productPrice: "39.00",
    },
    {
      id: "prod2",
      productType: "Cutting Board",
      productPrice: "25.00",
    },
    {
      id: "prod3",
      productType: "Home Cooker",
      productPrice: "49.00",
    },
    {
      id: "prod4",
      productType: "Sports Black Cap",
      productPrice: "49.00",
    },
    {
      id: "prod5",
      productType: "Full Jersey Set",
      productPrice: "69.00",
    },
    {
      id: "prod6",
      productType: "Sports Sneaker",
      productPrice: "159.00",
    },
    {
      id: "prod7",
      productType: "Single Relax Chair",
      productPrice: "185.00",
    },
    {
      id: "prod8",
      productType: "Children Play",
      productPrice: "299.00",
    },
    {
      id: "prod9",
      productType: "Flexible Sofa",
      productPrice: "339.00",
    },
  ],
};

for (let product of products.data) {
  document.getElementById(product.id).addEventListener("click", function () {
    addProduct(product);
  });
}

let totalPrice = 0;
let discountPrice = 0;
let remainingPrice = 0;

const couponButton = document.getElementById("apply-btn");
couponButton.disabled = true;

const purchaseButton = document.getElementById("purchase-btn");
purchaseButton.disabled = true;

function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function addProduct(product) {
  const productItems = document.getElementById("product-entry");
  const count = productItems.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-4");
  p.classList.add("font-bold");
  p.classList.add("text-xl");
  p.innerHTML = `${count + 1}. ${product.productType}`;
  productItems.appendChild(p);

  totalPrice += parseFloat(product.productPrice);
  currentTotalPrice();
}

function currentTotalPrice() {
  setInnerTextById("total-price", totalPrice.toFixed(2));

  if (totalPrice >= 200) {
    couponButton.disabled = false;
  } else {
    couponButton.disabled = true;
  }

  if (totalPrice > 0) {
    purchaseButton.disabled = false;
  } else {
    purchaseButton.disabled = true;
  }

  if (discountPrice > 0) {
    currentDiscount();
  }

  remainingPriceTotal();
}

function currentDiscount() {
  discountPrice = (20 * totalPrice) / 100;
  setInnerTextById("discount-price", discountPrice.toFixed(2));
}

function remainingPriceTotal() {
  remainingPrice = totalPrice - discountPrice;
  setInnerTextById("remaining-price", remainingPrice.toFixed(2));
}

function resetValue() {
  totalPrice = 0;
  discountPrice = 0;
  remainingPrice = 0;
}

function couponCode() {
  const couponCodeInput = document.getElementById("coupon-code");
  const couponCode = couponCodeInput.value;
  couponCodeInput.innerText = "";
  if (totalPrice >= 200 && couponCode === "SELL200") {
    currentDiscount();
  } else {
    alert("Please enter valid coupon code");
  }
}

document.getElementById("apply-btn").addEventListener("click", function () {
  couponCode();
  remainingPriceTotal();
});

document.getElementById("go-home").addEventListener("click", function () {
  resetValue();
  setInnerTextById("total-price", totalPrice.toFixed(2));
  setInnerTextById("discount-price", discountPrice.toFixed(2));
  setInnerTextById("remaining-price", remainingPrice.toFixed(2));
  setInnerTextById("product-entry", "");

  couponButton.disabled = true;
  purchaseButton.disabled = true;
});
