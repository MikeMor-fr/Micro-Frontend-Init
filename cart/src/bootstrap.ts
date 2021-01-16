import faker from "faker";

const mountCart = (element) => {
  console.log("cart !!");

  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  element.innerHTML = cartText;
};

// Context 1 -> running in development isolation
// We are using our local html file
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart-dev-isolation");

  // Assuming our container doesn't have an element
  // with id=dev-products-dev-isolation
  if (element) {
    // We are probably runninng in isolation
    mountCart(element);
  }
}

// Context 2 -> running in develoment or production
// Throught the container App
export { mountCart };
