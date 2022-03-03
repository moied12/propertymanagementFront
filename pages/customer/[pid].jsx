// viewing customer details such as properties, cheques, complaints, email, phone, sending email, viewing complaints etcimport React, { Component } from 'react';
import { privateRoute } from '../privateroute';
import { connect } from 'react-redux';
class CustomerDefaultPage extends Component {
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

