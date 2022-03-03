import Link from 'next/link';
import { Language, NotificationsNone, ExitToApp } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/auth/slice';

class Topbar extends Component {
  constructor(props) {
    super(props);
  }
  handlelogout = e => {
    this.props.dispatch(logOut());
  };
  render() {
    return (
      <div className='topbar'>
        <div className='topbarWrapper'>
          <div className='topLeft'>

            <Link href="/"><a className='logo'>lamaadmin</a></Link>
          </div>

          <div className='topRight'>
            {/* <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">3</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">EN</span>
            </div> */}
            <div className="topbarIconContainer" onClickCapture={this.handlelogout.bind(this)}>
              <ExitToApp />
            </div>
            <img src="https://static.toiimg.com//photo/83890830/83890830.jpg?imgsize=115510" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    );

  }
}
const mapStateToProps = state => {
  return state.auth;
};
export default connect(mapStateToProps)(Topbar);
