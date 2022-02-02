import React, { Component } from 'react';
import Link from 'next/link';
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import { privateRoute } from '../privateroute';

class Test extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
    <h1>Href Attribute Example</h1>
    <p>
      <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth.
    </p>
            
            </>
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(privateRoute(Test));
