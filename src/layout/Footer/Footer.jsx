import { Col, Container, Row } from "react-bootstrap"
import './Footer.css'
const Footer = () => {
  return (
   
    <Container fluid>
        <Row>

            <Col className="footer-section" md={4}>SOCIAL MEDIA</Col>
            <Col className="footer-section" md={4}>REACT ECOMMERCE</Col>
            <Col className="footer-section" md={4}>CONTACT INFO</Col>
        </Row>

    </Container>

  )
}

export default Footer