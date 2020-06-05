import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';

export function* getProducts() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(ProductsActions.getProductsSuccess(response.data));
  } catch (err) {
    console.error('Não foi possivel obter os produtos');
  }
}
