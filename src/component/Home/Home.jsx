import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

const getdata = ()=>{
    let data = JSON.parse(localStorage.getItem("st_data"));
    if(data != null){
        return data.length;
    }
    return 0;
}


function Home() {
    
    return (
        <>
            <Container>
                <Row>
                    <div className="col-3 mt-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>Total Students</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{getdata()}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Home