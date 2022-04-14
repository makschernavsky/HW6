import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deletePostQuery } from "../../../redux/actionCreators/postsAC";


const PostItem = ({ title,  image, id }) => {
  const dispatch = useDispatch()
  const deleteHandler = () => dispatch(deletePostQuery(id));

  return (
    <div name="imgCard" className="card col" style={{ width: '18rem' }}>
    {/* переадресация на детальную страницу по клику на картинку */}
    <Link to={`/posts/${id}`}>
      <img src={image} className="card-img-top pt-2" alt="" />
    </Link>
    <div className="card-body">
      <h5 className="card-title text-center">{title}</h5>
    </div>
    {/* далее идет кнопка удалить со значком мусорки */}
    <div>
      <button onClick={deleteHandler} type="button" aria-label="Save" className="btn w-25 btn-outline-secondary mb-2">
        <i className="bi bi-trash" />
      </button>
    </div>
  </div>
  )};

export default PostItem;
