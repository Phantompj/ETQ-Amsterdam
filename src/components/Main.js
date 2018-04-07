import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Player } from 'video-react';
import '../css/Main.css';
import '../../node_modules/aos/dist/aos.css';
import '../../node_modules/aos/dist/aos.js';
import AOS from 'aos';

AOS.init();
class AutoImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hinh: 1,
      text1: 'More styles have arrived',
      text2: 'Shop Now'
    };
  }
  async changeImageNext() {
    await this.setState({
      hinh: this.state.hinh == 3 ? 1 : this.state.hinh + 1
    });

    if (this.state.hinh == 3) {
      await this.setState({
        text1: 'Traditional craftsmanship meets innovative design'
      });
      await this.setState({ text2: 'Read More' });
    } else if (this.state.hinh == 1) {
      await this.setState({
        text1: 'More styles have arrived'
      });
      await this.setState({ text2: 'Shop Now' });
    } else if (this.state.hinh == 2) {
      await this.setState({
        text1: 'Shop Low 4 Vermont'
      });
      await this.setState({
        text2: 'Our high-end interpretation of retro tennis design'
      });
    }
  }
  async changeImagePre() {
    await this.setState({
      hinh: this.state.hinh == 1 ? 3 : this.state.hinh - 1
    });
    if (this.state.hinh == 3) {
      await this.setState({
        text1: 'Traditional craftsmanship meets innovative design'
      });
      await this.setState({ text2: 'Read More' });
    } else if (this.state.hinh == 1) {
      await this.setState({
        text1: 'More styles have arrived'
      });
      await this.setState({ text2: 'Shop Now' });
    } else if (this.state.hinh == 2) {
      await this.setState({
        text1: 'Shop Low 4 Vermont'
      });
      await this.setState({
        text2: 'Our high-end interpretation of retro tennis design'
      });
    }
  }

  render() {
    return (
      <div className="testimg">
        <a href="#">
          <img
            className="image"
            src={require('../images/' + this.state.hinh + '.jpg')}
          />
        </a>

        <button className="btnPre" onClick={this.changeImagePre.bind(this)}>
          &#60;
        </button>
        <button className="btnNext" onClick={this.changeImageNext.bind(this)}>
          &#62;
        </button>
        <div className="textHeader">
          <p className="text1">{this.state.text1}</p>

          <p className="text2">{this.state.text2}</p>
        </div>
      </div>
    );
  }
}
class Newitem extends Component {
  render() {
    return (
      <div>
        <div className="top-body" data-aos="fade-in" data-aos-duration="1500">
          <div>
            <ul>
              <li>
                <a href="#">
                  <img className="" src={require('../images/4.jpg')} />
                </a>
              </li>
              <li>
                <a href="#" className="introtext">
                  <p className="texttitle">New men&#39;s arrivals</p>
                  <p className="textcontent">Shop our latest styles</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="" src={require('../images/5.jpg')} />
                </a>
              </li>
              <li>
                <a href="#" className="introtext">
                  <p className="texttitle">New women&#39;s arrivals</p>
                  <p className="textcontent">Shop our latest styles</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="" src={require('../images/6.jpg')} />
                </a>
              </li>
              <li>
                <a href="#" className="introtext">
                  <p className="texttitle">Store & more</p>
                  <p className="textcontent">Explore the world of ETQ</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="centercontain"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="leftct">
            <a href="#">
              <img className="imgcenc" src={require('../images/7.jpg')} />
            </a>
            <p className="texttitle">About Tradition and Technology</p>
            <p>March 23,2018</p>
          </div>
          <div className="rightct">
            <a href="#">
              <img className="imgcenc" src={require('../images/8.jpg')} />
            </a>
            <p className="texttitle">About Tradition and Technology</p>
            <p>March 23,2018</p>
          </div>
        </div>
        <div
          className="bottomcontain"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="partbototm">
            <img className="bottomimg" src={require('../images/9.jpg')} />
            <div class="textbototm">
              <p className="texttitle">5 day ago</p>
              <p>
                The devil is in the details – Read all about our craft, link in
                bio
              </p>
            </div>
          </div>
          <div className="partbototm">
            <img className="bottomimg" src={require('../images/10.jpg')} />
            <div class="textbototm">
              <p className="texttitle">6 day ago</p>
              <p>Read all about our craft – link in bio</p>
            </div>
          </div>
          <div className="partbototm">
            <video
              className="partvideo"
              controls
              loop
              preload="auto"
              src="https://www.etq-amsterdam.com/wp-content/uploads/2018/03/640x640-video-1522400757.mp4"
              poster={require('../images/12.jpg')}
            />
            <div class="textbototm">
              <p className="texttitle">6 day ago</p>
              <p>
                Low 1 Stacked | The sole marks the difference between a good
                shoe and a great one - Read more, link in bio
              </p>
            </div>
          </div>
          <div className="partbototm">
            <img className="bottomimg" src={require('../images/11.jpg')} />
            <div class="textbototm">
              <p className="texttitle">1 week ago</p>
              <p>
                LOW 4 VERMONT | A high-end interpretation of retro tennis shoes
                > Shop online [link in bio] or at @etqstore
              </p>
            </div>
          </div>
        </div>
        <div className="footerpage" data-aos="fade-in" data-aos-duration="1500">
          <div className="part1footer">
            <a className="afooter" href="#">
              About
            </a>
            <p className="pfooter">
              Founded in 2010 in Amsterdam, ETQ derived under the mindset of
              eliminating over-accessorized branding and focusing primarily on
              letting the quality of the product speak for itself. Read more
            </p>
          </div>
          <div className="part2footer">
            <a className="afooter" href="#">
              Address
            </a>
            <p className="pfooter">
              Singel 459 1012 WP Amsterdam The Netherlands
            </p>
          </div>
          <div className="part2footer">
            <a className="afooter" href="#">
              Contact
            </a>
            <p className="pfooter">
              Live chat Email us plus sign31 (0) 202 615 614
            </p>
          </div>
          <div className="part2footer">
            <a className="afooter" href="#">
              Payment
            </a>
            <p className="pfooter">Creditcard PayPal iDEAL</p>
          </div>
          <div className="part2footer">
            <a className="afooter" href="#">
              Follow us
            </a>
            <p className="pfooter">Instagram Facebook Tumblr</p>
          </div>
        </div>
        <div className="notepage" data-aos="fade-in" data-aos-duration="1500">
          <div className="leftnote">
            <a className="pfooter" href="#">
              Shipping
            </a>&#160;
            <a className="pfooter" href="#">
              info
            </a>&#160;
            <a className="pfooter" href="#">
              Careers Terms & Conditions
            </a>&#160;
            <a className="pfooter" href="#">
              Conditions Privacy statement
            </a>
          </div>
          <div className="rightnote">
            <lable>Newsletter</lable>&#160;
            <input className="inputnote" />
            <input type="submit" className="btnnote" value="submit" />
          </div>
        </div>
      </div>
    );
  }
}
class Main extends Component {
  render() {
    return (
      <div>
        <AutoImage />
        <Newitem />
      </div>
    );
  }
}
export default Main;
