// addFavoriteRequest() lançada pelo componente o REQUEST vai ser ouvido pelo SAGA, que faz a CHAMADA A API
// após receber os dados da API chama o success
export const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository }
})

// o SAGA chama o Success após a chamada API, dai ele vai enviar p/ o reducer os dados do repositorio
export const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data }
})

// action que adiciona o erro
export const addFavoriteFailure = error => ({
  type: 'ADD_FAVORITE_FAILURE',
  payload: { error }
})
