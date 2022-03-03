import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Card, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Fade } from 'react-slideshow-image';
import Link from 'next/link'
import { BiBath, BiBed } from 'react-icons/bi';
class CommercialCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { property } = this.props;
        const imageArray = property.images.replace(/[\[\]']+/g, '').replace(/["]+/g, "").replace(/\\/g, '').split(",")
        return (
            <Col>
            <Card style={{ width: '18rem' , borderRadius:"5%" , margin:'auto' , backgroundColor:'rgb(230,230,230)', padding:'10px'}}>
                <Carousel className='card-img-top'>
                    {
                        imageArray.map((imageURI, index) => (

                            <Carousel.Item key={index}>
                                        <img  src={imageURI} alt="Photo uploaded" height="161px" style={{borderRadius:"5%", width:'inherit'}} />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <Card.Body>
                    <Card.Title>AED {property.price}/YEAR</Card.Title>
                    <Card.Subtitle>{property.name} </Card.Subtitle>
                    <Card.Text>
                        {property.area} sqft 
                    </Card.Text>
                    <Card.Text>
                        {property.furnished.toString()}|{property.property_type_id}|{property.status_id}|{property.city_id}| {property.location}
                    </Card.Text>
                    <Link href={{pathname:"/property/editcommercial" ,query:{ property: JSON.stringify(property) } }}><Button variant="primary">EDIT</Button></Link> 
                    <span style={{padding:'20px'}}/>
                    <Button variant="danger">DELETE</Button>
                </Card.Body>
            </Card>
            </Col>
        );
    }
}
export default CommercialCards;
