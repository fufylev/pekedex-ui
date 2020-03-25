import './DashBoard.scss'

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import PaginationControlled from '../../Pagination/PaginationControlled'
import { inject, observer } from 'mobx-react'
import ItemsPerPageBlock from '../../Pagination/ItemsPerPageBlock'
import Pokemon from '../../Pokemon/Pokemon'

function DashBoard (props) {
  const { pokemons } = props.Store

  useEffect(() => {
    props.Store.fetchItems()
  }, [])

  return (
    <div className='container'>
      <div className='pagination-block'>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item>
            <PaginationControlled />
          </Grid>
          <Grid item>
            <ItemsPerPageBlock/>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3}>
        {pokemons && pokemons.map(pokemon =>
          <Pokemon pokemon={pokemon} key={pokemon.name}/>
        )}
      </Grid>
    </div>
  )
}

DashBoard.propTypes = {
  Store: PropTypes.object
}

export default inject('Store')(observer(DashBoard))
