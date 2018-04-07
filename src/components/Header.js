import React, { Component } from 'react';
import Headroom from 'react-headroom';
import '../css/Header.css';
import TetherComponent from 'react-tether';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMen: false,
      isOpenWomen: false,
      isOpenJournal: false,
      isOpenSearch: false,
      isOpenHelp: false,
      isOpenAccount: false
    };
  }
  render() {
    const {
      isOpenMen,
      isOpenWomen,
      isOpenJournal,
      isOpenSearch,
      isOpenHelp,
      isOpenAccount
    } = this.state;
    return (
      <TetherComponent>
        <Headroom
          style={{
            background: 'rgb(255, 255, 255)',
            boxShadow: '1px 1px 1px rgba(0,0,0,0.10)'
          }}
          className="main-header"
        >
          <div className="">
            <ul className="">
              <li>
                <a className="ETQ" href="#">
                  ETQ.
                </a>
              </li>
              <li>
                <a
                  onMouseOver={() => {
                    this.setState({ isOpenMen: !isOpenMen });
                  }}
                  href="#"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  onMouseOver={() => {
                    this.setState({ isOpenWomen: !isOpenWomen });
                  }}
                  onMouseLeave={() => {
                    this.setState({ isOpenWomen: !isOpenWomen });
                  }}
                  href="#"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  onMouseOver={() => {
                    this.setState({ isOpenJournal: !isOpenJournal });
                  }}
                  onMouseLeave={() => {
                    this.setState({ isOpenJournal: !isOpenJournal });
                  }}
                  href="#"
                >
                  Journal
                </a>
              </li>
              <li>
                <a href="#">Permanent Collection</a>
              </li>
            </ul>
          </div>
          <ul className="header-right">
            <li>
              <a
                onMouseOver={() => {
                  this.setState({ isOpenSearch: !isOpenSearch });
                }}
                onMouseLeave={() => {
                  this.setState({ isOpenSearch: !isOpenSearch });
                }}
                href="#"
              >
                Search
              </a>
            </li>
            <li>
              <a
                onMouseOver={() => {
                  this.setState({ isOpenHelp: !isOpenHelp });
                }}
                onMouseLeave={() => {
                  this.setState({ isOpenHelp: !isOpenHelp });
                }}
                href="#"
              >
                Help
              </a>
            </li>
            <li>
              <a
                onMouseOver={() => {
                  this.setState({ isOpenAccount: !isOpenAccount });
                }}
                onMouseLeave={() => {
                  this.setState({ isOpenAccount: !isOpenAccount });
                }}
                href="#"
              >
                My Account
              </a>
            </li>
          </ul>
          {isOpenMen && (
            <div className="Men">
              <h3>Men</h3>
              <ul className="partMen">
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>

                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
              </ul>
            </div>
          )}
          {isOpenWomen && (
            <div className="Women">
              <h3>Women</h3>
              <ul className="partMen">
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>

                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
              </ul>
            </div>
          )}
          {isOpenJournal && (
            <div className="Journal">
              <h3>Journal</h3>
              <ul className="partMen">
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>

                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
              </ul>
            </div>
          )}
          {isOpenSearch && (
            <div className="Search">
              <h3>Search</h3>
              <ul className="partMen">
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>

                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
              </ul>
            </div>
          )}
          {isOpenHelp && (
            <div className="Help">
              <h3>Help</h3>
              <ul className="partMen">
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>

                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
              </ul>
            </div>
          )}
          {isOpenAccount && (
            <div className="Account">
              <h3>Account</h3>
              <ul className="partMen">
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>

                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/15.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
                <li>
                  <img
                    className="partMenImg"
                    src={require('../images/16.jpg')}
                  />
                  <p className="title">New arrival</p>
                  <p>Shop out latest styles</p>
                </li>
              </ul>
            </div>
          )}
        </Headroom>
      </TetherComponent>
    );
  }
}
export default Header;
