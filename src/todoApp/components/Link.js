import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
const Link = ({ path, onClick, children }) => (
  <NavLink
    exact
    to={ path }
    activeStyle={{
      fontWeight: 'bold',
      color: 'black'
     }}
     onClick={onClick}
  >{children}</NavLink>
)

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link