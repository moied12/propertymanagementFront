import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import Link from 'next/link';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/');
        }
        return false;
    }

    render() {
        const {error} = this.props;
        return (
            <div>Moied
                {this.props.isLoggedIn ? (<p>logout</p>):( <p><Link href="/account/login"><a>Login</a></Link></p>)}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Index);
