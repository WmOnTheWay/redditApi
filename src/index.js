import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './todoApp/reducers'
import App from './todoApp/components/App';
import * as serviceWorker from './serviceWorker';
import 'babel-polyfill'

import Root from './redditApi/containers/Root'

const store = createStore(rootReducer);
const Jsx =()=> (
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        <Root />
    </div>
)


ReactDOM.render(<Jsx />, document.getElementById('root'))


serviceWorker.unregister();
