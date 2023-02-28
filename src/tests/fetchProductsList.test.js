import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste o sucesso da função fetchProductsList',() => {
  test('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  test('fetch é chamado ao executar fetchProductsList', () => {
    fetchProductsList('computador')
    expect(fetch).toHaveBeenCalled()
  });

  test('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const expectEndPoint= 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith(expectEndPoint);
  });

  test('o retorno da função fetchProductsList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
     const data = await fetchProductsList('computador')
     expect(data).toEqual(computadorSearch)
  })
  test('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: Termo de busca não informado', async ()=> {
    await expect(() =>  fetchProductsList()).rejects.toThrow('Termo de busca não informado')
  })
});
