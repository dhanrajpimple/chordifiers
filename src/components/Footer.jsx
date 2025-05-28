import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Useful Links */}
            <div className="footer-column">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="/about">About us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/legal">Legal</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/contact">Contact us</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div className="footer-column">
              <h3>About Us</h3>
              <p className="about-text">
                We are a Music Institute, Production house & an Independent Record Label from Siliguri, Darjeeling, India.
              </p>
            </div>

            {/* Connect with Us */}
            <div className="footer-column">
              <h3>Connect With Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <a href="/contact">Contact us</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:thechordifiersstudio@gmail.com">thechordifiersstudio@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="https://wa.me/917811092672" target="_blank" rel="noopener noreferrer">+91 7811092672</a>
                </div>
              </div>

              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com/chordifiersstudio" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/chordifiersstudio" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/chordifiers.studio" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/chordifiers" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          margin-top: auto;
        }

        .footer-top {
          background: #000000;
          color: #ffffff;
          padding: 60px 0 40px;
          position: relative;
        }

        .footer-top::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
         
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-column h3 {
          color: #ffd700;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-column h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
         
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column ul li {
          margin-bottom: 12px;
          transform: translateX(0);
          transition: transform 0.3s ease;
        }

        .footer-column ul li:hover {
          transform: translateX(5px);
        }

        .footer-column ul li a {
          color: #cccccc;
          text-decoration: none;
          font-size: 15px;
          line-height: 1.6;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-column ul li a:hover {
          color: #ffd700;
        }

        .footer-column ul li a::before {
          content: '▶';
          position: absolute;
          left: -15px;
          color: #ffd700;
          font-size: 10px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .footer-column ul li a:hover::before {
          opacity: 1;
        }

        .about-text {
          color: #cccccc;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
        }

        .contact-info {
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          padding-left: 10px;
          border-bottom-color: rgba(255, 215, 0, 0.5);
        }

        .contact-icon {
          font-size: 18px;
          margin-right: 12px;
          min-width: 25px;
          text-align: center;
        }

        .contact-item a {
          color: #cccccc;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
          word-break: break-all;
        }

        .contact-item a:hover {
          color: #ffd700;
        }

        .social-section h4 {
          color: #ffd700;
          font-size: 1.1rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          background: rgba(255, 215, 0, 0.1);
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #cccccc;
          text-decoration: none;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: #ffd700;
          border-radius: 50%;
          transition: all 0.4s ease;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        .social-icon:hover::before {
          width: 100%;
          height: 100%;
        }

        .social-icon:hover {
          color: #000000;
          border-color: #ffd700;
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        }

        .social-icon svg {
          width: 20px;
          height: 20px;
          position: relative;
          z-index: 1;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.8);
          padding: 20px 0;
          border-top: 1px solid rgba(255, 215, 0, 0.2);
        }

        .footer-bottom p {
          text-align: center;
          margin: 0;
          color: #999;
          font-size: 14px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .footer-top {
            padding: 50px 0 30px;
          }
        }

        @media (max-width: 768px) {
          .footer-columns {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          
          .footer-container {
            padding: 0 15px;
          }
          
          .footer-top {
            padding: 40px 0 25px;
          }
          
          .footer-column {
            text-align: center;
          }
          
          .footer-column h3::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .footer-column ul li a::before {
            display: none;
          }
          
          .contact-item {
            justify-content: center;
          }
          
          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-top {
            padding: 30px 0 20px;
          }
          
          .footer-columns {
            gap: 25px;
          }
          
          .footer-column h3 {
            font-size: 1.2rem;
            margin-bottom: 15px;
          }
          
          .footer-column ul li a {
            font-size: 14px;
          }
          
          .about-text {
            font-size: 14px;
          }
          
          .contact-item a {
            font-size: 13px;
          }
          
          .social-icon {
            width: 40px;
            height: 40px;
          }
          
          .social-icon svg {
            width: 18px;
            height: 18px;
          }
          
          .social-icons {
            gap: 12px;
          }
        }

        @media (max-width: 360px) {
          .footer-container {
            padding: 0 10px;
          }
          
          .footer-column h3 {
            font-size: 1.1rem;
          }
          
          .footer-column ul li a {
            font-size: 13px;
          }
          
          .about-text {
            font-size: 13px;
          }
          
          .contact-item a {
            font-size: 12px;
          }
          
          .social-icon {
            width: 38px;
            height: 38px;
          }
          
          .social-icon svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default Footer;