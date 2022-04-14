import { useLayoutEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getPostQuery, updatePostQuery } from "../../../../redux/actionCreators/postsAC"

const usePostsDetail = (closeModal) => {
    const [loading, setLoading] = useState(false)
  
    const {postsId} = useParams()

    const dispatch = useDispatch()

    // const controller = useRef(new AbortController())

    const post = useSelector((store) => store.posts.find((el)=> el.id === +postsId)) || {}

    useLayoutEffect(()=>{
      setLoading(true)
      dispatch(getPostQuery(postsId, setLoading))
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target).entries())
        dispatch(updatePostQuery(postsId, formData, closeModal))
      }
    return {
      post,
      loading,
      submitHandler,
    }
}

export default usePostsDetail