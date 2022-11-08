import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import {useState, useEffect} from "react";



export const Banner = ( ) => {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState("");
    const [delta,setDelta] = useState(300 - Math.random()*100)
    const period = 2000;


    useEffect(()=>{
        let ticker  = setInterval(() => {
            ticker();
        }, delta);


      return () => {clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let updateText = isDeleting ? fulltext.substring(0, text.length -1 ) : fulltext.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === ""){
            setIsDeleting (false);
            setLoopNum(loopNum + 1);
            setDelta(5000);

        }

        
    } 
    
    return( 

        <section className="banner" id0="home">
            <Container> 
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Benvenuti sul mio portfolio</span>
                        <h1> {`Ciao sono Tony`}<span className="wrap">{text}</span></h1>
                        <p>Lorem Ipsum as dummy text</p>
                        <button onClick={() => console.log("connect")}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                    <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}