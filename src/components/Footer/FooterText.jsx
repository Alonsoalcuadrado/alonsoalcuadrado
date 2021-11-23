import React from 'react'
import './FooterStyle.scss'
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row,Col} from 'react-bootstrap';

function FooterText() {
    return (
        <Container fluid  className="footer">
            <Row>
                <Col>
                    <Row>Empresa 100% lagunera dedicada al desarrollo de herramientas WEB comprometidos con la innovación y el desarrollo </Row> 
                    <Row className="footer__containerIcons">
                        <div className="col-2"><i class="fa fa-facebook"></i></div>
                        <div className="col-2"><i class="fa fa-linkedin"></i></div>
                        <div className="col-2"><i class="fa fa-twitter"></i></div>
                    </Row>  
                </Col>
                <Col className="footer__text--under">Todos los derech os reservados a A2© TRC</Col>
                <Col>
                    <p className="footer_text">Calle Aldama </p><p className="footer_text">#1051 int C </p><p className="footer_text">CP 27000</p><p className="footer_text">Torreón Coahuila</p>
                </Col>
            </Row>
          
        </Container>
       
    )
}

export default FooterText
