import { useState } from "react";

function Card({title, content}){
  const [cardData, setCardData] = useState('');

  const saveToLocalStorage = (key) => {
    // Store the key in local storage
    localStorage.setItem('selectedKey', key);
  };

    return (
      <>
        <div className="div-43">
            <div className="div-44">
              <img alt="test"
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/21894050-790f-438a-b215-ae4ce563178e?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/21894050-790f-438a-b215-ae4ce563178e?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21894050-790f-438a-b215-ae4ce563178e?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/21894050-790f-438a-b215-ae4ce563178e?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/21894050-790f-438a-b215-ae4ce563178e?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21894050-790f-438a-b215-ae4ce563178e?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/21894050-790f-438a-b215-ae4ce563178e?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/21894050-790f-438a-b215-ae4ce563178e?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                className="img-8"
              />
              <div className="div-45">
                <div className="div-46">Sale</div>
                <div className="div-47">50%</div>
              </div>
            </div>
            <div className="div-48">
              <div className="div-49">{title}</div>
              <div className="div-50">
                <div className="div-51">
                  <div className="div-52">$14.99</div>
                  <div className="div-53">$20.99</div>
                </div>
             
                
              </div>
            </div>
            <button onClick={saveToLocalStorage('key')}>
              <div className="circle">
            
           
            <img alt="test"
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e34c78b8-d1cc-4d04-8e9a-6655b480b5f9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e34c78b8-d1cc-4d04-8e9a-6655b480b5f9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e34c78b8-d1cc-4d04-8e9a-6655b480b5f9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e34c78b8-d1cc-4d04-8e9a-6655b480b5f9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e34c78b8-d1cc-4d04-8e9a-6655b480b5f9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e34c78b8-d1cc-4d04-8e9a-6655b480b5f9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e34c78b8-d1cc-4d04-8e9a-6655b480b5f9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e34c78b8-d1cc-4d04-8e9a-6655b480b5f9?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                  className="img-9"
                />
                 </div>
            </button>
            <img alt="test"
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/77610fe3-ce14-4c85-8e1e-7b881fd8ebd8?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77610fe3-ce14-4c85-8e1e-7b881fd8ebd8?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77610fe3-ce14-4c85-8e1e-7b881fd8ebd8?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77610fe3-ce14-4c85-8e1e-7b881fd8ebd8?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77610fe3-ce14-4c85-8e1e-7b881fd8ebd8?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77610fe3-ce14-4c85-8e1e-7b881fd8ebd8?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77610fe3-ce14-4c85-8e1e-7b881fd8ebd8?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77610fe3-ce14-4c85-8e1e-7b881fd8ebd8?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
              className="img-10"
            />
          </div>
          <style jsx> {`
           button {
            width = 25px;
            position: relative;
           }

           .circle {
            width: 30px; /* Adjust the width and height to change the size of the circle */
            height: 30px; /* Width and height should be the same for a perfect circle */
            background-color: white;
            border-radius: 50%; /* Use border-radius to make it a circle (50% of the width/height) */
            position: absolute;
            right: 1px;
            bottom: 5px;
            

          }
          .img-9 {
            z-index: 1;
            position: absolute;
            right: 1px;
            bottom: 5px;
          }

        `}</style>
          </>
    )
}

export default Card;