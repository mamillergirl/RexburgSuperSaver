import { useState , useEffect} from "react";

function Card({id, name, originalPrice, salePrice, img, endDate, storeImage}){
  const [isSaved, setIsSaved] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load saved items from local storage when the component mounts
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);

    // Check if the item with the same id is already saved
    const isItemSaved = storedItems.some((item) => item.id === id);
    setIsSaved(isItemSaved);
  }, [id]);

  const handleButtonPress = () => {
    isSaved ? removeFromLocalStorage() : saveToLocalStorage();
  };

  const saveToLocalStorage = () => {
    const newItem = {
      id,
      name,
      originalPrice,
      salePrice,
      img,
      endDate,
      storeImage
    };

    // Check if the item with the same id is already saved in local storage
    const isDuplicate = items.some((item) => item.id === id);

    if (!isDuplicate) {
      // Update the state with the new item
      setItems([...items, newItem]);

      // Update the local storage array by adding the new item
      localStorage.setItem('items', JSON.stringify([...items, newItem]));
      setIsSaved(true);
    }
  };

  const removeFromLocalStorage = () => {
    // Remove the item with the specified key from local storage
    localStorage.removeItem(id);

    // Update the state to reflect the removal
    setItems(items.filter((item) => item.id !== id));
    setIsSaved(false);
  };

    return (
      <>
        <div className="div-43">
            <div className="div-44">
              <img alt="test"
                loading="lazy"
                srcSet= {img}
                 className="img-8"
              />
            </div>
            <div className="div-48">
              <div className="div-49">{name} </div>
              <div className="div-50">
                <div className="div-51">
                  <div className="div-52">${salePrice}</div>
                  <div className="div-53">{`$${originalPrice}`}</div>
                </div>
             
                
              </div>
            </div>
            <button onClick={saveToLocalStorage}>
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
              src={storeImage}
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