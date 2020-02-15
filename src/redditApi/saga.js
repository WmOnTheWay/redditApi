import { put, take } from 'redux-saga/effects';
import { SELECT_SUBREDDIT, invalidateSubreddit, requestPosts, receivePosts } from './ARS/actions';
import fetch from 'cross-fetch'
import 'babel-polyfill'

export const fetchPosts = (subreddit) => {
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
}
function* PostReddit(subreddit) {
    try {
        console.log(fetchPosts(subreddit))
        const json = yield fetchPosts(subreddit);
        console.log(json)
        yield put(requestPosts(subreddit))
        yield put(receivePosts(subreddit,json))
    } catch (err) {
        console.log(err);
        yield put(invalidateSubreddit(subreddit))
    }
}
export function* watchForPostReddit() {
    console.log('saga!');
    while (true) {
      const { subreddit } =  yield take(SELECT_SUBREDDIT);
        console.log(subreddit );
        yield PostReddit(subreddit);
    }
}
