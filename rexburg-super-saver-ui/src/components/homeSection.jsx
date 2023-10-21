import Card from "./card"
import styled from 'styled-components';


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: 20px;
`;


function Section({title, number}){
    const blankCards = Array(number).fill({ title: 'Blank Card', content: 'This is a blank card' });
    return (
        <>
        <div className="div-38">
          <div className="div-39">{title}</div>
          <div className="div-40">
            <div className="div-41">View All</div>
            <img alt="test"
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bca1cec-4b31-4c12-8d33-ad30626a0b38?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
              className="img-7"
            />
          </div>
    
        </div>

            <div className="div-164">
          <GridContainer>
          {blankCards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}

      </GridContainer>   
   
        </div>

         </>

       

    )
}
export default Section