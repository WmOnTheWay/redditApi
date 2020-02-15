import React ,{ useState } from 'react'
import { useParams } from 'react-router-dom'


export const Signl = (props) => {
    const {id} = useParams();
    const [posts] = useState(props.posts);
    return (
        <div>
           <p>{id}</p> {posts.filter(e=>e.id===id).map(e=>(<p>{e.selftext}</p>))}
        </div>
    )
}