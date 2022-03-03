// viewing all customers, searching , sorting, filtering
import React, { Component } from 'react';
import { privateRoute } from '../privateroute';
import { getallUser,deleteUser } from '../../store/customers/slice'
import { connect } from 'react-redux';
import { DataGrid, GridApi, Record } from '@mui/x-data-grid';
import { Button} from 'react-bootstrap';
import Router from 'next/router'
import { Rings } from 'react-loader-spinner';
class Customers extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    componentDidMount() {
        this.props.dispatch(getallUser(this.props.data));
    }
    renderDetailsButton = (params) => {
        return (
            <strong>
                <Button
                    variant="primary"
                    // color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                       Router.push(`/user/${params.row.id}`)
                    }}
                >
                    More Info
                </Button>
            </strong>
        )
    }
    renderDeleteButton = (params) => {
        return (
            <strong>
                <Button
                    variant="danger"
                    // color="danger"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={ 
                        // this.props.dispatch(register(params.row.id))
                        () => {
                            this.props.dispatch(deleteUser(params.row.id))
                    }}
                >
                    Delete
                </Button>
            </strong>
        )
    }

    render() {
        const columns= [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'firstName', headerName: 'First Name', width: 130 },
            { field: 'lastName', headerName: 'Last Name', width: 130 },
            { field: 'email', headerName: 'Email', width: 170 },
            { field: 'phone', headerName: 'Phone', type: 'number', width: 110, },
            {
                field: 'col5',
                headerName: 'Learn More',
                width: 150,
                renderCell: this.renderDetailsButton,
                disableClickEventBubbling: true,
            },
            {
                field: 'col7',
                headerName: 'Delete User',
                width: 150,
                renderCell: this.renderDeleteButton,
                disableClickEventBubbling: true,
            },
        ]
        if (this.props.user.alluser){
        return (
            <div>
                <div className="headingc">
                    <div className="leftside">
                        <div className="logoc">
                    All Customers
                        </div>
                    </div>
                    <div className="rightside">
                    <Button
                    variant="primary"
                    // color="danger"
                    size="medium"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                       Router.push('/customer/addcustomer')
                    }}
                >
                    Add Customer
                </Button>
                    </div>
                </div>
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                        rows={this.props.user.alluser}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                        checkboxSelection
                    />
                </div>
            </div>
        )}
        else{
            return (
                <div className='ps-my-account'>
                    <div className='centercontent'>
                        <Rings style={{ textAlign: 'center' }} color="#00BFFF" height={300} width={300} />
                    </div>
                    <h1 className='centercontenttext' style={{ textAlign: 'center' }}>Please wait while we fetch users.</h1></div>
            )
        }
    }
}
const mapStateToProps = state => {
    
    return {
        rtsc: state.rtsc,
        user: state.customer,
    };
};
export default connect(mapStateToProps)(privateRoute(Customers));

