import Modal from "../../../Modal/Modal"
import PostsForm from "../../PostsForm/PostsForm"
import { usePostsDetailContext } from "../PostsDetail"

const PostsDetailModal = () => {

    const {viewModal, closeModal, post, submitHandler} = usePostsDetailContext()
    
    return(
        <Modal
        state={viewModal}
        onClose={closeModal}
        >
        <PostsForm
           onSubmit={submitHandler}
           {...post}
           />
    </Modal>
    )
}

export default PostsDetailModal