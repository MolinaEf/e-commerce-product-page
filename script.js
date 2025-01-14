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
const thumbnailLabels = document.querySelectorAll("#thumbnail-wrapper label")
const lightbox = document.getElementById("lightbox");
const lightboxThumbnails = document.querySelectorAll("#light-box-thumbnails label")
const lightboxImg = document.getElementById("lightbox-img")
const previousSwapLb = document.getElementById("previous-swap-lb")
const nextSwapLb = document.getElementById("next-swap-lb")
const closeLightBox = document.getElementById("close-lightbox")

let currentProductImg = 1
let quantityProduct = 0
let currentLightboxImg = 1

function checkforEmptyCart(){
    if (quantityProduct === 0) {
        emptyCartText.classList.remove("hide");
        productAdded.classList.add("hide");
        cartCounter.classList.add("hide");
    }
}


navMenuBtn.addEventListener("click", () => {
    console.log("clicked");
    navMenu.classList.add("active");
    overlay.classList.toggle("visible")
})

navClose.addEventListener("click", () => {
    console.log("clicked");
    navMenu.classList.remove("active");
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

thumbnailLabels.forEach(label => {
    label.addEventListener("click", () => {
        productImg.src = label.dataset.img;
        currentProductImg = parseInt(label.getAttribute("data-value"));
        thumbnailLabels.forEach(label => {
            label.classList.remove("active");
        })
        label.classList.add("active");
    })
})

productImg.addEventListener("click", () => {
    lightboxImg.src = `images/image-product-${currentProductImg}.jpg`;
    currentLightboxImg = currentProductImg
    lightbox.classList.toggle("hide");
    overlay.classList.toggle("visible");
    lightboxThumbnails.forEach(label => {
        label.classList.remove("active");
    })
    const activeLabel = document.querySelector(`[for="thumb${currentProductImg}-lb"]`);
    activeLabel.classList.add("active");
})

lightboxThumbnails.forEach(label => {
    label.addEventListener("click", () => {
        lightboxImg.src = label.dataset.img;
        currentLightboxImg = parseInt(label.getAttribute("data-value"))
        lightboxThumbnails.forEach(label => {
            label.classList.remove("active");
        })
        label.classList.add("active");
    })
})

previousSwapLb.addEventListener("click", () => {
    currentLightboxImg -= 1;
    if (currentLightboxImg === 0) {
        currentLightboxImg += 4
    }
    lightboxImg.src = `images/image-product-${currentLightboxImg}.jpg`;
    lightboxThumbnails.forEach(label => {
        label.classList.remove("active");
    })
    const activeLabel = document.querySelector(`[for="thumb${currentLightboxImg}-lb"]`);
    activeLabel.classList.add("active");
})

nextSwapLb.addEventListener("click", () => {
    console.log(currentLightboxImg)
    currentLightboxImg += 1;
    console.log(currentLightboxImg)
    if (currentLightboxImg === 5) {
        currentLightboxImg -= 4
    }
    console.log(currentLightboxImg)
    lightboxImg.src = `images/image-product-${currentLightboxImg}.jpg`;
    lightboxThumbnails.forEach(label => {
        label.classList.remove("active");
    })
    const activeLabel = document.querySelector(`[for="thumb${currentLightboxImg}-lb"]`);
    activeLabel.classList.add("active")
})
  
closeLightBox.addEventListener("click", () => {
    lightbox.classList.toggle("hide");
    overlay.classList.toggle("visible");
})
