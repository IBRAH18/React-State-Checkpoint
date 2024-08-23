import { Col, Container, Row } from 'react-bootstrap';

function CardProfil({ fullName, bio, imgSrc, profession }) {
    return (
        <Container>
            <Row>
                <Col>
                    <Row style={{height: "80vh",}} className='d-flex justify-content-center align-items-center'>
                        <Col lg={3}>
                            <div style={{
                                padding: "50px 20px",
                                textAlign: "center",
                            }}>
                                <img 
                                    src={imgSrc} 
                                    alt={fullName} 
                                    style={{
                                        borderRadius: "100%",
                                        width: 200,
                                        height: 200
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={9} style={{
                            border: "1px solid rgba(0, 0, 0, 0.4)",
                            borderRadius: 30,
                            padding: 20,
                        }}>
                            <div>
                                <h1>{fullName}</h1>
                                <h3 style={{marginBlock: 20}}>{profession}</h3>
                                <p>{bio}</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default CardProfil;