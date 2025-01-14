const navMenuBtn = document.getElementById("open-menu")
const navMenu = document.getElementById("nav-menu")
const navClose = document.getElementById("nav-close")
const imgSwapPrevious = document.getElementById("previous-swap");
const imgSwapNext = document.getElementById("next-swap");
const productImg = document.getElementById("product-img")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const quantityNumber = document.getElementById("quantity-number")
const cartCounter = document.getElementById("cart-counter")
const addToCartBtn = document.getElementById("add-to-cart")
const cartContainer = document.getElementById("cart-container")
const cartContentBtn = document.getElementById("cart-btn")
const productAdded = document.getElementById("product-added")
const quantityAdded = document.getElementById("quantity-added")
const finalPriceAdded = document.getElementById("final-price-added")
const emptyCartText = document.getElementById("empty-cart-text")

const removeFromCartBtn = document.getElementById("remove-from-cart")


let currentProductImg = 1
let quantityProduct = 0

function checkforEmptyCart(){
    if (quantityProduct === 0) {
        emptyCartText.classList.remove("hide");
        productAdded.classList.add("hide");
        cartCounter.classList.add("hide");
    }
}


navMenuBtn.addEventListener("click", () => {
    console.log("clicked")
    navMenu.classList.toggle("hide")
    overlay.classList.toggle("visible")
})

navClose.addEventListener("click", () => {
    console.log("clicked");
    navMenu.classList.toggle("hide");
    overlay.classList.toggle("visible");
})

imgSwapPrevious.addEventListener("click", () => {
    currentProductImg -= 1;
    if (currentProductImg === 0) {
        currentProductImg += 4
    }
    productImg.src = `images/image-product-${currentProductImg}.jpg`;
})

imgSwapNext.addEventListener("click", () => {
    currentProductImg += 1;
    if (currentProductImg === 5) {
        currentProductImg -= 4
    }
    console.log(currentProductImg)
    productImg.src = `images/image-product-${currentProductImg}.jpg`;
    console.log(productImg.src)
})

minusBtn.addEventListener("click", () => {
    console.log("minus")
    if (quantityNumber.innerText === "0") {
        quantityNumber.innerText = "0"
    } else {
        quantityNumber.innerText = parseInt(quantityNumber.innerText) - 1
    }
})

plusBtn.addEventListener("click", () => {
    console.log("plus");
    quantityNumber.innerText = parseInt(quantityNumber.innerText) + 1
})






addToCartBtn.addEventListener("click", () => {
    if (quantityNumber.innerText !== "0") {
    console.log("add to cart");
    quantityProduct += parseInt(quantityNumber.innerText)
    cartCounter.innerText = `${quantityProduct}`
    cartCounter.classList.remove("hide");
    }
    emptyCartText.classList.add("hide");
    productAdded.classList.remove("hide");
    quantityAdded.innerText = `$125.00 x ${quantityProduct}`;
    finalPriceText = quantityProduct * 125;
    finalPriceAdded.innerText = `$${finalPriceText}.00 `;
})

cartContentBtn.addEventListener("click", () => {
    cartContainer.classList.toggle("hide")
})




removeFromCartBtn.addEventListener("click", () => {
    quantityProduct = 0;
    checkforEmptyCart();
})