import { useNavigate } from "react-router-dom"
import { usePostsDetailContext } from "../PostsDetail"


const PostsDetailCard = () => {
    const navigate = useNavigate()
    
    const {post, openModal} = usePostsDetailContext()
    
    return(
      <div name="imgCard" className="card pt-1 pe-2 ps-2" style={{ width: '18rem' }}>
      <img src={post.image} className="card-img-top pt-2" alt="" />
      <div className="card-body">
        <h5 className="card-title text-center">{post.title}</h5>
        <p className="card-text">{post.text}</p>
        <p className="text-primary fst-italic">{post.tag}</p>
      </div>
      <div className="d-flex justify-content-around">
        {/* далее идет кнопка "назад" со значком */}
        <button type="button" onClick={() => { navigate(-1) }} className="btn btn-outline-danger w-25 mb-2">
          <i className="bi bi-skip-backward" />
        </button>
        {/* далее идет кнопка "редактировать" со значком */}
        <button type="button" onClick={openModal} className="btn btn-outline-success w-25 mb-2">
          <i className="bi bi-pencil" />
        </button>
      </div>
    </div>
    )
}

export default PostsDetailCard