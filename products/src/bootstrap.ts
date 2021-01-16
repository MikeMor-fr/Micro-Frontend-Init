import faker from "faker";

const mountProducts = (element) => {
  let products = "";

  for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  console.log("products !!");

  element.innerHTML = products;
};

// Context 1 -> running in development isolation
// We are using our local html file
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products-dev-isolation");

  // Assuming our container doesn't have an element
  // with id=dev-products-dev-isolation
  if (element) {
    // We are probably runninng in isolation
    mountProducts(element);
  }
}

// Context 2 -> running in develoment or production
// Throught the container App
export { mountProducts };
