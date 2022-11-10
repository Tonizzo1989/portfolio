import {Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assests/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";

export const Projects = () => {

    
        const projects = [
            {
                title: "jfjfkjk",
                description: "kdfjdkfdkj",
                id: 1,
            },
            {
                title: "jfjfkjk",
                description: "kdfjdkfdkj",
                id: 1,
            },
            {
                title: "jfjfkjk",
                description: "kdfjdkfdkj",
                id: 1,
            },
       ];

       return (
        <section className="projects" id="project">
            <Container>
                <Row>
                    <Col>
                     <h2>Projects</h2>
                     <p>Lorem</p>
                     <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     <Nav variant="pills" className="nav-pills mb-5 justify-content" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab three</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects.map((project,index)=>{
                                    return(
                                        <ProjectCard key={index}{...project}/>
                                    )
                                })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.pane eventKey="second">Lorem</Tab.pane>
                        <Tab.pane eventKey="third">Lorem</Tab.pane>
                    </Tab.Content>
                    </Tab.Container> 
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right"src={colorSharp2} ></img>
        </section>
    )
}