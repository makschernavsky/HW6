import { createContext, useContext } from "react";
import Footer from "../Footer/Footer";
import Form from "./Form/Form";
import PostsList from "./PostsList/PostsList";
import SearchPostForm from "./SearchPostForm/SearchPostForm";

const PostsListContext = createContext()

function Posts () {

    return (
        <>
          <Form />
          <hr className="mb-4" />
          <SearchPostForm />
          <PostsList /> 
          <Footer />
        </>
    )
}


export default Posts

const usePostsContext = () => {
    return useContext(PostsListContext)
}
export {
    PostsListContext,
    usePostsContext,
}