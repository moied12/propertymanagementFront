import React, { Component } from 'react';
import { privateRoute } from '../privateroute';

import { connect } from 'react-redux';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    componentDidMount() {
    }
    

    render() {
        return (
            <div className="main">hello</div>
        )
    }
}
const mapStateToProps = state => {
    // return state.rtsc;
    return {
        rtsc: state.rtsc,
        user: state.user,
    };
};
export default connect(mapStateToProps)(privateRoute(Users));
