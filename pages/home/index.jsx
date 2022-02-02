import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import Link from 'next/link';
import { logOut } from '../../store/auth/slice';

class Index extends Component {
    constructor(props) {
        super(props);
    }
    handlelogout = e => {
        this.props.dispatch(logOut());
    };
    render() { 
        return (
            <div>Moied
                <p><button onClick={this.handlelogout.bind(this)}>logout</button></p>
                <p><Link href="/test/test" ><a>Test</a></Link></p>
            </div>
        );
        
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Index);
