import axios from 'axios';
import { filterProductBySlug } from '../utils/productHandler';

const apiAxios = axios.create({
  baseURL: 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/',
});

const getProducts = () =>
  apiAxios.get('catalog').then((response) => [...response.data]);

const getProductByPathname = (pathname) =>
  apiAxios.get('catalog').then((response) => filterProductBySlug(pathname, [], getProducts));

const api = {
  getProducts: () => getProducts(),
  getProductByPathname: (pathname) => getProductByPathname(pathname),
};

export default api;
