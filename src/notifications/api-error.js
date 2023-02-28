import { createCustomElement } from '../helpers/shopFunctions';

const errorApi = async () => {
  const products = document.querySelector('.products');
  const handleError = createCustomElement(
    'p',
    'error',
    'Algum erro ocorreu, recarregue a página e tente novamente',
  );
  products.appendChild(handleError);
};

export default errorApi;
