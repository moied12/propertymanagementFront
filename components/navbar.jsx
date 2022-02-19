import React, { Component } from 'react';
import { IoIosArrowDown, IoIosMenu ,IoIosLogOut} from 'react-icons/io';
import Link from 'next/link';
import { connect } from 'react-redux';
import { logOut } from '../store/auth/slice';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showlinks: false,
      drop1: false
    }
  }
  handlelogout = e => {
    this.props.dispatch(logOut());
  };
  hidecomponent = () => {
    this.setState({ drop1: !this.state.drop1 })
  }
  render() {
    return (
      <div className='resNavbar'>
        <div className='leftside'>
          <div className='lin' id={this.state.showlinks ? "hidden" : ""}>
            <Link href="/"><a>Index</a></Link>
            <Link href="/test/test"><a>Test</a></Link>
            <Link href="/user/users"><a>Users</a></Link>
            <div className='submenu'>
              <div className='dropdown-btn1'>
                <button onClickCapture={this.hidecomponent.bind(this)}>Properties
                  <div style={{ float: 'right' }}> <IoIosArrowDown /></div>
                </button>
              </div>

              {this.state.drop1 &&
                <div className='submenudata'>
                  <Link href="/property/residential"><a>Residential</a></Link>
                  <Link href="/property/commercial"><a>Commercial</a></Link>
                </div>
              }
            </div>
          </div>
          <button className="menu" onClick={() => this.setState({ showlinks: !this.state.showlinks })}><IoIosMenu/></button>
        </div>
        <div className='rightside'>
          <button onClick={this.handlelogout.bind(this)}><IoIosLogOut/></button>
        </div>
      </div>
    );

  }
}
const mapStateToProps = state => {
  return state.auth;
};
export default connect(mapStateToProps)(Navbar);
