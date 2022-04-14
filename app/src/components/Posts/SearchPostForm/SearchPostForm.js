import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setFilter } from "../../../redux/actionCreators/filterAC"


const SearchPostForm = () => {
    const [searchInput, setSearchInput] = useState('')
    const isMount = useRef(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(isMount.current){
            const filter = {
                search: searchInput,
            }
            const prepareFilterForURL = encodeURIComponent(JSON.stringify(filter))

            const query = `filter=${prepareFilterForURL}`
            setSearchParams(query)
            dispatch(setFilter(query))
        } else {
        isMount.current = true
        const parsedQuery = JSON.parse(searchParams.get('filter'))
        
        if(parsedQuery && parsedQuery.search){
            setSearchInput(parsedQuery.search)
            dispatch(setFilter(parsedQuery))
        }
    }
}, [searchInput])

    const changeHandler = (e) => {
        setSearchInput(e.target.value)
    }

    return (
    <form className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Поиск..."
            onChange={changeHandler}
            value={searchInput}
          />
        </div>
    </form>
    )
}

export default SearchPostForm