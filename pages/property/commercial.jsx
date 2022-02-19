import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { getAllCommercial } from '../../store/properties/slice';
import { privateRoute } from '../privateroute';
import CommercialCards from '../../components/commercialcards';
import { CardGroup } from 'react-bootstrap';
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
                    <h1>Commercial</h1>
                    <Link href="/property/editresidential"><Button variant="primary">ADD</Button></Link> 
                    <CardGroup>

                        {

                            this.props.commercial.map((proper, index) =>

                                <div key={index}>
                                    <CommercialCards property={proper} />
                                </div>

                            )

                        }
                    </CardGroup>


                </>

        );
    }






}

const mapStateToProps = state => {
    return state.property;
};
export default connect(mapStateToProps)(privateRoute(Commercial));