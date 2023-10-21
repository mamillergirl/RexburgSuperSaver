import React from "react";

function Footer(props) {
  return (
    <>
      <header className="main-container">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                My Account
              </a>
              <ul className="sub-nav-list">
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    My Account
                  </a>
                </li>
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    Saved Deals
                  </a>
                </li>
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    Settings
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Helps
              </a>
              <ul className="sub-nav-list">
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    Contact
                  </a>
                </li>
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    FAQs
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Proxy
              </a>
              <ul className="sub-nav-list">
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    About
                  </a>
                </li>
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    Shop
                  </a>
                </li>
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    Product
                  </a>
                </li>
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    Products Details
                  </a>
                </li>
                <li className="sub-nav-item">
                  <a href="#" className="sub-nav-link">
                    Track Order
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        .main-container {
          justify-content: center;
          align-items: center;
          background-color: var(--gray-scale-gray-900, #1a1a1a);
          align-self: stretch;
          display: flex;
          margin-top: 200px;
          width: 100vw;
          padding-bottom: 80px;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .main-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .nav {
          align-self: center;
          width: 866px;
          max-width: 100%;
          margin: 80px 0 0 -161px;
          padding: 0 20px;
        }

        @media (max-width: 991px) {
          .nav {
            margin-top: 40px;
          }
        }

        .nav-list {
          gap: 20px;
          display: flex;
        }

        @media (max-width: 991px) {
          .nav-list {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 32%;
          margin-left: 0px;
        }

        @media (max-width: 991px) {
          .nav-item {
            width: 100%;
          }
        }

        .sub-nav-list {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 42%;
          margin-left: 0px;
        }

        @media (max-width: 991px) {
          .sub-nav-list {
            width: 100%;
          }
        }

        .nav-link {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }

        @media (max-width: 991px) {
          .nav-link {
            text-wrap: initial;
          }
        }

        .sub-nav-link {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }

        @media (max-width: 991px) {
          .sub-nav-link {
            text-wrap: initial;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;