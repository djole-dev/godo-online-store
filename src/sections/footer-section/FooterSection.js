import React from 'react';
import './FooterSection.css';

function FooterSection() {
    return (
        <div className="footer">
            <div className="footer-column">
                <h4 className="footer-header">Get to Know Us</h4>
                <p className="footer-item">About Us</p>
                <p className="footer-item">Our Address</p>
                <p className="footer-item">Our Story</p>
            </div>
            <div className="footer-column">
                <p className="footer-header">Make Money with Us</p>
                <p className="footer-item">Create Your Store</p>
                <p className="footer-item">Sell Your Products</p>
                <p className="footer-item">Become Salesman</p>
            </div>
            <div className="footer-column">
                <p className="footer-header">Let Us Help You</p>
                <p className="footer-item">Delivery</p>
                <p className="footer-item">Call An Agent</p>
                <p className="footer-item">Contact Us</p>
                
               

            </div>
        </div>
    )
}

export default FooterSection;
