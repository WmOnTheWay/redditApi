import React from 'react'

const Topic = ({ match:{ params }}) =>(
    <div>
        {params.topicId}
    </div>
)

export default Topic