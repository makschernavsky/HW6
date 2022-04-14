import { useEffect, useRef } from "react"

function PostsForm ({onSubmit, title="", text="", image="", tag=""}) {
    const formRef = useRef(null)
    useEffect(()=>{
        formRef.current.elements.title.value = title
        formRef.current.elements.text.value = text
        formRef.current.elements.image.value = image
        formRef.current.elements.tag.value = tag
    },[])

    return (
        <form ref={formRef} onSubmit={onSubmit} className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Имя..."
          />
        </div>
        <div className="mb-3">
          <input
            name="text"
            type="text"
            className="form-control"
            placeholder="Описание..." />
        </div>
        <div className="mb-3">
          <input
            name="image"
            type="text"
            className="form-control"
            placeholder="Ссылка на изображение..."
          />
        </div>
        <div className="mb-3">
          <input
            name="tag"
            type="text"
            className="form-control"
            placeholder="Теги..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
         Отправить
        </button>
      </form>
    )

}

export default PostsForm