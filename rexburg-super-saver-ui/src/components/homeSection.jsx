import Card from "./card"
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import albertsonsCardData from '../albertsonsDeals.json';
import broulimsCardData from '../broulimsDeals.json'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: 20px;
`;


function Section({title, number}){
  const [itemsNumber, setItemsNumber] = useState(number)
  const [cardData, setCardData] = useState([]);
  const [store, setStore] = useState(``)
  const [limitedCardData, setLimitedCardData] = useState([]);

  useEffect(() => {
   
    if (title === "Albertsons") {
      setCardData(albertsonsCardData);
      setLimitedCardData(albertsonsCardData.slice(0, itemsNumber));
    } else if (title === "Broulims") {
      setCardData(broulimsCardData);
      setLimitedCardData(broulimsCardData.slice(0, itemsNumber));
    } else if (title === "Featured Deals") {
      const albertsonsSlice = albertsonsCardData.slice(itemsNumber, itemsNumber * 2);
      const broulimsSlice = broulimsCardData.slice(itemsNumber, itemsNumber * 2);
      const data = albertsonsSlice.concat(broulimsSlice);
      setLimitedCardData(data);
    }
  }, [title, itemsNumber]);


  return (
        <>
        <div className="div-38">
          <div className="div-39">{title}</div>
          <div className="div-40">
            <button  onClick={() => { 
              
              setItemsNumber(itemsNumber + 5)
              console.log(itemsNumber)
            }}className="div-41">View More</button>
            <img alt="test"
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
              className="img-7"
            />
          </div>
    
        </div>

            <div className="div-164">
          <GridContainer>
          {limitedCardData.map((card, index) => (
          <Card id= {index}  name={card.name} originalPrice = {card.originalPrice} salePrice = {card.discountPrice} img={card.imageUrl} endDate={card.endDate} storeImage={card.storeImage}/>
        ))}

      </GridContainer>   
   
        </div>

         </>

       

    )
}
export default Section