import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Signl } from './signl'


export default class Posts extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <ul>
                {this.props.posts.map((post, i) => (
                  <Fragment key={i}>
                    -{post.title}<Link to={`/${post.id}`} >read more</Link>
                    <br />
                  </Fragment>
                ))}
              </ul>
            </Route>
            <Route path={`/:id`}>
              <Signl posts={this.props.posts}/>
            </Route>
          </Switch>
        </Router>

      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}