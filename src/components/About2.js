import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import fossil from '../images/fossil.jpg'
// className='bgimg-1B'
class About2 extends Component {
  render() {
    return (
      <div>
        <div className="bgimg-1A">
          <Nav style={{ backgroundColor: 'transparent' }} />

          <div className="captionTwo">
            <span className="borderTwo" style={{ fontSize: '40px' }}>EDWARD TIMMER</span>
            <br />
            <span className="borderTwo" style={{ fontSize: '20px' }}>full stack software engineer</span>
          </div>
        </div>

        <div style={{ color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '50px 80px' }}>
          <h3 style={{ textAlign: 'center' }}>About</h3>
          <p>My name is Natalya Timmer.  I knit and teach others how to knit.</p>
          <div>
            <Link to={`/gallery`} style={{ padding: '10px' }}>ALL ITEMS GALLERY</Link>
            <Link to={`/hats`} style={{ padding: '10px' }}>HATS</Link>
            <Link to={`/scarves`} style={{ padding: '10px' }}>SCARVES & SHAWLS</Link>
            <Link to={`/sweaters`} style={{ padding: '10px' }}>SWEATERS</Link>
            <Link to={`/toys`} style={{ padding: '10px' }}>TOYS</Link>
            <Link to={`/blankets`} style={{ padding: '10px' }}>BLANKETS</Link>
          </div>
          {/*<br />
          <div>
            <img src={cat} width={100} />
          </div>*/}
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>Lessons</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px' }}>
            <p>I give live classes at <a href="https://www.bookmarkshoppe.com/" rel="noopener noreferrer" target="_blank" style={{ color: 'white' }}>Bookmark Shoppe</a> located at 8415 3rd Ave, Brooklyn, NY 11209.  Adult classes are Tuesdays, 7:00pm-8:00pm. Kids classes are Saturdays, 11:00am-12:00pm.  To sign up, please call (718) 833-5115.</p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>Custom Orders</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px' }}>
            <p>I also take orders for unique hats, scarves, shawls, baby blankets, and other items, made per your custom specifications.  To place an order, please email me at nattimmer@gmail.com</p>
          </div>
        </div>

        <div className="bgimg-1">
          <div className="caption">
            <span className="border header" style={{ fontSize: '40px', letterSpacing: '0' }}>Thank you for visiting!</span>
          </div>
        </div>

      </div>
    );
  }
}

export default About2;
