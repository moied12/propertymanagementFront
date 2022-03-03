import React, { Component } from 'react';
import { privateRoute } from '../privateroute';
import { getallUser,deleteUser } from '../../store/auth/slice'
import { connect } from 'react-redux';
import { DataGrid, GridApi, Record } from '@mui/x-data-grid';
import { Button} from 'react-bootstrap';
import Router from 'next/router'
import { Rings } from 'react-loader-spinner';
class Sales extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    componentDidMount() {
        this.props.dispatch(getallUser(this.props.data));
    }

    render() {
        
        const columns= [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'name', headerName: 'Name', width: 130 },
            { field: 'email', headerName: 'Email', width: 130 },
            { field: 'phone', headerName: 'Phone', type: 'number', width: 90, },
        ]
        if (this.props.user.alluser){
        return (
            <div>
                <div className="headingc">
                    <div className="leftside">
                        <div className="logoc">
                    All Sales
                        </div>
                    </div>
                    <div className="rightside">
                    <Button
                    variant="primary"
                    // color="danger"
                    size="medium"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                       Router.push('/user/adduser')
                    }}
                >
                    Add Residential Sale
                </Button>
                <Button
                    variant="primary"
                    // color="danger"
                    size="medium"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                       Router.push('/user/adduser')
                    }}
                >
                    Add Commercial Sale
                </Button>
                    </div>
                </div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={this.props.user.alluser}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        )}else{
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
        user: state.auth,
    };
};
export default connect(mapStateToProps)(privateRoute(Sales));

