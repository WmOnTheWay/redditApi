import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import 'babel-polyfill'

import Root from './redditApi/containers/Root'

const Jsx =()=> (
    <div>
        <Root />
    </div>
)


ReactDOM.render(<Jsx />, document.getElementById('root'))


serviceWorker.unregister();
