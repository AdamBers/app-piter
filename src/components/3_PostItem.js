import React from 'react'
import { useSelector } from 'react-redux'

function PostItem() {
    const allPosts = useSelector(state => state.posts[0]?.posts)
    const currentPostId = useSelector(state => state.currentPostId)
    const post = allPosts[currentPostId - 1]
    console.log(post)
    return (
        <>
            <div className='d-flex w-50 d-flex mt-2'>

                <div className='item_title fw-bold m-4' >
                    {post.title}
                </div>

            </div>
            <div className='item_body m-2' >
                {post.body}
            </div>
        </>
    )
}

export default PostItem