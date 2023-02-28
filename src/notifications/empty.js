import { createCustomElement } from '../helpers/shopFunctions';

const empty = async () => {
  const products = document.querySelector('.products');
  const handleEmpty = createCustomElement(
    'p',
    'empty',
    'Nenhum produto para exibir.',
  );
  products.appendChild(handleEmpty);
};

export default empty;
