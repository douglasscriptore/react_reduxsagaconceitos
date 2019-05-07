import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { addFavoriteSuccess, addFavoriteFailure } from '../actions/favorites'

// função gerenator é parecida com o async await
export function * addFavorite (action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`)
    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url
    }
    // o metodo put do redux-saga/effects vai fazer o papel de enviar a action pros reducers ouvirem
    yield put(addFavoriteSuccess(repositoryData))
  } catch (err) {
    yield put(addFavoriteFailure('Erro ao adicionar'))
  }
}
