import { mountProducts } from "products/ProductsIndex";
import { mountCart } from "cart/CartIndex";

console.log("container !!");

mountProducts(document.querySelector("#dev-products"));
mountCart(document.querySelector("#dev-cart"));
