import React from "react";

function UpdatedComponent(props) {
  return (
    <>
      <main className="main-container">
        <section className="account-section">
          <div className="account-title">Account</div>
          <div className="dashboard-link">
            <a href="#" className="dashboard-link">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d71ac43-9fbd-47d8-8494-d1aefae41a61?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d71ac43-9fbd-47d8-8494-d1aefae41a61?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d71ac43-9fbd-47d8-8494-d1aefae41a61?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d71ac43-9fbd-47d8-8494-d1aefae41a61?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d71ac43-9fbd-47d8-8494-d1aefae41a61?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d71ac43-9fbd-47d8-8494-d1aefae41a61?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d71ac43-9fbd-47d8-8494-d1aefae41a61?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d71ac43-9fbd-47d8-8494-d1aefae41a61?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"className="dashboard-icon"
                alt="Dashboard"
              />
              <div className="dashboard-text">Dashboard</div>
            </a>
          </div>
          <div className="previous-deals-link">
            <a href="#" className="previous-deals-link">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a055ec-0f23-4be5-b488-f0803cd74928?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4a055ec-0f23-4be5-b488-f0803cd74928?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4a055ec-0f23-4be5-b488-f0803cd74928?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4a055ec-0f23-4be5-b488-f0803cd74928?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4a055ec-0f23-4be5-b488-f0803cd74928?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4a055ec-0f23-4be5-b488-f0803cd74928?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4a055ec-0f23-4be5-b488-f0803cd74928?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4a055ec-0f23-4be5-b488-f0803cd74928?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"className="previous-deals-icon"
                alt="Previous Deals"
              />
              <div className="previous-deals-text">Previous Deals</div>
            </a>
          </div>
          <div className="favorite-items-link">
            <a href="#" className="favorite-items-link">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4f08cdbc-7ff3-45a8-8390-87a8bde27279?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f08cdbc-7ff3-45a8-8390-87a8bde27279?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f08cdbc-7ff3-45a8-8390-87a8bde27279?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f08cdbc-7ff3-45a8-8390-87a8bde27279?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f08cdbc-7ff3-45a8-8390-87a8bde27279?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f08cdbc-7ff3-45a8-8390-87a8bde27279?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f08cdbc-7ff3-45a8-8390-87a8bde27279?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f08cdbc-7ff3-45a8-8390-87a8bde27279?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"className="favorite-items-icon"
                alt="Favorite Items"
              />
              <div className="favorite-items-text">Favorite Items</div>
            </a>
          </div>
          <div className="saved-deals-link">
            <a href="#" className="saved-deals-link">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b03a4f5c-f383-44fb-864c-f7319340737e?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b03a4f5c-f383-44fb-864c-f7319340737e?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b03a4f5c-f383-44fb-864c-f7319340737e?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b03a4f5c-f383-44fb-864c-f7319340737e?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b03a4f5c-f383-44fb-864c-f7319340737e?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b03a4f5c-f383-44fb-864c-f7319340737e?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b03a4f5c-f383-44fb-864c-f7319340737e?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b03a4f5c-f383-44fb-864c-f7319340737e?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"className="saved-deals-icon"
                alt="Saved Deals"
              />
              <div className="saved-deals-text">Saved Deals</div>
            </a>
          </div>
          <div className="settings-link">
            <a href="#" className="settings-link">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d925e75-14db-48bc-b6cb-f5ff90b7ffa9?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d925e75-14db-48bc-b6cb-f5ff90b7ffa9?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d925e75-14db-48bc-b6cb-f5ff90b7ffa9?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d925e75-14db-48bc-b6cb-f5ff90b7ffa9?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d925e75-14db-48bc-b6cb-f5ff90b7ffa9?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d925e75-14db-48bc-b6cb-f5ff90b7ffa9?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d925e75-14db-48bc-b6cb-f5ff90b7ffa9?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d925e75-14db-48bc-b6cb-f5ff90b7ffa9?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"className="settings-icon"
                alt="Settings"
              />
              <div className="settings-text">Settings</div>
            </a>
          </div>
          <div className="logout-link">
            <a href="#" className="logout-link">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/19c7ff70-0554-4702-8f90-e4bd4745c199?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/19c7ff70-0554-4702-8f90-e4bd4745c199?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/19c7ff70-0554-4702-8f90-e4bd4745c199?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/19c7ff70-0554-4702-8f90-e4bd4745c199?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/19c7ff70-0554-4702-8f90-e4bd4745c199?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/19c7ff70-0554-4702-8f90-e4bd4745c199?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/19c7ff70-0554-4702-8f90-e4bd4745c199?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/19c7ff70-0554-4702-8f90-e4bd4745c199?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"className="logout-icon"
                alt="Log-out"
              />
              <div className="logout-text">Log-out</div>
            </a>
          </div>
        </section>
        <section className="customer-section">
          <div className="customer-info">
            <div className="customer-name">Dianne Russell</div>
            <div className="customer-type">Customer</div>
          </div>
          <div className="edit-profile-link">
            <a href="#" className="edit-profile-link">
              Edit Profile
            </a>
          </div>
          <div className="order-history-section">
            <div className="order-history-title">Recent Order History</div>
            <div className="view-all-link">
              <a href="#" className="view-all-link">
                View All
              </a>
            </div>
            <div className="order-list">
              <div className="order-item">
                <div className="order-id">Order ID</div>
                <div className="order-date">Date</div>
                <div className="order-total">Total</div>
                <div className="order-status">Status</div>
              </div>
              <div className="order-item">
                <div className="order-id">#738</div>
                <div className="order-date">8 Sep, 2020</div>
                <div className="order-total">$135.00 (5 Products)</div>
                <div className="order-status">Processing</div>
                <div className="view-details-link">
                  <a href="#" className="view-details-link">
                    View Details
                  </a>
                </div>
              </div>
              <div className="order-item">
                <div className="order-id">#703</div>
                <div className="order-date">24 May, 2020</div>
                <div className="order-total">$25.00 (1 Product)</div>
                <div className="order-status">On the way</div>
                <div className="view-details-link">
                  <a href="#" className="view-details-link">
                    View Details
                  </a>
                </div>
              </div>
              <div className="order-item">
                <div className="order-id">#130</div>
                <div className="order-date">22 Oct, 2020</div>
                <div className="order-total">$250.00 (4 Products)</div>
                <div className="order-status">Completed</div>
                <div className="view-details-link">
                  <a href="#" className="view-details-link">
                    View Details
                  </a>
                </div>
              </div>
              <div className="order-item">
                <div className="order-id">#561</div>
                <div className="order-date">1 Feb, 2020</div>
                <div className="order-total">$35.00 (1 Product)</div>
                <div className="order-status">Completed</div>
                <div className="view-details-link">
                  <a href="#" className="view-details-link">
                    View Details
                  </a>
                </div>
              </div>
              <div className="order-item">
                <div className="order-id">#536</div>
                <div className="order-date">21 Sep, 2020</div>
                <div className="order-total">$578.00 (13 Products)</div>
                <div className="order-status">Completed</div>
                <div className="view-details-link">
                  <a href="#" className="view-details-link">
                    View Details
                  </a>
                </div>
              </div>
              <div className="order-item">
                <div className="order-id">#492</div>
                <div className="order-date">22 Oct, 2020</div>
                <div className="order-total">$345.00 (7 Products)</div>
                <div className="order-status">Completed</div>
                <div className="view-details-link">
                  <a href="#" className="view-details-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .main-container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }

        .account-section {
          align-self: center;
          width: 100%;
          max-width: 1320px;
          margin: 231px 0 645px;
        }

        @media (max-width: 991px) {
          .account-section {
            max-width: 100%;
            margin: 40px 0;
          }
        }

        .account-title {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          margin-left: 20px;
          text-wrap: nowrap;
        }

        @media (max-width: 991px) {
          .account-title {
            margin-left: 10px;
            text-wrap: initial;
          }
        }

        .dashboard-link,
        .previous-deals-link,
        .favorite-items-link,
        .saved-deals-link,
        .settings-link,
        .logout-link {
          justify-content: space-between;
          align-items: flex-start;
          align-self: center;
          display: flex;
          margin-top: 16px;
          width: 272px;
          max-width: 100%;
          gap: 10px;
        }

        .dashboard-link a,
        .previous-deals-link a,
        .favorite-items-link a,
        .saved-deals-link a,
        .settings-link a,
        .logout-link a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        .dashboard-icon,
        .previous-deals-icon,
        .favorite-items-icon,
        .saved-deals-icon,
        .settings-icon,
        .logout-icon {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }

        .dashboard-text,
        .previous-deals-text,
        .favorite-items-text,
        .saved-deals-text,
        .settings-text,
        .logout-text {
          color: var(--gray-scale-gray-600, #666);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          align-self: stretch;
          width: 100%;
        }

        .customer-section {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 76%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .customer-section {
            width: 100%;
          }
        }

        .customer-info {
          display: flex;
          margin-top: 88px;
          flex-grow: 1;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .customer-info {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .customer-name {
          color: var(--gray-scale-gray-900, #1a1a1a);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
        }

        @media (max-width: 991px) {
          .customer-name {
            text-wrap: initial;
          }
        }

        .customer-type {
          color: var(--gray-scale-gray-500, #808080);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: center;
          text-wrap: nowrap;
        }

        @media (max-width: 991px) {
          .customer-type {
            text-wrap: initial;
          }
        }

        .edit-profile-link {
          color: var(--branding-success, #00b207);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          margin: 5px 0 0 111px;
        }

        @media (max-width: 991px) {
          .edit-profile-link {
            margin-left: 10px;
          }
        }

        .order-history-section {
          border-radius: 8px;
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          align-self: center;
          display: flex;
          margin-top: 69px;
          width: 100%;
          max-width: 984px;
          flex-grow: 1;
          flex-direction: column;
          padding: 24px 0;
        }

        @media (max-width: 991px) {
          .order-history-section {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .order-history-title {
          align-self: center;
          display: flex;
          width: 934px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .order-history-title {
            flex-wrap: wrap;
          }
        }

        .order-history-title .order-id,
        .order-history-title .order-date,
        .order-history-title .order-total,
        .order-history-title .order-status {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0.36px;
          text-transform: uppercase;
          align-self: stretch;
        }

        .order-list {
          background-color: var(--gray-scale-gray-50, #f2f2f2);
          align-self: stretch;
          display: flex;
          margin-top: 19px;
          flex-direction: column;
          padding: 14px 20px;
        }

        @media (max-width: 991px) {
          .order-list {
            max-width: 100%;
          }
        }

        .order-item {
          align-self: stretch;
          display: flex;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .order-item {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        .order-item .order-id,
        .order-item .order-date,
        .order-item .order-total,
        .order-item .order-status {
          color: var(--gray-scale-gray-800, #333);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: stretch;
        }

        .order-item .order-id,
        .order-item .order-date {
          align-self: stretch;
        }

        .order-item .order-total,
        .order-item .order-status {
          align-self: center;
          margin: auto 0;
        }

        .order-item .view-details-link {
          color: var(--branding-success, #00b207);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: center;
          text-wrap: nowrap;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .order-item .view-details-link {
            text-wrap: initial;
          }
        }
      `}</style>
    </>
  );
}

export default UpdatedComponent;