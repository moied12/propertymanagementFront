import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { getAllCommercial, getAllResidential } from '../../store/properties/slice';
import { privateRoute } from '../privateroute';
import ResidentialCards from '../../components/commercialcards';
import {CardGroup} from 'react-bootstrap';


class AllProperties extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        this.props.dispatch(getAllCommercial());
        this.props.dispatch(getAllResidential());

    }

    render() {

        return (
            this.props.commercialLoading && this.props.residentialLoading ?
                <>
                    HELLO
                </> : <>

                    {/* {

                        this.props.commercial.map((proper,index) => <>
                            <h1>Commercial</h1>
                            <div key={index}>
                            {JSON.stringify(proper, null, 2)}
                            </div>
                        </>
                        )

                    } */}
                    
                    <h1>Residential</h1>
                    <CardGroup>
                        
                    {
                        
                        this.props.residential.map((proper, index) =>

                            <div key={index}>

                                <ResidentialCards property={proper} />
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
export default connect(mapStateToProps)(privateRoute(AllProperties));