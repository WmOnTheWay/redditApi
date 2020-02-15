import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {  Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Topic from './Topic';


const App = ({ match: { params } }) => {
  const { path } = useRouteMatch();
  return (<div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <p>{params.filter}</p>
    <div>
  <div>
  <h2>Topics</h2>
  <ul>
    <li>
      <Link  to={`${params.filter}/1`}>Rendering with React</Link>
    </li>
    <li>
      <Link to={`${params.filter}/2`}>Components</Link>
    </li>
    <li>
      <Link  to={`${params.filter}/3`}>Props v. State</Link>
    </li>
  </ul>
</div>


  <Switch>
    <Route exact path={path}>
      <h3>Please select a topic.</h3>
    </Route>
    <Route path={`${path}/:topicId`} component={Topic}/>
  </Switch>
  </div>
  </div>)
}

export default App