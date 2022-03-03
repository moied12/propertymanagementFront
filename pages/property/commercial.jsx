import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { getAllCommercial } from '../../store/properties/slice';
import { privateRoute } from '../privateroute';
import CommercialCards from '../../components/commercialcards';
import { CardGroup, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Commercial extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        this.props.dispatch(getAllCommercial());

    }

    render() {

        return (
            this.props.commercialLoading ?
                <>
                    HELLO
                </> : <>
                <div className="headingc">
                    <div className="leftside">
                        <div className="logoc">
                    All Commercial Properties
                        </div>
                    </div>
                    <div className="rightside">
                    <Button
                    variant="primary"
                    // color="danger"
                    size="medium"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                       Router.push('/property/addcommercial')
                    }}
                >
                    Add Property
                </Button>
                    </div>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">

                        {

                            this.props.commercial.map((proper, index) =>

                                <div key={index}>
                                    <CommercialCards property={proper} />
                                </div>

                            )

                        }
                    </Row>


                </>

        );
    }






}

const mapStateToProps = state => {
    return state.property;
};
export default connect(mapStateToProps)(privateRoute(Commercial));