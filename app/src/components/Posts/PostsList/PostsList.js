import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPostsQuery } from '../../../redux/actionCreators/postsAC'
import PostItem from "../PostItem/PostItem"


const PostsList = () => {

    const posts = useSelector(store => store.posts)
    const filter = useSelector((store) => store.filter)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPostsQuery(filter))
    }, [filter])
    
    
    return (
        <div className="container w-75 p-10">
      <div className="row row-cols-3 justify-content-around gy-3">
        { posts.length ? posts.map((post) => (// проверка, не пуста ли галерея. Если пуста, то <p>
          // наполняем галерею

          <PostItem key={post.id} {...post} />

        )) : <p className="fs-6">Галерея пуста. Добавьте что-нибудь.</p>}
      </div>
    </div>
    )
}

export default PostsList