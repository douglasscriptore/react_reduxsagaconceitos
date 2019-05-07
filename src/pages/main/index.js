import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as FavoriteActions from '../../store/actions/favorites'

class Main extends Component {
  /**
   * o state está sendo utilizado pois não é recomendável usar redux p/ controle de formulários
   * salve em algumas exesões
   */

  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.oneOfType([null, PropTypes.string])
        })
      ),
      error: PropTypes.string
    }).isRequired
  }

  state = {
    repositoryInput: ''
  }

  handleAddRepository = e => {
    e.preventDefault()
    this.props.addFavoriteRequest(this.state.repositoryInput)
    this.setState({ repositoryInput: '' })
  }

  render () {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder='usuario/repositório'
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />

          <button type='submit'>Adicionar</button>
          {this.props.favorites.loading && <span> Carregando ... </span>}
          {!!this.props.favorites.error && (
            <span>{this.props.favorites.error}</span>
          )}
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name} </strong>
                {favorite.description}
              </p>
              <a href={favorite.url}>acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)