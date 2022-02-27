import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a react app to leave feedback for a product or a service</p>

            <p>
            <Link to='/' style={{color: "#FF6A95"}}>Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About