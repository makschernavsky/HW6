import { ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POST } from "../types/postsTypes"


const setPosts = (newPostsArray) => {
    return {
        type: SET_POSTS,
        payload: newPostsArray,
    }
}

export const setPostsQuery = (filter = '') => async (dispatch) => {
    const response = await fetch(`http://localhost:3000/api/v1/posts/?${filter}`)
    const dataFromServer = await response.json()
    dispatch(setPosts(dataFromServer))
}

const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id,
})
export const deletePostQuery = (id) => async (dispatch) => {
    const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
      method: 'DELETE',
    })

    if (response.status === 200) {
      dispatch(deletePost(id))
    }
}

const updatePost = (newPostObject) => ({
    type: UPDATE_POST, 
    payload: newPostObject,
})

export const updatePostQuery = (id, formData, closeModal) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 200) {
      const updatedPostFromServer = await response.json()
      dispatch(updatePost(updatedPostFromServer))
      closeModal()
    } else {
      alert('Wrong data')
    }
  }

const addPost = (newPostObject) => ({
  type: ADD_POST, 
  payload: newPostObject,
})

export const addPostQuery = (formData, e) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/api/v1/posts/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        if (response.status === 201) {
          const addedPostFromServer = await response.json()
          dispatch(addPost(addedPostFromServer))
          e.target.reset()
        } else {
          alert('Wrong data')
        }
}



export const getPostQuery = (id, setLoading) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`)
  const postFromServer = await response.json()
  dispatch(addPost(postFromServer))
  setLoading(false)
}



