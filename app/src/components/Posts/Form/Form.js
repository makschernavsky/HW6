import PostsForm from "../PostsForm/PostsForm";
import { useDispatch } from 'react-redux';
import { addPostQuery } from "../../../redux/actionCreators/postsAC";

function Form () {
  const dispatch = useDispatch()
  
  const submitHandler = async (e) => {
   e.preventDefault()
   
   const formData = Object.fromEntries(new FormData(e.target).entries())
   
   dispatch(addPostQuery(formData, e))
}
  return (
    <PostsForm 
    onSubmit={submitHandler}
    />
  );
};

export default Form