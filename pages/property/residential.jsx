import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { getAllResidential } from '../../store/properties/slice';
import { privateRoute } from '../privateroute';
import ResidentialCards from '../../components/residentialcards';
import { CardGroup } from 'react-bootstrap';
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

                    <div className='header'>
                    <h1>Residential</h1>
                    <Link href="/property/addresidential"><Button variant="primary">ADD</Button></Link> 
                    </div>
                    <CardGroup>

                        {

                            this.props.residential.map((proper, index) =>

                                <div key={index}>

                                    <ResidentialCards property={proper} />
                                </div>

                            )

                        }
                    </CardGroup>


                </div>

        );
    }






}

const mapStateToProps = state => {
    return state.property;
};
export default connect(mapStateToProps)(privateRoute(Residential));