import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeCurrPostIdAction } from '../store/postsReducer'

const Pagination = ({ allPosts }) => {
    const dispatch = useDispatch()
    const itemPerPage = 10
    const [pagesCount, setPagesCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPagesCount(Math.ceil(allPosts?.length / itemPerPage))
        setPosts(allPosts?.slice(currentPage * itemPerPage - itemPerPage, currentPage * itemPerPage))
    }, [currentPage, allPosts])

    const changePage = (i) => {
        setCurrentPage(i)
    }

    const buttons = []
    for (let i = 0; i < pagesCount; i++) {
        buttons.push(
            <li key={i}
                className='text-primary m-2 text-decoration-underline'
                role="button"
                onClick={() => changePage(i + 1)}>
                <span>{i + 1}</span>
            </li>
        )
    }

    if (!allPosts) {
        return (
            <div className="text-center">
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='mt-3'>
                <div className='posts'>
                    {posts?.map((post, index) =>
                        <div className='posts w-50 d-flex mt-2 overflow-hidden text-nowrap border' key={index}>
                            <Link
                                to={`/${post.id}`}
                                className='text-decoration-none '
                                onClick={() => dispatch(changeCurrPostIdAction(post.id))}
                            >
                                <span className='number m-1'>{post.id}.</span>
                                <span className='title m-1'>{post.title}</span>
                            </Link>
                        </div>
                    )
                    }
                </div>
                <div className="pagination d-flex justify-content-center mt-5">
                    {buttons}
                </div>
            </div >
        )
    }
}

export default Pagination;