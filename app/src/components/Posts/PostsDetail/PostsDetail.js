import {  createContext, useContext, useMemo } from "react"
import withLoader from "../../hocs/withLoader"
import usePostsDetail from "./hooks/usePostsDetail"
import usePostsDetailModal from "./hooks/usePostsDetailModal"
import PostsDetailCard from "./PostsDetailCard/PostsDetailCard"
import PostsDetailModal from "./PostsDetailModal/PostsDetailModal"

const PostsDetailContext = createContext()
const PostsDetailCardWithLoader = withLoader(PostsDetailCard)

function PostsDetail () {
  const { viewModal, openModal, closeModal } = usePostsDetailModal()
  const { post, loading, submitHandler } = usePostsDetail(closeModal)
  
  const sharedValues = useMemo(() => ({
    viewModal, openModal, closeModal, post, submitHandler,
  }), [post, viewModal])
  
  return (
      <PostsDetailContext.Provider value={sharedValues}>
        <div className="d-flex justify-content-center p-3">
        <PostsDetailCardWithLoader loading={loading}/>
        <PostsDetailModal />
        </div>
        </PostsDetailContext.Provider>
    )
}

export default PostsDetail

export const usePostsDetailContext = () => useContext(PostsDetailContext)