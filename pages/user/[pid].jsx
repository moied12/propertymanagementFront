import React, { Component } from 'react';
import { privateRoute } from '../privateroute';
// import { getallUser } from '../../store/auth/slice'
import { connect } from 'react-redux';
// import { DataGrid, GridApi, Record } from '@mui/x-data-grid';
// import { Button} from 'react-bootstrap';
// import Router from 'next/router'
class UsersDefaultPage extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    // componentDidMount() {
    //     const { id } = this.props.query;
    //     const { query } = this.props;
    // }


    render() {
        console.log(this.props)
        return (
            <div>
               Moied
            </div>
        )
    }
}
export default UsersDefaultPage;

