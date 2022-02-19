import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
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
            <Card style={{width:'100rem', padding:"10px"}}>
                <Carousel>
                    {
                        imageArray.map((imageURI, index) => (

                            <Carousel.Item key={index}>
                                <div className="d-block w-100" >
                                    <div >
                                        <img src={imageURI} alt="Photo uploaded" />
                                    </div>
                                </div>

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
        );
    }
}

// const mapStateToProps = state => {
//     return state.cart;
// };
export default CommercialCards;
