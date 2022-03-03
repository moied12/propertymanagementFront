// adding customer
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { register,registerErrorReset } from '../../store/customers/slice';
import {countries} from "../../services/countries"
import { Form, Input, InputNumber, notification } from 'antd';
import Select from 'react-select';
import { connect } from 'react-redux';

class AddCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            phone:0,
            FirstName:"",
            nationality:"",
            LastName:"",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // static getDerivedStateFromProps(props) {
    //     if (props.isLoggedIn === true) {
    //         Router.push('/');
    //     }
    //     return false;
    // }
    handleChangecity = (selectedOption) => {
        this.setState({ city_id: selectedOption["value"] }
        );
    };
    handleRegisterSubmit = e => {
        let userdetails = JSON.parse(JSON.stringify(this.state));
        this.props.dispatch(register(userdetails));
    };
    handleChange = e => {
        e.preventDefault();
        const { name, value, } = e.target;
        this.setState({ [name]: value });
    };
    handleChangev = e => {
        e.preventDefault();
        const { name, value, } = e.target;
        if (this.state.password == value){
            return true
        }else{
            return false
        }
    };
    componentWillUnmount(){
        this.props.dispatch(registerErrorReset());
       }



    render() {
        const {password} = this.state;
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleRegisterSubmit.bind(this)}>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                type: "email",
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                        ]}>
                                        <Input
                                        name = "email"
                                        value={this.state.email}
                                            className="form-control"
                                            type="text"
                                            placeholder="Email address"
                                            onChange={this.handleChange}    

                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}   
                                            className="form-control"
                                            type="password"
                                            placeholder="Password..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="vpassword"
                                        rules={[
                                            {
                                                required: true 
                                            },
                                            {
                                                validator(rule, value, callback,) {
                                                    if (password != value || !value) {
                                                      callback("Passwords Dont Match!!");
                                          
                                                      // I'd like to use this instead:
                                                      // notification.open({
                                                      //   message: "Enter Your Name",
                                                      //   description:
                                                      //     'This is the content of the notification.',
                                                      // })
                                                    }
                                          
                                                    callback();
                                                  }
                                            }
                                        ]}>
                                        <Input
                                        name='vpassword'
                                        value={this.state.password}
                                        onChange={this.handleChange}   
                                            className="form-control"
                                            type="vpassword"
                                            placeholder="Verify Password..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your number!',
                                                    pattern: new RegExp(/^[0-9]+$/)
                                            },
                                        ]}>
                                        <Input
                                        name='phone'
                                        value={this.state.phone}
                                        onChange={this.handleChange}   
                                            className="form-control"
                                            type="phone"
                                            placeholder="Phone..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="FirstName"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Name!',
                                            },
                                        ]}>
                                        <Input
                                        name='FirstName'
                                        value={this.state.password}
                                        onChange={this.handleChange}   
                                            className="form-control"
                                            type="FirstName"
                                            placeholder="First Name..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="LastName"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Name!',
                                            },
                                        ]}>
                                        <Input
                                        name='LastName'
                                        value={this.state.password}
                                        onChange={this.handleChange}   
                                            className="form-control"
                                            type="LastName"
                                            placeholder="Last Name..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className='item13' style={{ height: 'inherit' }}>
                                    <Select options={countries} placeholder="Nationality"
                                        onChange={this.handleChangecity}>
                                    </Select>
                                </div>
                                {(this.props.error != "false")  ? (
                                        <div style={{color:'red'}}>{this.props.error}</div>
                                    ) : (
                                        <div></div>
                                    )}
                               
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Add Customer
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.customer;
};
export default connect(mapStateToProps)(AddCustomer);
