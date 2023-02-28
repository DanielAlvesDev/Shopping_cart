import { createCustomElement } from '../helpers/shopFunctions';

const loading = (isActive) => {
  const products = document.querySelector('.products');
  if (!isActive) {
    products.removeChild(document.querySelector('.loading'));
    return;
  }

  const handleLoading = createCustomElement('p', 'loading', 'carregando...');
  products.appendChild(handleLoading);
};

export default loading;
