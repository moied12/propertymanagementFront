import React, { Component } from 'react';
import { addResidential, addResidentialStart } from '../../store/properties/slice';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { getCity, getRent, getStatus, getType1 } from '../../store/rtsc/slice';
import Select from 'react-select';
import { storage } from '../../firebase';
import { Rings } from 'react-loader-spinner';
import TextArea from 'antd/lib/input/TextArea';
import { Fade } from 'react-slideshow-image';
import { getUser } from '../../store/auth/slice';
class AddResidential extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property_type_id: "",
            city_id: "",
            duration_id: null,
            description: "",
            price: "",
            name: "",
            beds: "",
            baths: "",
            area: "",
            furnished: false,
            location: "",
            status_id: "",
            onPlan: "",
            user_id: "",
            image: [],
            urls: [],
            imageArray: [],
            uploading: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    initalstate = {
        property_type_id: "",
        city_id: "",
        duration_id: null,
        description: "",
        price: "",
        name: "",
        beds: "",
        baths: "",
        area: "",
        furnished: false,
        location: "",
        status_id: "",
        onPlan: "",
        user_id: "",
        image: [],
        urls: [],
        imageArray: [],
        uploading: false
    };
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    componentDidMount() {
        this.props.dispatch(getCity());
        this.props.dispatch(getRent());
        this.props.dispatch(getStatus());
        this.props.dispatch(getType1());
        this.props.dispatch(getUser());
        
        

    }
    buildImgTag() {
        return   this.state.imageArray.length!=0?(<div className="slide-container  item19" >
        <Fade>
            {
                this.state.imageArray.map((imageURI,index) => (
                    <div className="each-fade" key={index}>
            <div className="image-container">
                        <img className="photo-uploaded" src={imageURI} alt="Photo uploaded" />
                        </div>
          </div>
                ))
            }
            </Fade>
    </div>
    ):<></>}
    readURI(e) {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            Promise.all(files.map(file => {
                return (new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.addEventListener('load', (ev) => {
                        resolve(ev.target.result);
                    });
                    reader.addEventListener('error', reject);
                    reader.readAsDataURL(file);
                }));
            }))
                .then(images => {
                    /* Once all promises are resolved, update state with image URI array */
                    this.setState({ imageArray: images })
                }, error => {
                    console.error(error);
                });
        }
    }
    handledelete = () => {
        if (this.state.image.length != 0 && this.state.imageArray.length != 0) {
            this.setState({ image: [] });
            this.setState({ imageArray: [] })
        }
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    }
    handleimageChange = e => {
        // to remove e.target.files.splice(index,1)
        e.preventDefault();
        this.readURI(e);
        this.setState({ image: Array.from(e.target.files) });
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }




    }

    handleaddresidentialsubmit = () => {
        this.setState({ uploading: true }, () => {
            var result = Promise.all(
                this.state.image.map(async (element) => {
                    const uploadTask = await storage.ref("images/" + element.name).put(element);
                    const downloadURL = await uploadTask.ref.getDownloadURL()
                    return downloadURL;
                })
            )
            result.then(data =>
                this.setState({ urls: data }, () => {
                    this.props.dispatch(addResidentialStart());
                    let propertydetails = JSON.parse(JSON.stringify({ ...this.state, imageArray: null }));
                    this.props.dispatch(addResidential(propertydetails));
                    this.setState(this.initalstate);
                })
            );
        });
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


    render() {
        const imgTag = this.buildImgTag();
        
        console.log(this.props.data)
        return (
            !this.state.uploading?(
                // !this.state.uploading ?
                <div className="ps-my-account">
                    <div className="container">

                    {imgTag}
                        <Form
                            className="ps-form--account"
                            onFinish={this.handleaddresidentialsubmit.bind(this)}>

                            <div className="grid-container">
                                <div className="item1"><h1>Add Residential Property</h1></div>

                                <div className='item13' style={{ height: 'inherit' }}>
                                    <Select options={this.props.city} placeholder="City"
                                        onChange={this.handleChangecity}>
                                    </Select>
                                </div>

                                <div className='item9' style={{ height: 'inherit' }}>
                                    <Select options={this.props.status} placeholder="Status"
                                        onChange={this.handleChangestatus}>
                                    </Select>
                                </div>

                                <div className='item3' style={{ height: 'inherit' }}>
                                    <Select options={this.props.rent} placeholder="Rent Duration or Buy"
                                        onChange={this.handleChangerent}>
                                    </Select>
                                </div>

                                <div className='item10' style={{ height: 'inherit' }}>
                                    <Select options={this.props.type} placeholder="Property Type"
                                        onChange={this.handleChangetype}>
                                    </Select>
                                </div>

                                <div className="item2">
                                    <Form.Item name="name" rules={[{ required: true, },]}>
                                        <Input name="name"
                                            value={this.state.name}
                                            className="form-control"
                                            type="text"
                                            placeholder="Property Title"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item4">
                                    <Form.Item name="price" rules={[{ required: true, },]} >
                                        <Input
                                            name="price"
                                            value={this.state.price}
                                            className="form-control"
                                            type="text"
                                            placeholder="Price/Rent For Duration"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item5">
                                    <Form.Item name="beds" rules={[{ required: true, },]}>
                                        <Input
                                            name="beds"
                                            value={this.state.beds}
                                            className="form-control"
                                            type="number"
                                            placeholder="Number of Bedrooms"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item6">
                                    <Form.Item name="baths" rules={[{ required: true, },]}>
                                        <Input
                                            name="baths"
                                            value={this.state.baths}
                                            className="form-control"
                                            type="number"
                                            placeholder="Number of Bathrooms"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item7">
                                    <Form.Item name="area" rules={[{ required: true, },]}>
                                        <Input
                                            name="area"
                                            value={this.state.area}
                                            className="form-control"
                                            type="number"
                                            placeholder="Area (sq.ft)"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>

                                <div className='item8' style={{ height: 'inherit' }}>
                                    <Select options={[{ value: true, label: 'True' }, { value: false, label: 'False' }]}
                                        placeholder="Furnished" onChange={this.handleChangefurnished} >
                                    </Select>
                                </div>


                                <div className="item14">
                                    <Form.Item name="location" rules={[{ required: true, },]}>
                                        <Input
                                            name="location"
                                            value={this.state.location}
                                            className="form-control"
                                            type="text"
                                            placeholder="Location"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item11">
                                    <Form.Item name="user_id" rules={[{ required: true, },]}>
                                        <Input
                                            name="user_id"
                                            value={this.state.user_id}
                                            className="form-control"
                                            type="text"
                                            placeholder="User Id"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>


                                <div className="item12">
                                    <Form.Item name="onPlan" rules={[{ required: true, },]}>
                                        <Input
                                            name="onPlan"
                                            value={this.state.onPlan}
                                            className="form-control"
                                            type="text"
                                            placeholder="On Plan"
                                            onChange={this.handleChange} />
                                    </Form.Item>
                                </div>
                                <div className="item15">
                                    <Form.Item  name="description" rules={[{ required: true, },]}>
                                        <TextArea
                                            name="description"
                                            value={this.state.onPlan}
                                            className="form-control"
                                            type="text"
                                            placeholder="Description"
                                            onChange={this.handleChange}
                                            rows={5} />
                                    </Form.Item>
                                </div>


                                <div className='item16'>
                                    <input
                                        id={this.state.id}
                                        type="file"
                                        name=""
                                        accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v"
                                        title="Add photos or video"
                                        onChange={this.handleimageChange.bind(this)}
                                        multiple
                                    /></div>

                                <button className='item17' onClick={this.handledelete.bind(this)} style={{ height: "fit-content", marginTop: "20px" }}>Re-Upload</button>
                                <div className="item18"><button type="submit" >ADD</button></div>
                            </div>
                        </Form>


                    </div>
                    <div className="test">
                        {/* { this.state.urls.length == 0 ? <></> :
                    this.state.urls.map(proper=><>
                        <h1>Commercial</h1>
                        <img src={proper} />
                            </>
                            )} */}
                    </div>
                </div>
                // : <Rings color="#00BFFF" height={80} width={80} />
            ):
            (<div className='ps-my-account'>
                <div className='centercontent'>
                    <Rings style={{ textAlign: 'center' }} color="#00BFFF" height={300} width={300} />
                </div>
                <h1 className='centercontenttext' style={{ textAlign: 'center' }}>Please wait while the property is added.</h1></div>)
        )
    }
}
const mapStateToProps = state => {
    return state.rtsc;
};
export default connect(mapStateToProps)(AddResidential);
