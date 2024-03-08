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
