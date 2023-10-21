import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmallNav from "./smallNav";

function SmallHeader(props) {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const MenuDisplay = () => {
        setIsNavVisible(!isNavVisible);
    }

  return (
    <div className="image-gallery">
      <div className="image-wrapper">
        {/* <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2e16e393-67ee-436c-863c-4ef727c4bc1f?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e16e393-67ee-436c-863c-4ef727c4bc1f?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e16e393-67ee-436c-863c-4ef727c4bc1f?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e16e393-67ee-436c-863c-4ef727c4bc1f?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e16e393-67ee-436c-863c-4ef727c4bc1f?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e16e393-67ee-436c-863c-4ef727c4bc1f?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e16e393-67ee-436c-863c-4ef727c4bc1f?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e16e393-67ee-436c-863c-4ef727c4bc1f?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"
          className="image"
          alt="Menu_image"
        /> */}
        <button onClick={MenuDisplay}> {isNavVisible ? 'X' : '≡'}</button>
        {isNavVisible && <SmallNav />}
      </div>
      <div className="image-wrapper">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc5577d2-ca2d-465a-a7fe-fe7573dd53b0?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5577d2-ca2d-465a-a7fe-fe7573dd53b0?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5577d2-ca2d-465a-a7fe-fe7573dd53b0?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5577d2-ca2d-465a-a7fe-fe7573dd53b0?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5577d2-ca2d-465a-a7fe-fe7573dd53b0?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5577d2-ca2d-465a-a7fe-fe7573dd53b0?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5577d2-ca2d-465a-a7fe-fe7573dd53b0?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc5577d2-ca2d-465a-a7fe-fe7573dd53b0?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"
          className="image"
          alt="Image2"
          id="shoppingCart"
        />
      </div>
      
      <div className="image-wrapper">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/914f8225-418e-41ea-b131-4b90a871ae55?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/914f8225-418e-41ea-b131-4b90a871ae55?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/914f8225-418e-41ea-b131-4b90a871ae55?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/914f8225-418e-41ea-b131-4b90a871ae55?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/914f8225-418e-41ea-b131-4b90a871ae55?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/914f8225-418e-41ea-b131-4b90a871ae55?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/914f8225-418e-41ea-b131-4b90a871ae55?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/914f8225-418e-41ea-b131-4b90a871ae55?apiKey=6fa21d0d9b6441a5a031c8d705997b4d&"
          className="image"
          alt="Image3"
        />
      </div>
    </div>
  );
}

export default SmallHeader;

<style jsx>{`
  .image-gallery {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
  }

  @media (max-width: 650px) {
    .image-gallery {
      justify-content: center;
    }
  }

  .image-wrapper {
    aspect-ratio: 1.09;
    object-fit: cover;
    object-position: center;
    width: 50px;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
    display: flex; /* Use a flex container for centering */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
  }

  .image-wrapper:nth-child(2) {
    aspect-ratio: 0.98;
    width: 86px;
    align-self: stretch;
  }

  .image-wrapper:nth-child(3) {
    aspect-ratio: 0.75;
    width: 3px;
    fill: #000;
    align-self: end;
    margin-top: 85px;
  }

  @media (max-width: 991px) {
    .image-wrapper:nth-child(3) {
      margin-top: 40px;
    }
  }
`}</style>