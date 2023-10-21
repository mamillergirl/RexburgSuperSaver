import Nav from "./nav";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="div2">
        <div className="div3">
         <Link to="/" >
          <img alt="test"
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/287c839d-6eae-47a4-be14-6cff45dd3a25?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/287c839d-6eae-47a4-be14-6cff45dd3a25?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/287c839d-6eae-47a4-be14-6cff45dd3a25?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/287c839d-6eae-47a4-be14-6cff45dd3a25?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/287c839d-6eae-47a4-be14-6cff45dd3a25?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/287c839d-6eae-47a4-be14-6cff45dd3a25?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/287c839d-6eae-47a4-be14-6cff45dd3a25?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/287c839d-6eae-47a4-be14-6cff45dd3a25?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
            className="img1"
          />
          </Link>
          <div className="div9">
            <Link to="/saved"> 
            <img alt="test"
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d2be651-68e9-46f7-9257-2fafdfe12b7a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d2be651-68e9-46f7-9257-2fafdfe12b7a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d2be651-68e9-46f7-9257-2fafdfe12b7a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d2be651-68e9-46f7-9257-2fafdfe12b7a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d2be651-68e9-46f7-9257-2fafdfe12b7a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d2be651-68e9-46f7-9257-2fafdfe12b7a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d2be651-68e9-46f7-9257-2fafdfe12b7a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d2be651-68e9-46f7-9257-2fafdfe12b7a?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
              className="img3"
            />
            </Link>
            <div className="div10">
             
            </div>
          </div>
          <Link to="/login"> 
          <div className="div14">
           
            <div className="div15">Sign In</div>
            <div className="div16">/</div>
            <div className="div17">Sign Up</div>
        
          </div>
          </Link>
        </div>
        <Nav/>
        <style jsx> {`
        .div2 {
          align-items: center;
          background-color: var(--gray-scale-white, #fff);
          align-self: stretch;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 3px 0;
        }
        @media (max-width: 991px) {
          .div2 {
            max-width: 100%;
          }

        }
        .div3 {
            align-self: center;
            display: flex;
            width: 100%;
            max-width: 1799px;
            align-items: flex-start;
            justify-content: space-between;
            gap: 20px;
            padding: 0 20px;
          }
          @media (max-width: 991px) {
            .div3 {
              max-width: 100%;
              flex-wrap: wrap;
              justify-content: center;
            }
          }
          .img1 {
            aspect-ratio: 5.27;
            object-fit: cover;
            object-position: center;
            width: 406px;
            overflow: hidden;
            align-self: start;
            margin-top: 10px;
            max-width: 100%;
          }
          .div4 {
            align-items: flex-start;
            border-radius: 6px;
            border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
            align-self: center;
            display: flex;
            padding-left: 16px;
            gap: 0px;
            margin: auto 0;
          }
          @media (max-width: 991px) {
            .div4 {
              max-width: 100%;
              flex-wrap: wrap;
            }
          }
          .div5 {
            align-items: flex-start;
            align-self: center;
            display: flex;
            flex-grow: 1;
            flex-basis: auto;
            gap: 8px;
            margin: auto 0;
          }
          .img2 {
            aspect-ratio: 1;
            object-fit: cover;
            object-position: center;
            width: 20px;
            overflow: hidden;
            align-self: stretch;
            max-width: 100%;
          }
          .div6 {
            color: var(--gray-scale-gray-500, #808080);
            font-family: Poppins, sans-serif;
            font-size: 15px;
            font-weight: 400;
            line-height: 140%;
            align-self: stretch;
            flex-grow: 1;
            flex-basis: auto;
          }
          .div7 {
            justify-content: center;
            align-items: center;
            border-radius: 0px 6px 6px 0px;
            background-color: var(--branding-success, #00b207);
            align-self: stretch;
            display: flex;
            width: 98px;
            max-width: 100%;
            flex-direction: column;
            padding: 14px 20px;
          }
          .div8 {
            color: var(--gray-scale-white, #fff);
            font-family: Poppins, sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 120%;
            align-self: center;
            text-wrap: nowrap;
          }
          @media (max-width: 991px) {
            .div8 {
              text-wrap: initial;
            }
          }
          .div9 {
            align-self: center;
            display: flex;
            width: 134px;
            max-width: 100%;
            align-items: flex-start;
            justify-content: space-between;
            gap: 20px;
            margin: auto 0;
          }
          .img3 {
            aspect-ratio: 0.89;
            object-fit: cover;
            object-position: center;
            width: 31px;
            fill: #000;
            overflow: hidden;
            align-self: start;
            max-width: 100%;
          }
          .div10 {
            align-items: center;
            align-self: start;
            display: flex;
            flex-direction: column;
          }
          .div11 {
            align-items: flex-start;
            align-self: stretch;
            display: flex;
            flex-grow: 1;
            flex-direction: column;
          }
          .div12 {
            color: var(--gray-scale-gray-700, #4d4d4d);
            font-family: Poppins, sans-serif;
            font-size: 11px;
            font-weight: 400;
            line-height: 120%;
            align-self: start;
            text-wrap: nowrap;
          }
          @media (max-width: 991px) {
            .div12 {
              text-wrap: initial;
            }
          }
          .div13 {
            color: var(--gray-scale-gray-900, #1a1a1a);
            font-family: Poppins, sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 100%;
            align-self: start;
            margin-top: 7px;
            text-wrap: nowrap;
          }
          @media (max-width: 991px) {
            .div13 {
              text-wrap: initial;
            }
          }
          .div14 {
            align-items: flex-start;
            align-self: start;
            display: flex;
            gap: 4px;
          }
          @media (max-width: 991px) {
            .div14 {
              justify-content: center;
            }
          }
          .div15 {
            color: var(--gray-scale-gray-600, #666);
            font-family: Poppins, sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 130%;
            align-self: stretch;
          }
          .div16 {
            color: var(--gray-scale-gray-600, #666);
            font-family: Poppins, sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 130%;
            align-self: stretch;
          }
          .div17 {
            color: var(--gray-scale-gray-600, #666);
            font-family: Poppins, sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 130%;
            align-self: stretch;
            text-wrap: nowrap;
          }
          @media (max-width: 991px) {
            .div17 {
              text-wrap: initial;
            }
          }
        `}

        
            
        </style>
      </div>
    )
}

export default Header;