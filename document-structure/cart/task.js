const clickContol = document.querySelectorAll("div.product__quantity-control");
const clickMinus = document.querySelectorAll("div.product__quantity-control_dec");
const clickPlus = document.querySelectorAll("div.product__quantity-control_inc");
const quantityVal = document.querySelectorAll("div.product__quantity-value");
const cartProduct = document.getElementsByClassName("cart__product");
const cartProducts = document.getElementsByClassName("cart__products");
const buttons = document.getElementsByClassName("product__add");
let arr = [];

for (let index = 0; index < buttons.length; index++) {

    buttons[index].onclick = function () {
        const productId = this.closest("div.product").dataset["id"];
        const productImgSrc = this.closest("div.product").querySelector("img").src;
        const productQuantity = this.closest("div.product__quantity").querySelector("div.product__quantity-controls").children[1].textContent;
        const createCart = function () {
            const cartProd = document.createElement("div");
            cartProd.classList.add("cart__product");
            cartProd.dataset.id = productId;
            const newInnerDiv = document.createElement("div");
            newInnerDiv.classList.add("cart__product-count");
            newInnerDiv.textContent = productQuantity;
            const newImg = document.createElement("img");
            newImg.classList.add("cart__product-image");
            newImg.src = productImgSrc;
            cartProd.appendChild(newImg);
            cartProd.appendChild(newInnerDiv);
            return cartProd;
        }

        if (arr.includes(productId)) {

            for (let index = 0; index < cartProduct.length; index++) {
                if (cartProduct[index].dataset.id === productId) {
                    let productCartCount = Number(cartProduct[index].children[1].textContent);
                    let productShopCount = Number(this.closest("div.product__quantity").querySelector("div.product__quantity-controls").children[1].textContent);
                    cartProduct[index].children[1].textContent = productCartCount + productShopCount;
                }
            }

        } else {
            cartProducts[0].appendChild(createCart());
            arr.push(productId);
        }


    }

    clickPlus.item(index).onclick = function () {
        let prod = this;
        prod.closest("div.product__quantity-controls").children.item(1).textContent++;
    }

    clickMinus.item(index).onclick = function () {
        let prod = this;
        if (prod.closest("div.product__quantity-controls").children.item(1).textContent > 0) {
            this.closest("div.product__quantity-controls").children.item(1).textContent--;
        }
    }

}
