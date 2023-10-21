"use client";
import React from "react";

function ProductCard(props) {
  const { image, productName, originalPrice, discountedPrice, discount, brandLogo, brandName, description, category, tags } = props;

  const handleSave = () => {
    // Add your save logic here
  };

  return (
    <>
      <section className="product-card">
        <button className="close-button">X</button>
        <img loading="lazy" srcSet={image} className="product-card__image" alt="Product Image" />
        <div className="product-card__details">
          <div className="product-card__info">
            <div className="product-card__title">{productName}</div>
            <div className="product-card__price">
              <div className="product-card__original-price">{originalPrice}</div>
              <div className="product-card__discounted-price">{discountedPrice}</div>
            </div>
            <div className="product-card__discount">{discount}</div>
          </div>
          <div className="product-card__brand">
            <div className="product-card__brand-label">Brand:</div>
            <div className="product-card__brand-info">
              <img loading="lazy" srcSet={brandLogo} className="product-card__brand-logo" alt="Brand Logo" />
              <div className="product-card__brand-name">{brandName}</div>
            </div>
          </div>
          <div className="product-card__description">{description}</div>
          <div className="product-card__actions">
            <div className="product-card__save" onClick={handleSave}>
              Add to Saved
            </div>
            <div className="product-card__image-wrapper">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/22a6e4b8-1519-4eff-8477-e80b44b22e9f?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22a6e4b8-1519-4eff-8477-e80b44b22e9f?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22a6e4b8-1519-4eff-8477-e80b44b22e9f?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22a6e4b8-1519-4eff-8477-e80b44b22e9f?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22a6e4b8-1519-4eff-8477-e80b44b22e9f?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22a6e4b8-1519-4eff-8477-e80b44b22e9f?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22a6e4b8-1519-4eff-8477-e80b44b22e9f?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22a6e4b8-1519-4eff-8477-e80b44b22e9f?apiKey=972b909c88a047a3bdbd2a879eeb0409&"className="product-card__icon" alt="Save Icon" />
            </div>
          </div>
          <div className="product-card__category">
            <div className="product-card__category-label">Category:</div>
            <div className="product-card__category-info">{category}</div>
          </div>
          <div className="product-card__tags">
            <div className="product-card__tag-label">Tag:</div>
            {tags.map((tag, index) => (
              <div className="product-card__tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        /* Your CSS styles here */
      `}</style>
    </>
  );
}

export default ProductCard;