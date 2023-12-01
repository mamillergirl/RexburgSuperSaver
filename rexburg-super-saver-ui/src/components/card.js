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
      storeImage,
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


  const removeFromLocalStorage = (index) => {
    const updatedCart = [...items];
    updatedCart.splice(index, 1);
    setItems(updatedCart);

    // Update local storage when removing an item
    localStorage.setItem('items', JSON.stringify(updatedCart));
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
            
            {isSaved? <div className="icon">&#10003;</div> : <div className="icon">+</div> }
           
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
            background-color: #f2f2f2;
            border-radius: 50%; /* Use border-radius to make it a circle (50% of the width/height) */
            position: absolute;
            right: 1px;
            bottom: 5px;
            display: flex;
            justify-content: center;
            align-content: center;
            text-align: center;
            

          }
          .img-9 {
            z-index: 1;
            position: absolute;
            right: 1px;
            bottom: 5px;
            object-fit: contain;
            
          }

          .icon {
            font-size: 25px;
          }
         

        `}</style>
          </>
    )
}

export default Card;