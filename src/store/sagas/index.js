import { all, takeLatest } from 'redux-saga/effects'
import { addFavorite } from './favorites'

// o * no function informa a criação de uma função generator do javascript
// o generator lida com função assicronas, parecido com o async await, porém o generator é mais poderoso
// o yield é como se fosse o await do no async await
export default function * rootSage () {
  // takeLastest = Se estiver uma requisição acontecendo no momento, ele cancela e pega a ultima requisição do usuario
  // o takeEvery = Se o usuario clicar 5x no botão da requisição, ele dispara a requisição 5x em background
  yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavorite)])
}
