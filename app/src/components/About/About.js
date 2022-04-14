import { useNavigate } from 'react-router-dom'


const About = () =>{
    const navigate = useNavigate()

    return (
        <>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, ipsa.</p>
        <button type="button" onClick={() => { navigate(-1) }} className="btn btn-success">Return future</button>
      </>
    )
}
export default About