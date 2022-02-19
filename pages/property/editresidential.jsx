import React, { Component } from 'react';
import { editResidential } from '../../store/properties/slice';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { getCity, getRent, getStatus, getType1 } from '../../store/rtsc/slice';
import Select from 'react-select';
import { storage } from '../../firebase';
import { Rings } from 'react-loader-spinner';
import TextArea from 'antd/lib/input/TextArea';
import { Fade } from 'react-slideshow-image';
class EditResidential extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props.property, uploading: false};
        this.handleChange = this.handleChange.bind(this);
    }
    static async getInitialProps(ctx) {
        return { property: JSON.parse(ctx.query.property) };
    }
    componentDidMount() {
        this.props.dispatch(getCity());
        this.props.dispatch(getRent());
        this.props.dispatch(getStatus());
        this.props.dispatch(getType1());

    }

    handleeditresidentialsubmit = () => {
        let propertydetails = JSON.parse(JSON.stringify({ ...this.state, images: this.state.images.replace(/\\/g, '')}));
        this.props.dispatch(editResidential(propertydetails));
    }

    // todo handle value change
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleChangecity = (selectedOption) => {
        this.setState({ city_id: selectedOption["value"] }
        );
    };
    handleChangestatus = (selectedOption) => {
        this.setState({ status_id: selectedOption["value"] }
        );
    };
    handleChangetype = (selectedOption) => {
        this.setState({ property_type_id: selectedOption["value"] }
        );
    };
    handleChangerent = (selectedOption) => {
        this.setState({ duration_id: selectedOption["value"] }
        );
    };
    handleChangefurnished = (selectedOption) => {
        this.setState({ furnished: selectedOption["value"] }
        );
    };
    handleChangeonPlan = (selectedOption) => {
        this.setState({ onPlan: selectedOption["value"] }
        );
    };


    render() {
        return (
            !this.state.uploading ? (
                // !this.state.uploading ?
                <div className="ps-my-account">
                    <div className="container">

                        <Form
                            className="ps-form--account"
                            onFinish={this.handleeditresidentialsubmit.bind(this)}>

                            <div className="grid-container">
                                <div className="item1"><h1>Edit Residential Property</h1></div>

                                <div className='item13' style={{ height: 'inherit' }}>
                                    <Select options={this.props.city} placeholder="City"
                                        defaultValue={this.props.city.find(obj => {
                                            return obj.value === this.props.property.city_id
                                        })}
                                        onChange={this.handleChangecity}>
                                    </Select>
                                </div>

                                <div className='item9' style={{ height: 'inherit' }}>
                                    <Select options={this.props.status} placeholder="Status"
                                        defaultValue={this.props.status.find(obj => {
                                            return obj.value === this.props.property.status_id
                                        })}
                                        onChange={this.handleChangestatus}>
                                    </Select>
                                </div>

                                <div className='item3' style={{ height: 'inherit' }}>
                                    <Select options={this.props.rent} placeholder="Rent Duration or Buy"
                                        defaultValue={this.props.rent.find(obj => {
                                            return obj.value === 2
                                        })}
                                        onChange={this.handleChangerent}>
                                    </Select>
                                </div>

                                <div className='item10' style={{ height: 'inherit' }}>
                                    <Select options={this.props.type} placeholder="Property Type"
                                        defaultValue={this.props.type.find(obj => {
                                            return obj.value === this.props.property.property_type_id
                                        })}
                                        onChange={this.handleChangetype}>
                                    </Select>
                                </div>

                                <div className="item2">
                                    <Form.Item name="name" rules={[{ required: true, },]}  initialValue={this.props.property.name}>
                                        <Input name="name"
                                            value={this.state.name}
                                            className="form-control"
                                            type="text"
                                            defaultValue={this.props.property.name}
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item4">
                                    <Form.Item name="price" rules={[{ required: true, },]} initialValue={this.props.property.price}>
                                        <Input
                                            name="price"
                                            value={this.state.price}
                                            className="form-control"
                                            type="text"
                                            placeholder={this.props.property.price}
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item5">
                                    <Form.Item name="beds" rules={[{ required: true, },]}initialValue={this.props.property.beds}>
                                        <Input
                                            name="beds"
                                            value={this.state.beds}
                                            className="form-control"
                                            type="number"
                                            defaultValue={this.props.property.beds}
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item6">
                                    <Form.Item name="baths" rules={[{ required: true, },]}initialValue={this.props.property.baths}>
                                        <Input
                                            name="baths"
                                            value={this.state.baths}
                                            className="form-control"
                                            type="number"
                                            placeholder={this.props.property.baths}
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item7">
                                    <Form.Item name="area" rules={[{ required: true, },]}initialValue={this.props.property.area}>
                                        <Input
                                            name="area"
                                            value={this.state.area}
                                            className="form-control"
                                            type="number"
                                            defaultValue={this.props.property.area}
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>

                                <div className='item8' style={{ height: 'inherit' }}>
                                    <Select options={[{ value: true, label: 'True' }, { value: false, label: 'False' }]}
                                        placeholder="Furnished"
                                        defaultValue={[{ value: true, label: 'True' }, { value: false, label: 'False' }].find(obj => {
                                            return obj.value === this.props.property.furnished
                                        })}
                                        onChange={this.handleChangefurnished} >
                                    </Select>
                                </div>


                                <div className="item14">
                                    <Form.Item name="location" rules={[{ required: true, },]}initialValue={this.props.property.location}>
                                        <Input
                                            name="location"
                                            value={this.state.location}
                                            className="form-control"
                                            type="text"
                                            
                                            defaultValue={this.props.property.location}
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                {/* <div className="item11">
                                    <Form.Item name="user_id" rules={[{ required: true, },]}>
                                        <Input
                                            name="user_id"
                                            value={this.state.user_id}
                                            className="form-control"
                                            type="text"
                                            placeholder="User Id"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div> */}

                                <div className='item12' style={{ height: 'inherit' }}>
                                    <Select options={[{ value: true, label: 'True' }, { value: false, label: 'False' }]}
                                        placeholder="On Plan"
                                        defaultValue={[{ value: true, label: 'True' }, { value: false, label: 'False' }].find(obj => {
                                            return obj.value === this.props.property.onPlan
                                        })}
                                        onChange={this.handleChangeonPlan} >
                                    </Select>
                                </div>
                                <div className="item15">
                                    <Form.Item name="description" rules={[{ required: true, },]}initialValue={this.props.property.description}>
                                        <TextArea
                                            name="description"
                                            value={this.state.onPlan}
                                            className="form-control"
                                            type="text"
                                            defaultValue={this.props.property.description}
                                            onChange={this.handleChange}
                                            rows={5} />
                                    </Form.Item>
                                </div>


                                <div className="item18"><button type="submit" >edit</button></div>
                            </div>
                        </Form>


                    </div>
                </div>
            ) :
                (<div className='ps-my-account'>
                    <div className='centercontent'>
                        <Rings style={{ textAlign: 'center' }} color="#00BFFF" height={300} width={300} />
                    </div>
                    <h1 className='centercontenttext' style={{ textAlign: 'center' }}>Please wait while the property is edited.</h1></div>)
        )
    }
}
const mapStateToProps = state => {
    return state.rtsc;
};
export default connect(mapStateToProps)(EditResidential);
