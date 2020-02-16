import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectSubreddit,
  requestPosts,
} from '../ARS/actions'
import Picker from '../components/picker'
import Posts from '../components/post'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { selectedSubreddit } = this.props
    this.props.dispatch(selectSubreddit(selectedSubreddit))
  }

  componentDidUpdate(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { selectedSubreddit } = nextProps
      this.props.dispatch(requestPosts(selectedSubreddit))
    }
  }



  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()
    const { selectedSubreddit } = this.props
    this.props.dispatch(requestPosts(selectedSubreddit))
    this.props.dispatch(selectSubreddit(selectedSubreddit))
  }

  render() {
    const { selectedSubreddit, posts } = this.props
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend', 'backend', 'vue', 'golang']}
        />
        <p>
          {posts.lastUpdated && (
            <span>
              Last updated at {new Date(posts.lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!posts.isFetching && (
            <a href="/" onClick={this.handleRefreshClick}>
              Refresh
            </a>
          )}
        </p>
        {!posts.isFetching && posts.items.length === 0 && <h2>Loading...</h2>}
        {posts.isFetching && posts.items.length === 0 && <h2>Empty.</h2>}
        {!posts.didInvalidate && posts.items.length > 0 && (
          <div style={{ opacity: posts.isFetching ? 0.5 : 1 }}>
            <Posts posts={posts.items} />
          </div>
        )}
        {posts.didInvalidate && <h2>Network connection error.</h2>
        }
      </div>
    )
  }
}

AsyncApp.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { selectedSubreddit, posts } = state

  return {
    selectedSubreddit,
    posts,
  }
}

export default connect(mapStateToProps)(AsyncApp)