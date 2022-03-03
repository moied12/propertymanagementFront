import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { getAllResidential } from '../../store/properties/slice';
import { privateRoute } from '../privateroute';
import ResidentialCards from '../../components/residentialcards';
import { CardGroup ,Row} from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Residential extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        this.props.dispatch(getAllResidential());

    }

    render() {

        return (
            this.props.residentialLoading ?
                <>
                    HELLO
                </> : <div>

                <div className="headingc">
                    <div className="leftside">
                        <div className="logoc">
                    All Residential Properties
                        </div>
                    </div>
                    <div className="rightside">
                    <Button
                    variant="primary"
                    // color="danger"
                    size="medium"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                       Router.push('/property/addresidential')
                    }}
                >
                    Add Property
                </Button>
                    </div>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">

                        {

                            this.props.residential.map((proper, index) =>

                                <div key={index}>

                                    <ResidentialCards property={proper} />
                                </div>

                            )

                        }
                    </Row>


                </div>

        );
    }






}

const mapStateToProps = state => {
    return state.property;
};
export default connect(mapStateToProps)(privateRoute(Residential));