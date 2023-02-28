export const fetchProduct = async (id) => {
  if (!id) throw new Error('ID não informado');
  const URL_BASE = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(URL_BASE);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (product) => {
  if (!product) throw new Error('Termo de busca não informado');
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.results;
};
