import React from 'react'
import { useSelector } from 'react-redux'

function PostItem() {
    const post = useSelector(state => state.posts[0]?.posts[0])
    console.log(post)
    return (
        <>
            <div className='post_item'>
                {post.id}
            </div>
            <div className='item_title' >
                {post.title}
            </div>
        </>
    )
}

export default PostItem