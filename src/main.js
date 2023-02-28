import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import loading from './notifications/loading';
import errorApi from './notifications/api-error';
import empty from './notifications/empty';
import { loadCartFromLocalStorage } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

// const productList = async () => {
//   const response = await fetchProductsList('computador');
//   //  if(Array.isArray(productList)) {
//   //  }
// };

const createElementGetApi = async () => {
  const products = document.querySelector('.products');
  loading(true);
  try {
    const response = await fetchProductsList('computador');
    if (response.length === 0) {
      empty();
    }
    response.forEach((product) => {
      const productobj = createProductElement(product);
      products.appendChild(productobj);
    });
  } catch (error) {
    errorApi();
  } finally {
    loading(false);
  }
};
createElementGetApi();

const getSavedCartItemsOnWindowLoad = async () => {
  const productsList = await loadCartFromLocalStorage();
  productsList.forEach((product) => {
    const cartItem = createCartProductElement(product);
    document.querySelector('.cart__products').appendChild(cartItem);
  });
};
window.addEventListener('load', getSavedCartItemsOnWindowLoad);

// const savePriceOnCart = () => {
//   const Saveprice = document.querySelectorAll(
//     '.cart__product',
//   );
//   console.log("SP: ", Saveprice);
//   console.log(Saveprice.length)
// };
// window.addEventListener('DOMContentLoaded', savePriceOnCart);
