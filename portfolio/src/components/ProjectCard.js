import {Col} from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl}) =>{
    return(
    <Col>
        <div className="project-imgbox">
            <img src={imgUrl}/>
            <div className="project-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
    )
}