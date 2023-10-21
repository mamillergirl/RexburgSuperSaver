"use client";
import Header from "./header";
import SmallHeader from "./smallHeader";
import Card from "./card";
import Section from "./homeSection";
import Footer from "./footer";
import React, { useState, useEffect } from 'react';



function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

      useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 600);
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
        
  return (
    <>
      <div className="div">
      <div>
        {isSmallScreen ? <SmallHeader /> : <Header />}
      </div>
      
        {/* <Header/> */}
        <div className="div-26">
          <img alt="test"
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cdb98958-590b-42a2-a7d8-e6b046cc3c42?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdb98958-590b-42a2-a7d8-e6b046cc3c42?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdb98958-590b-42a2-a7d8-e6b046cc3c42?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdb98958-590b-42a2-a7d8-e6b046cc3c42?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdb98958-590b-42a2-a7d8-e6b046cc3c42?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdb98958-590b-42a2-a7d8-e6b046cc3c42?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdb98958-590b-42a2-a7d8-e6b046cc3c42?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdb98958-590b-42a2-a7d8-e6b046cc3c42?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
            className="img-4"
          />
          <div className="div-27">
            <div className="div-28">
              <div className="div-29">Best Deal</div>
              <div className="div-30">Special Products Deal of the Month</div>
            </div>
            <div className="div-31">
              <div className="div-32">Shop Now</div>
              <img alt="test"
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb52909-399c-4cdc-87ac-929239510e09?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb52909-399c-4cdc-87ac-929239510e09?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb52909-399c-4cdc-87ac-929239510e09?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb52909-399c-4cdc-87ac-929239510e09?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb52909-399c-4cdc-87ac-929239510e09?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb52909-399c-4cdc-87ac-929239510e09?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb52909-399c-4cdc-87ac-929239510e09?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb52909-399c-4cdc-87ac-929239510e09?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                className="img-5"
              />
            </div>
          </div>
        </div>
        <div className="div-33">
          <div className="div-34">
            <img alt="test"
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4ae6077-df5d-4543-889a-ba0b1bf9e863?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4ae6077-df5d-4543-889a-ba0b1bf9e863?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4ae6077-df5d-4543-889a-ba0b1bf9e863?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4ae6077-df5d-4543-889a-ba0b1bf9e863?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4ae6077-df5d-4543-889a-ba0b1bf9e863?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4ae6077-df5d-4543-889a-ba0b1bf9e863?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4ae6077-df5d-4543-889a-ba0b1bf9e863?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4ae6077-df5d-4543-889a-ba0b1bf9e863?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
              className="img-6"
            />
            <div className="div-35">
              <div className="div-36">Grocery Savings Guaranteed</div>
              <div className="div-37">We ensure your money is saved</div>
            </div>
          </div>
        </div>
        <Section title = {"Featured Deals"} number = {10}/>
        
            
          
    
        
      
    

        <div className="div-116">
          <div className="div-117">
            <div className="column">
              <div className="div-118">
                <div className="div-119">
                  <img alt="test"
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0f64554a-4aa5-46dd-a798-e88471c64d83?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f64554a-4aa5-46dd-a798-e88471c64d83?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f64554a-4aa5-46dd-a798-e88471c64d83?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f64554a-4aa5-46dd-a798-e88471c64d83?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f64554a-4aa5-46dd-a798-e88471c64d83?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f64554a-4aa5-46dd-a798-e88471c64d83?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f64554a-4aa5-46dd-a798-e88471c64d83?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f64554a-4aa5-46dd-a798-e88471c64d83?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                    className="img-67"
                  />
                  <div className="div-120">Best Deals</div>
                  <div className="div-121">Sale of the Month</div>
                  <div className="div-122">
                    <div className="div-123">
                      <div className="div-124">00</div>
                      <div className="div-125">Days</div>
                    </div>
                    <div className="div-126">:</div>
                    <div className="div-127">
                      <div className="div-128">02</div>
                      <div className="div-129">Hours</div>
                    </div>
                    <div className="div-130">:</div>
                    <div className="div-131">
                      <div className="div-132">18</div>
                      <div className="div-133">Mins</div>
                    </div>
                    <div className="div-134">:</div>
                    <div className="div-135">
                      <div className="div-136">46</div>
                      <div className="div-137">Secs</div>
                    </div>
                  </div>
                  <div className="div-138">
                    <div className="div-139">
                      <div className="div-140">Shop Now</div>
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39cba7f4-5077-41ca-b6f1-8cb27a935941?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39cba7f4-5077-41ca-b6f1-8cb27a935941?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39cba7f4-5077-41ca-b6f1-8cb27a935941?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39cba7f4-5077-41ca-b6f1-8cb27a935941?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39cba7f4-5077-41ca-b6f1-8cb27a935941?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39cba7f4-5077-41ca-b6f1-8cb27a935941?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39cba7f4-5077-41ca-b6f1-8cb27a935941?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39cba7f4-5077-41ca-b6f1-8cb27a935941?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-68"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-141">
                <div className="div-142">
                  <img alt="test"
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/85a751a6-0107-4a4c-b849-93388c582b70?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/85a751a6-0107-4a4c-b849-93388c582b70?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85a751a6-0107-4a4c-b849-93388c582b70?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/85a751a6-0107-4a4c-b849-93388c582b70?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/85a751a6-0107-4a4c-b849-93388c582b70?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85a751a6-0107-4a4c-b849-93388c582b70?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/85a751a6-0107-4a4c-b849-93388c582b70?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/85a751a6-0107-4a4c-b849-93388c582b70?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                    className="img-69"
                  />
                  <div className="div-143">85% Fat Free</div>
                  <div className="div-144">Low-Fat Meat</div>
                  <div className="div-145">
                    <div className="div-146">Started at</div>
                    <div className="div-147">$79.99</div>
                  </div>
                  <div className="div-148">
                    <div className="div-149">
                      <div className="div-150">Shop Now</div>
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/deb0250f-15a3-4d76-9f18-fb17a2ae5b91?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/deb0250f-15a3-4d76-9f18-fb17a2ae5b91?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/deb0250f-15a3-4d76-9f18-fb17a2ae5b91?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/deb0250f-15a3-4d76-9f18-fb17a2ae5b91?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/deb0250f-15a3-4d76-9f18-fb17a2ae5b91?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/deb0250f-15a3-4d76-9f18-fb17a2ae5b91?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/deb0250f-15a3-4d76-9f18-fb17a2ae5b91?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/deb0250f-15a3-4d76-9f18-fb17a2ae5b91?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-70"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-3">
              <div className="div-151">
                <div className="div-152">
                  <img alt="test"
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7411f2f4-59df-4a52-8732-4f68ca3e1901?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7411f2f4-59df-4a52-8732-4f68ca3e1901?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7411f2f4-59df-4a52-8732-4f68ca3e1901?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7411f2f4-59df-4a52-8732-4f68ca3e1901?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7411f2f4-59df-4a52-8732-4f68ca3e1901?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7411f2f4-59df-4a52-8732-4f68ca3e1901?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7411f2f4-59df-4a52-8732-4f68ca3e1901?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7411f2f4-59df-4a52-8732-4f68ca3e1901?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                    className="img-71"
                  />
                  <div className="div-153">Summer Sale</div>
                  <div className="div-154">100% Fresh Fruit</div>
                  <div className="div-155">
                    <div className="div-156">Up to</div>
                    <div className="div-157">64% OFF</div>
                  </div>
                  <div className="div-158">
                    <div className="div-159">
                      <div className="div-160">Shop Now</div>
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/90de8c29-51e6-4013-84e9-301cd3a2b516?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/90de8c29-51e6-4013-84e9-301cd3a2b516?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/90de8c29-51e6-4013-84e9-301cd3a2b516?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/90de8c29-51e6-4013-84e9-301cd3a2b516?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/90de8c29-51e6-4013-84e9-301cd3a2b516?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/90de8c29-51e6-4013-84e9-301cd3a2b516?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/90de8c29-51e6-4013-84e9-301cd3a2b516?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/90de8c29-51e6-4013-84e9-301cd3a2b516?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-72"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
  
          <Section title={"Albertsons"} number={5}/>

     
        <Section title={"Broulims"} number={5}/>
        </div>
        </div>
        <div className="div-243">
          <div className="div-244">
            <div className="div-245">Client Testimonials</div>
            <div className="div-246">
              <img alt="test"
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d86c5683-58c7-4ea3-98de-26f47cd7bf35?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86c5683-58c7-4ea3-98de-26f47cd7bf35?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86c5683-58c7-4ea3-98de-26f47cd7bf35?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86c5683-58c7-4ea3-98de-26f47cd7bf35?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86c5683-58c7-4ea3-98de-26f47cd7bf35?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86c5683-58c7-4ea3-98de-26f47cd7bf35?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86c5683-58c7-4ea3-98de-26f47cd7bf35?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86c5683-58c7-4ea3-98de-26f47cd7bf35?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                className="img-141"
              />
              <img alt="test"
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d216ffa-5be8-40ff-bfe7-afd3312179a9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d216ffa-5be8-40ff-bfe7-afd3312179a9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d216ffa-5be8-40ff-bfe7-afd3312179a9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d216ffa-5be8-40ff-bfe7-afd3312179a9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d216ffa-5be8-40ff-bfe7-afd3312179a9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d216ffa-5be8-40ff-bfe7-afd3312179a9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d216ffa-5be8-40ff-bfe7-afd3312179a9?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d216ffa-5be8-40ff-bfe7-afd3312179a9?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                className="img-142"
              />
            </div>
          </div>
          <div className="div-247">
            <div className="div-248">
              <div className="column">
                <div className="div-249">
                  <img alt="test"
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bda23b69-a218-4fd6-b892-d6eaa9b4d558?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bda23b69-a218-4fd6-b892-d6eaa9b4d558?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bda23b69-a218-4fd6-b892-d6eaa9b4d558?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bda23b69-a218-4fd6-b892-d6eaa9b4d558?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bda23b69-a218-4fd6-b892-d6eaa9b4d558?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bda23b69-a218-4fd6-b892-d6eaa9b4d558?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bda23b69-a218-4fd6-b892-d6eaa9b4d558?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bda23b69-a218-4fd6-b892-d6eaa9b4d558?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                    className="img-143"
                  />
                  <div className="div-250">
                    Pellentesque eu nibh eget mauris congue mattis mattis nec
                    tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                    cursus velit sodales. Donec sed neque eget
                  </div>
                  <div className="div-251">
                    <div className="div-252">
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a25c942-d1c9-4378-b3c6-9357be02d724?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25c942-d1c9-4378-b3c6-9357be02d724?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25c942-d1c9-4378-b3c6-9357be02d724?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25c942-d1c9-4378-b3c6-9357be02d724?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25c942-d1c9-4378-b3c6-9357be02d724?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25c942-d1c9-4378-b3c6-9357be02d724?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25c942-d1c9-4378-b3c6-9357be02d724?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a25c942-d1c9-4378-b3c6-9357be02d724?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-144"
                      />
                      <div className="div-253">
                        <div className="div-254">Robert Fox</div>
                        <div className="div-255">Customer</div>
                      </div>
                    </div>
                    <div className="div-256">
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed6001da-f823-44b0-bdac-eb0671e206b3?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed6001da-f823-44b0-bdac-eb0671e206b3?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed6001da-f823-44b0-bdac-eb0671e206b3?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed6001da-f823-44b0-bdac-eb0671e206b3?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed6001da-f823-44b0-bdac-eb0671e206b3?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed6001da-f823-44b0-bdac-eb0671e206b3?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed6001da-f823-44b0-bdac-eb0671e206b3?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed6001da-f823-44b0-bdac-eb0671e206b3?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-145"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/143dbecd-66c4-419f-a20a-cf960b1fca87?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/143dbecd-66c4-419f-a20a-cf960b1fca87?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/143dbecd-66c4-419f-a20a-cf960b1fca87?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/143dbecd-66c4-419f-a20a-cf960b1fca87?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/143dbecd-66c4-419f-a20a-cf960b1fca87?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/143dbecd-66c4-419f-a20a-cf960b1fca87?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/143dbecd-66c4-419f-a20a-cf960b1fca87?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/143dbecd-66c4-419f-a20a-cf960b1fca87?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-146"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bca39924-a075-4b26-a7a5-abd815b39986?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bca39924-a075-4b26-a7a5-abd815b39986?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bca39924-a075-4b26-a7a5-abd815b39986?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bca39924-a075-4b26-a7a5-abd815b39986?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bca39924-a075-4b26-a7a5-abd815b39986?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bca39924-a075-4b26-a7a5-abd815b39986?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bca39924-a075-4b26-a7a5-abd815b39986?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bca39924-a075-4b26-a7a5-abd815b39986?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-147"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9906f011-e55a-4108-9447-86908186b44d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9906f011-e55a-4108-9447-86908186b44d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9906f011-e55a-4108-9447-86908186b44d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9906f011-e55a-4108-9447-86908186b44d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9906f011-e55a-4108-9447-86908186b44d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9906f011-e55a-4108-9447-86908186b44d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9906f011-e55a-4108-9447-86908186b44d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9906f011-e55a-4108-9447-86908186b44d?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-148"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/423812c6-bad0-4d8c-b95f-87bbd602ca37?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/423812c6-bad0-4d8c-b95f-87bbd602ca37?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/423812c6-bad0-4d8c-b95f-87bbd602ca37?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/423812c6-bad0-4d8c-b95f-87bbd602ca37?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/423812c6-bad0-4d8c-b95f-87bbd602ca37?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/423812c6-bad0-4d8c-b95f-87bbd602ca37?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/423812c6-bad0-4d8c-b95f-87bbd602ca37?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/423812c6-bad0-4d8c-b95f-87bbd602ca37?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-149"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-4">
                <div className="div-257">
                  <img alt="test"
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c202b5db-82f2-4582-8d8c-6329bfa75e5c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c202b5db-82f2-4582-8d8c-6329bfa75e5c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c202b5db-82f2-4582-8d8c-6329bfa75e5c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c202b5db-82f2-4582-8d8c-6329bfa75e5c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c202b5db-82f2-4582-8d8c-6329bfa75e5c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c202b5db-82f2-4582-8d8c-6329bfa75e5c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c202b5db-82f2-4582-8d8c-6329bfa75e5c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c202b5db-82f2-4582-8d8c-6329bfa75e5c?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                    className="img-150"
                  />
                  <div className="div-258">
                    Pellentesque eu nibh eget mauris congue mattis mattis nec
                    tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                    cursus velit sodales. Donec sed neque eget
                  </div>
                  <div className="div-259">
                    <div className="div-260">
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa935b8-9f47-44af-a75c-10482561f452?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fa935b8-9f47-44af-a75c-10482561f452?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fa935b8-9f47-44af-a75c-10482561f452?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fa935b8-9f47-44af-a75c-10482561f452?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fa935b8-9f47-44af-a75c-10482561f452?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fa935b8-9f47-44af-a75c-10482561f452?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fa935b8-9f47-44af-a75c-10482561f452?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fa935b8-9f47-44af-a75c-10482561f452?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-151"
                      />
                      <div className="div-261">
                        <div className="div-262">Dianne Russell</div>
                        <div className="div-263">Customer</div>
                      </div>
                    </div>
                    <div className="div-264">
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37cd32a5-4cf8-43e4-bf3d-c8cd201a905d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37cd32a5-4cf8-43e4-bf3d-c8cd201a905d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37cd32a5-4cf8-43e4-bf3d-c8cd201a905d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37cd32a5-4cf8-43e4-bf3d-c8cd201a905d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37cd32a5-4cf8-43e4-bf3d-c8cd201a905d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37cd32a5-4cf8-43e4-bf3d-c8cd201a905d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37cd32a5-4cf8-43e4-bf3d-c8cd201a905d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37cd32a5-4cf8-43e4-bf3d-c8cd201a905d?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-152"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afd1fd05-2bc6-4c8f-9ac3-94337b5050b0?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd1fd05-2bc6-4c8f-9ac3-94337b5050b0?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd1fd05-2bc6-4c8f-9ac3-94337b5050b0?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd1fd05-2bc6-4c8f-9ac3-94337b5050b0?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd1fd05-2bc6-4c8f-9ac3-94337b5050b0?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd1fd05-2bc6-4c8f-9ac3-94337b5050b0?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd1fd05-2bc6-4c8f-9ac3-94337b5050b0?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd1fd05-2bc6-4c8f-9ac3-94337b5050b0?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-153"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a070f8f0-f50e-4a97-87b2-7b7ddb3ab00d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a070f8f0-f50e-4a97-87b2-7b7ddb3ab00d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a070f8f0-f50e-4a97-87b2-7b7ddb3ab00d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a070f8f0-f50e-4a97-87b2-7b7ddb3ab00d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a070f8f0-f50e-4a97-87b2-7b7ddb3ab00d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a070f8f0-f50e-4a97-87b2-7b7ddb3ab00d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a070f8f0-f50e-4a97-87b2-7b7ddb3ab00d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a070f8f0-f50e-4a97-87b2-7b7ddb3ab00d?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-154"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5863b30b-1934-4f9e-88ef-ef0586f358af?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5863b30b-1934-4f9e-88ef-ef0586f358af?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5863b30b-1934-4f9e-88ef-ef0586f358af?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5863b30b-1934-4f9e-88ef-ef0586f358af?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5863b30b-1934-4f9e-88ef-ef0586f358af?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5863b30b-1934-4f9e-88ef-ef0586f358af?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5863b30b-1934-4f9e-88ef-ef0586f358af?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5863b30b-1934-4f9e-88ef-ef0586f358af?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-155"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f215ce-ec92-41e4-b127-135886dd5121?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f215ce-ec92-41e4-b127-135886dd5121?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f215ce-ec92-41e4-b127-135886dd5121?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f215ce-ec92-41e4-b127-135886dd5121?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f215ce-ec92-41e4-b127-135886dd5121?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f215ce-ec92-41e4-b127-135886dd5121?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f215ce-ec92-41e4-b127-135886dd5121?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f215ce-ec92-41e4-b127-135886dd5121?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-156"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-5">
                <div className="div-265">
                  <img alt="test"
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70cca467-831c-4ec0-94d8-3a1ad38a6814?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70cca467-831c-4ec0-94d8-3a1ad38a6814?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70cca467-831c-4ec0-94d8-3a1ad38a6814?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70cca467-831c-4ec0-94d8-3a1ad38a6814?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70cca467-831c-4ec0-94d8-3a1ad38a6814?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70cca467-831c-4ec0-94d8-3a1ad38a6814?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70cca467-831c-4ec0-94d8-3a1ad38a6814?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70cca467-831c-4ec0-94d8-3a1ad38a6814?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                    className="img-157"
                  />
                  <div className="div-266">
                    Pellentesque eu nibh eget mauris congue mattis mattis nec
                    tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                    cursus velit sodales. Donec sed neque eget
                  </div>
                  <div className="div-267">
                    <div className="div-268">
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6e165c2-1ae1-4667-9992-f29691dcbc2c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e165c2-1ae1-4667-9992-f29691dcbc2c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e165c2-1ae1-4667-9992-f29691dcbc2c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e165c2-1ae1-4667-9992-f29691dcbc2c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e165c2-1ae1-4667-9992-f29691dcbc2c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e165c2-1ae1-4667-9992-f29691dcbc2c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e165c2-1ae1-4667-9992-f29691dcbc2c?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e165c2-1ae1-4667-9992-f29691dcbc2c?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-158"
                      />
                      <div className="div-269">
                        <div className="div-270">Eleanor Pena</div>
                        <div className="div-271">Customer</div>
                      </div>
                    </div>
                    <div className="div-272">
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6916703c-4582-4179-9671-b4d19a061eed?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6916703c-4582-4179-9671-b4d19a061eed?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6916703c-4582-4179-9671-b4d19a061eed?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6916703c-4582-4179-9671-b4d19a061eed?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6916703c-4582-4179-9671-b4d19a061eed?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6916703c-4582-4179-9671-b4d19a061eed?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6916703c-4582-4179-9671-b4d19a061eed?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6916703c-4582-4179-9671-b4d19a061eed?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-159"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1471a142-dd1d-475c-b339-8462b691b25a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1471a142-dd1d-475c-b339-8462b691b25a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1471a142-dd1d-475c-b339-8462b691b25a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1471a142-dd1d-475c-b339-8462b691b25a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1471a142-dd1d-475c-b339-8462b691b25a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1471a142-dd1d-475c-b339-8462b691b25a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1471a142-dd1d-475c-b339-8462b691b25a?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1471a142-dd1d-475c-b339-8462b691b25a?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-160"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8806249c-a18b-4a26-a9ab-1ca32cf7869d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8806249c-a18b-4a26-a9ab-1ca32cf7869d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8806249c-a18b-4a26-a9ab-1ca32cf7869d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8806249c-a18b-4a26-a9ab-1ca32cf7869d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8806249c-a18b-4a26-a9ab-1ca32cf7869d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8806249c-a18b-4a26-a9ab-1ca32cf7869d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8806249c-a18b-4a26-a9ab-1ca32cf7869d?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8806249c-a18b-4a26-a9ab-1ca32cf7869d?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-161"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0595c086-2e2a-4d1b-a7ef-4bb098fb94df?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0595c086-2e2a-4d1b-a7ef-4bb098fb94df?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0595c086-2e2a-4d1b-a7ef-4bb098fb94df?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0595c086-2e2a-4d1b-a7ef-4bb098fb94df?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0595c086-2e2a-4d1b-a7ef-4bb098fb94df?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0595c086-2e2a-4d1b-a7ef-4bb098fb94df?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0595c086-2e2a-4d1b-a7ef-4bb098fb94df?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0595c086-2e2a-4d1b-a7ef-4bb098fb94df?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-162"
                      />
                      <img alt="test"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d81e9f68-f8f0-4ed5-a864-85aa644eb4e7?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d81e9f68-f8f0-4ed5-a864-85aa644eb4e7?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d81e9f68-f8f0-4ed5-a864-85aa644eb4e7?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d81e9f68-f8f0-4ed5-a864-85aa644eb4e7?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d81e9f68-f8f0-4ed5-a864-85aa644eb4e7?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d81e9f68-f8f0-4ed5-a864-85aa644eb4e7?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d81e9f68-f8f0-4ed5-a864-85aa644eb4e7?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d81e9f68-f8f0-4ed5-a864-85aa644eb4e7?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                        className="img-163"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      
      <style jsx>{`
        .div {
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
        }
        .div-2 {
          align-items: center;
          background-color: var(--gray-scale-white, #fff);
          align-self: stretch;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 3px 0;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
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
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .img {
          aspect-ratio: 5.27;
          object-fit: cover;
          object-position: center;
          width: 406px;
          overflow: hidden;
          align-self: start;
          margin-top: 10px;
          max-width: 100%;
        }
        .div-4 {
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
          .div-4 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-5 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          flex-grow: 1;
          flex-basis: auto;
          gap: 8px;
          margin: auto 0;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 20px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }
        .div-6 {
          color: var(--gray-scale-gray-500, #808080);
          font-family: Poppins, sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 140%;
          align-self: stretch;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-7 {
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
        .div-8 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 120%;
          align-self: center;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-8 {
            text-wrap: initial;
          }
        }
        .div-9 {
          align-self: center;
          display: flex;
          width: 134px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        .img-3 {
          aspect-ratio: 0.89;
          object-fit: cover;
          object-position: center;
          width: 31px;
          fill: #000;
          overflow: hidden;
          align-self: start;
          max-width: 100%;
        }
        .div-10 {
          align-items: center;
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-11 {
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        .div-12 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 120%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-12 {
            text-wrap: initial;
          }
        }
        .div-13 {
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
          .div-13 {
            text-wrap: initial;
          }
        }
        .div-14 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          gap: 4px;
        }
        @media (max-width: 991px) {
          .div-14 {
            justify-content: center;
          }
        }
        .div-15 {
          color: var(--gray-scale-gray-600, #666);
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 130%;
          align-self: stretch;
        }
        .div-16 {
          color: var(--gray-scale-gray-600, #666);
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 130%;
          align-self: stretch;
        }
        .div-17 {
          color: var(--gray-scale-gray-600, #666);
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 130%;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-17 {
            text-wrap: initial;
          }
        }
        .div-18 {
          justify-content: space-between;
          align-items: center;
          background-color: var(--gray-scale-gray-800, #333);
          align-self: end;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 5px 7px 0;
        }
        @media (max-width: 991px) {
          .div-18 {
            max-width: 100%;
          }
        }
        .div-19 {
          justify-content: space-between;
          align-items: center;
          background-color: var(--gray-scale-gray-900, #1a1a1a);
          align-self: stretch;
          display: flex;
          flex-direction: column;
          padding: 16px 20px;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
          }
        }
        .div-20 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 437px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-20 {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-21 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .div-22 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .div-23 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .div-24 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .div-25 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-25 {
            text-wrap: initial;
          }
        }
        .div-26 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: center;
          position: relative;
          display: flex;
          min-height: 503px;
          margin-top: 66px;
          width: 100%;
          max-width: 1319px;
          padding: 0px;
 
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .img-4 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-27 {
          position: relative;
          align-items: center;
          align-self: end;
          display: flex;
          margin-right: 20px;
          width: 343px;
          max-width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-27 {
            margin-right: 10px;
          }
        }
        .div-28 {
          justify-content: center;
          align-items: center;
          align-self: stretch;
          display: flex;
          flex-direction: column;
        }
        .div-29 {
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0.42px;
          text-transform: uppercase;
          align-self: center;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-29 {
            text-wrap: initial;
          }
        }
        .div-30 {
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 120%;
          margin-top: 12px;
        }
        .div-31 {
          justify-content: center;
          align-items: flex-start;
          border-radius: 43px;
          align-self: center;
          display: flex;
          margin-top: 32px;
          width: 108px;
          max-width: 100%;
          gap: 12px;
        }
        .div-32 {
          color: var(--branding-success, #00b207);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 120%;
          align-self: stretch;
        }
        .img-5 {
          aspect-ratio: 1.15;
          object-fit: cover;
          object-position: center;
          width: 15px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-33 {
          justify-content: space-between;
          align-items: center;
          border-radius: 8px;
          box-shadow: 0px 8px 40px 0px rgba(0, 38, 3, 0.08);
          background-color: var(--gray-scale-white, #fff);
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1320px;
          flex-direction: column;
          padding: 40px 20px;
        }
        @media (max-width: 991px) {
          .div-33 {
            max-width: 100%;
          }
        }
        .div-34 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-left: 20px;
          width: 306px;
          max-width: 100%;
          gap: 16px;
        }
        @media (max-width: 991px) {
          .div-34 {
            margin-left: 10px;
          }
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-35 {
          justify-content: center;
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-36 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 120%;
        }
        .div-37 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          margin-top: 8px;
        }
        .div-38 {
          justify-content: space-between;
          align-items: flex-start;
          align-self: center;
          display: flex;
          margin-top: 57px;
          width: 100%;
          max-width: 1320px;
          gap: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-38 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-39 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 120%;
          max-width: 263px;
          align-self: stretch;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-40 {
          justify-content: center;
          align-items: flex-start;
          border-radius: 43px;
          align-self: center;
          display: flex;
          gap: 12px;
          margin: auto 0;
        }
        .div-41 {
          color: var(--branding-success, #00b207);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .img-7 {
          aspect-ratio: 1.25;
          object-fit: cover;
          object-position: center;
          width: 15px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-42 {
          align-self: center;
          z-index: 1;
          display: flex;
          margin-top: 32px;
          width: 100%;
          max-width: 1321px;
          align-items: flex-start;
          gap: 0px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-42 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-43 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 14px 5px;
        }
        @media (max-width: 991px) {
          .div-43 {
            margin-right: -1px;
          }
        }
        .div-44 {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: start;
          position: relative;
          display: flex;
          aspect-ratio: 1.1043478260869566;
          width: 100%;
          padding: 11px 20px 192px 11px;
        }
        .img-8 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-45 {
          position: relative;
          justify-content: center;
          align-items: flex-start;
          border-radius: 4px;
          background-color: var(--branding-error, #ea4b48);
          align-self: start;
          display: flex;
          margin-bottom: -38px;
          width: 80px;
          max-width: 100%;
          gap: 4px;
          padding: 3px 8px;
        }
        @media (max-width: 991px) {
          .div-45 {
            margin-bottom: 10px;
          }
        }
        .div-46 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: stretch;
        }
        .div-47 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-47 {
            text-wrap: initial;
          }
        }
        .div-48 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-49 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-50 {
          align-self: start;
          display: flex;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-51 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          gap: 2px;
        }
        .div-52 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .div-53 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          text-decoration-line: strikethrough;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-53 {
            text-wrap: initial;
          }
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 17px;
          fill: #000;
          overflow: hidden;
          align-self: start;
          max-width: 100%;
        }
        .img-10 {
          aspect-ratio: 7.71;
          object-fit: cover;
          object-position: center;
          width: 131px;
          overflow: hidden;
          align-self: start;
          max-width: 100%;
        }
        .div-54 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        .img-11 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-55 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-56 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-57 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-58 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-58 {
            text-wrap: initial;
          }
        }
        .div-59 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-59 {
            justify-content: center;
          }
        }
        .img-12 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-13 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-14 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-15 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-16 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-60 {
          border: 1px solid var(--branding-success-dark, #2c742f);
          box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 5px 11px;
        }
        .div-61 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: start;
          position: relative;
          display: flex;
          aspect-ratio: 1.1043478260869566;
          width: 100%;
          padding: 11px 11px 133px 20px;
        }
        .img-17 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .img-18 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: end;
          max-width: 100%;
        }
        .img-19 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: end;
          max-width: 100%;
          margin: 6px 0 -27px;
        }
        @media (max-width: 991px) {
          .img-19 {
            margin-bottom: 10px;
          }
        }
        .div-62 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-63 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-64 {
          color: var(--branding-success-dark, #2c742f);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-65 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-65 {
            text-wrap: initial;
          }
        }
        .div-66 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-66 {
            justify-content: center;
          }
        }
        .img-20 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-21 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-22 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-23 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-24 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-67 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-67 {
            margin-right: -1px;
          }
        }
        .img-25 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-68 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-69 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-70 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-71 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-71 {
            text-wrap: initial;
          }
        }
        .div-72 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-72 {
            justify-content: center;
          }
        }
        .img-26 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-27 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-28 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-29 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-30 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-73 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        .img-31 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-74 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-75 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-76 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-77 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-77 {
            text-wrap: initial;
          }
        }
        .div-78 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-78 {
            justify-content: center;
          }
        }
        .img-32 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-33 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-34 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-35 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-36 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-79 {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1321px;
          align-items: flex-start;
          gap: 0px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-79 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-80 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          z-index: 1;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-80 {
            margin-right: -1px;
          }
        }
        .img-37 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-81 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-82 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-83 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-84 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-84 {
            text-wrap: initial;
          }
        }
        .div-85 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-85 {
            justify-content: center;
          }
        }
        .img-38 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-39 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-40 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-41 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-42 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-86 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-86 {
            margin-right: -1px;
          }
        }
        .img-43 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-87 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-88 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-89 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-90 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-90 {
            text-wrap: initial;
          }
        }
        .div-91 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-91 {
            justify-content: center;
          }
        }
        .img-44 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-45 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-46 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-47 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-48 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-92 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-92 {
            margin-right: -1px;
          }
        }
        .img-49 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-93 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-94 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-95 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-96 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-96 {
            text-wrap: initial;
          }
        }
        .div-97 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-97 {
            justify-content: center;
          }
        }
        .img-50 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-51 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-52 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-53 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-54 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-98 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-98 {
            margin-right: -1px;
          }
        }
        .div-99 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: start;
          position: relative;
          display: flex;
          aspect-ratio: 1.1043478260869566;
          width: 100%;
          padding: 11px 20px 192px 11px;
        }
        .img-55 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-100 {
          position: relative;
          justify-content: center;
          align-items: flex-start;
          border-radius: 4px;
          background-color: var(--branding-error, #ea4b48);
          align-self: start;
          display: flex;
          margin-bottom: -38px;
          width: 80px;
          max-width: 100%;
          gap: 4px;
          padding: 3px 8px;
        }
        @media (max-width: 991px) {
          .div-100 {
            margin-bottom: 10px;
          }
        }
        .div-101 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: stretch;
        }
        .div-102 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-102 {
            text-wrap: initial;
          }
        }
        .div-103 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-104 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-105 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-106 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100px;
          max-width: 100%;
          gap: 2px;
        }
        .div-107 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .div-108 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          text-decoration-line: strikethrough;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-108 {
            text-wrap: initial;
          }
        }
        .div-109 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-109 {
            justify-content: center;
          }
        }
        .img-56 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-57 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-58 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-59 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-60 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-110 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        .img-61 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-111 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-112 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-113 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-114 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-114 {
            text-wrap: initial;
          }
        }
        .div-115 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-115 {
            justify-content: center;
          }
        }
        .img-62 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-63 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-64 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-65 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-66 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-116 {
          align-self: center;
          margin-top: 66px;
          width: 100%;
          max-width: 1320px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-116 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-117 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-117 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-118 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-118 {
            max-width: 100%;
            margin-top: 24px;
          }
        }
        .div-119 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: stretch;
          position: relative;
          display: flex;
          min-height: 536px;
          flex-grow: 1;
          padding: 37px 20px 294px;
        }
        @media (max-width: 991px) {
          .div-119 {
            max-width: 100%;
          }
        }
        .img-67 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-120 {
          position: relative;
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0.42px;
          text-transform: uppercase;
          align-self: center;
          max-width: 424px;
        }
        .div-121 {
          position: relative;
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 120%;
          align-self: center;
          margin-top: 17px;
          max-width: 424px;
        }
        .div-122 {
          position: relative;
          align-items: flex-start;
          align-self: center;
          display: flex;
          margin-top: 18px;
          width: 290px;
          max-width: 100%;
          gap: 8px;
        }
        @media (max-width: 991px) {
          .div-122 {
            justify-content: center;
          }
        }
        .div-123 {
          align-items: center;
          border-radius: 6px;
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-124 {
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-125 {
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: 0.36px;
          text-transform: uppercase;
          align-self: center;
          margin-top: 4px;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-125 {
            text-wrap: initial;
          }
        }
        .div-126 {
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
        }
        .div-127 {
          align-items: center;
          border-radius: 6px;
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-128 {
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-129 {
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: 0.36px;
          text-transform: uppercase;
          align-self: start;
          margin-top: 4px;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-129 {
            text-wrap: initial;
          }
        }
        .div-130 {
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
        }
        .div-131 {
          align-items: center;
          border-radius: 6px;
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-132 {
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-133 {
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: 0.36px;
          text-transform: uppercase;
          align-self: center;
          margin-top: 4px;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-133 {
            text-wrap: initial;
          }
        }
        .div-134 {
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
        }
        .div-135 {
          align-items: center;
          border-radius: 6px;
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-136 {
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-137 {
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: 0.36px;
          text-transform: uppercase;
          align-self: center;
          margin-top: 4px;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-137 {
            text-wrap: initial;
          }
        }
        .div-138 {
          position: relative;
          justify-content: center;
          align-items: center;
          border-radius: 43px;
          background-color: var(--gray-scale-white, #fff);
          align-self: center;
          display: flex;
          width: 162px;
          max-width: 100%;
          flex-direction: column;
          margin: 24px 0 -59px;
          padding: 14px 20px;
        }
        @media (max-width: 991px) {
          .div-138 {
            margin-bottom: 10px;
          }
        }
        .div-139 {
          align-self: center;
          display: flex;
          width: 98px;
          max-width: 100%;
          align-items: flex-start;
          gap: 12px;
        }
        .div-140 {
          color: var(--branding-success, #00b207);
          text-align: justify;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 120%;
          align-self: stretch;
        }
        .img-68 {
          aspect-ratio: 1.15;
          object-fit: cover;
          object-position: center;
          width: 15px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-141 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-141 {
            max-width: 100%;
            margin-top: 24px;
          }
        }
        .div-142 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: stretch;
          position: relative;
          display: flex;
          min-height: 536px;
          flex-grow: 1;
          padding: 37px 20px 307px;
        }
        @media (max-width: 991px) {
          .div-142 {
            max-width: 100%;
          }
        }
        .img-69 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-143 {
          position: relative;
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0.42px;
          text-transform: uppercase;
          align-self: center;
          max-width: 424px;
        }
        .div-144 {
          position: relative;
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 120%;
          align-self: center;
          margin-top: 20px;
          max-width: 424px;
        }
        .div-145 {
          position: relative;
          align-items: flex-start;
          align-self: center;
          display: flex;
          margin-top: 23px;
          width: 165px;
          max-width: 100%;
          gap: 8px;
        }
        .div-146 {
          color: var(--gray-scale-white, #fff);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
        }
        .div-147 {
          color: var(--branding-warning, #ff8a00);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-147 {
            text-wrap: initial;
          }
        }
        .div-148 {
          position: relative;
          justify-content: center;
          align-items: center;
          border-radius: 43px;
          background-color: var(--gray-scale-white, #fff);
          align-self: center;
          display: flex;
          width: 162px;
          max-width: 100%;
          flex-direction: column;
          margin: 28px 0 -61px;
          padding: 14px 20px;
        }
        @media (max-width: 991px) {
          .div-148 {
            margin-bottom: 10px;
          }
        }
        .div-149 {
          align-self: center;
          display: flex;
          width: 98px;
          max-width: 100%;
          align-items: flex-start;
          gap: 12px;
        }
        .div-150 {
          color: var(--branding-success, #00b207);
          text-align: justify;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 120%;
          align-self: stretch;
        }
        .img-70 {
          aspect-ratio: 1.15;
          object-fit: cover;
          object-position: center;
          width: 15px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-151 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-151 {
            max-width: 100%;
            margin-top: 24px;
          }
        }
        .div-152 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: stretch;
          position: relative;
          display: flex;
          min-height: 536px;
          flex-grow: 1;
          padding: 37px 20px 307px;
        }
        @media (max-width: 991px) {
          .div-152 {
            max-width: 100%;
          }
        }
        .img-71 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-153 {
          position: relative;
          color: var(--gray-scale-gray-900, #1a1a1a);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0.42px;
          text-transform: uppercase;
          align-self: center;
          max-width: 424px;
        }
        .div-154 {
          position: relative;
          color: var(--gray-scale-gray-900, #1a1a1a);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 120%;
          align-self: center;
          margin-top: 17px;
          max-width: 424px;
        }
        .div-155 {
          position: relative;
          align-items: flex-start;
          align-self: center;
          display: flex;
          margin-top: 18px;
          width: 160px;
          max-width: 100%;
          gap: 12px;
        }
        .div-156 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
          align-self: center;
          margin: auto 0;
        }
        .div-157 {
          color: #fcc900;
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
          align-items: flex-start;
          border-radius: 5px;
          background-color: var(--gray-scale-gray-900, #1a1a1a);
          width: 100px;
          max-width: 100%;
          padding: 6px 12px;
        }
        @media (max-width: 991px) {
          .div-157 {
            text-wrap: initial;
          }
        }
        .div-158 {
          position: relative;
          justify-content: center;
          align-items: center;
          border-radius: 43px;
          background-color: var(--gray-scale-white, #fff);
          align-self: center;
          display: flex;
          width: 162px;
          max-width: 100%;
          flex-direction: column;
          margin: 24px 0 -61px;
          padding: 14px 20px;
        }
        @media (max-width: 991px) {
          .div-158 {
            margin-bottom: 10px;
          }
        }
        .div-159 {
          align-self: center;
          display: flex;
          width: 98px;
          max-width: 100%;
          align-items: flex-start;
          gap: 12px;
        }
        .div-160 {
          color: var(--branding-success, #00b207);
          text-align: justify;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 120%;
          align-self: stretch;
        }
        .img-72 {
          aspect-ratio: 1.15;
          object-fit: cover;
          object-position: center;
          width: 15px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-161 {
          align-self: center;
          display: flex;
          margin-top: 64px;
          width: 100%;
          max-width: 1309px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-161 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .img-73 {
          aspect-ratio: 6.67;
          object-fit: cover;
          object-position: center;
          width: 300px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }
        .div-162 {
          justify-content: center;
          align-items: flex-start;
          border-radius: 43px;
          align-self: center;
          display: flex;
          gap: 12px;
          margin: auto 0;
        }
        .div-163 {
          color: var(--branding-success, #00b207);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .img-74 {
          aspect-ratio: 1.25;
          object-fit: cover;
          object-position: center;
          width: 15px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-164 {
          align-self: center;
          display: flex;
          margin-top: 28px;
          width: 100%;
          max-width: 1321px;
          align-items: flex-start;
          gap: 0px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-164 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-165 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-165 {
            margin-right: -1px;
          }
        }
        .div-166 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: start;
          position: relative;
          display: flex;
          aspect-ratio: 1.1043478260869566;
          width: 100%;
          padding: 11px 20px 192px 11px;
        }
        .img-75 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-167 {
          position: relative;
          justify-content: center;
          align-items: flex-start;
          border-radius: 4px;
          background-color: var(--branding-error, #ea4b48);
          align-self: start;
          display: flex;
          margin-bottom: -38px;
          width: 80px;
          max-width: 100%;
          gap: 4px;
          padding: 3px 8px;
        }
        @media (max-width: 991px) {
          .div-167 {
            margin-bottom: 10px;
          }
        }
        .div-168 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: stretch;
        }
        .div-169 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-169 {
            text-wrap: initial;
          }
        }
        .div-170 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-171 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-172 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-173 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 106px;
          max-width: 100%;
          gap: 2px;
        }
        .div-174 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .div-175 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          text-decoration-line: strikethrough;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-175 {
            text-wrap: initial;
          }
        }
        .div-176 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-176 {
            justify-content: center;
          }
        }
        .img-76 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-77 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-78 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-79 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-80 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-177 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        .img-81 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-178 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-179 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-180 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-181 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-181 {
            text-wrap: initial;
          }
        }
        .div-182 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-182 {
            justify-content: center;
          }
        }
        .img-82 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-83 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-84 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-85 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-86 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-183 {
          border: 1px solid var(--branding-success-dark, #2c742f);
          box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 5px 11px;
        }
        .div-184 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: start;
          position: relative;
          display: flex;
          aspect-ratio: 1.1043478260869566;
          width: 100%;
          padding: 11px 11px 133px 20px;
        }
        .img-87 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .img-88 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: end;
          max-width: 100%;
        }
        .img-89 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: end;
          max-width: 100%;
          margin: 6px 0 -27px;
        }
        @media (max-width: 991px) {
          .img-89 {
            margin-bottom: 10px;
          }
        }
        .div-185 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-186 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-187 {
          color: var(--branding-success-dark, #2c742f);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-188 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-188 {
            text-wrap: initial;
          }
        }
        .div-189 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-189 {
            justify-content: center;
          }
        }
        .img-90 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-91 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-92 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-93 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-94 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-190 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-190 {
            margin-right: -1px;
          }
        }
        .img-95 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-191 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-192 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-193 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-194 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-194 {
            text-wrap: initial;
          }
        }
        .div-195 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-195 {
            justify-content: center;
          }
        }
        .img-96 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-97 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-98 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-99 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-100 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-196 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        .img-101 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-197 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-198 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-199 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-200 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-200 {
            text-wrap: initial;
          }
        }
        .div-201 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-201 {
            justify-content: center;
          }
        }
        .img-102 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-103 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-104 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-105 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-106 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-202 {
          align-self: center;
          display: flex;
          margin-top: 50px;
          width: 100%;
          max-width: 1324px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-202 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .img-107 {
          aspect-ratio: 3.66;
          object-fit: cover;
          object-position: center;
          width: 315px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }
        .div-203 {
          justify-content: center;
          align-items: flex-start;
          border-radius: 43px;
          align-self: center;
          display: flex;
          gap: 12px;
          margin: auto 0;
        }
        .div-204 {
          color: var(--branding-success, #00b207);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .img-108 {
          aspect-ratio: 1.25;
          object-fit: cover;
          object-position: center;
          width: 15px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-205 {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1321px;
          align-items: flex-start;
          gap: 0px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-205 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-206 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-206 {
            margin-right: -1px;
          }
        }
        .div-207 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: start;
          position: relative;
          display: flex;
          aspect-ratio: 1.1043478260869566;
          width: 100%;
          padding: 11px 20px 192px 11px;
        }
        .img-109 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-208 {
          position: relative;
          justify-content: center;
          align-items: flex-start;
          border-radius: 4px;
          background-color: var(--branding-error, #ea4b48);
          align-self: start;
          display: flex;
          margin-bottom: -38px;
          width: 80px;
          max-width: 100%;
          gap: 4px;
          padding: 3px 8px;
        }
        @media (max-width: 991px) {
          .div-208 {
            margin-bottom: 10px;
          }
        }
        .div-209 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: stretch;
        }
        .div-210 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-210 {
            text-wrap: initial;
          }
        }
        .div-211 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-212 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-213 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-214 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 106px;
          max-width: 100%;
          gap: 2px;
        }
        .div-215 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
        }
        .div-216 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          text-decoration-line: strikethrough;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-216 {
            text-wrap: initial;
          }
        }
        .div-217 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-217 {
            justify-content: center;
          }
        }
        .img-110 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-111 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-112 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-113 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-114 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-218 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        .img-115 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-219 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-220 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-221 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-222 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-222 {
            text-wrap: initial;
          }
        }
        .div-223 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-223 {
            justify-content: center;
          }
        }
        .img-116 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-117 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-118 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-119 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-120 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-224 {
          border: 1px solid var(--branding-success-dark, #2c742f);
          box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 5px 11px;
        }
        .div-225 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: start;
          position: relative;
          display: flex;
          aspect-ratio: 1.1043478260869566;
          width: 100%;
          padding: 11px 11px 133px 20px;
        }
        .img-121 {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .img-122 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: end;
          max-width: 100%;
        }
        .img-123 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 40px;
          overflow: hidden;
          align-self: end;
          max-width: 100%;
          margin: 6px 0 -27px;
        }
        @media (max-width: 991px) {
          .img-123 {
            margin-bottom: 10px;
          }
        }
        .div-226 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-227 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-228 {
          color: var(--branding-success-dark, #2c742f);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-229 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-229 {
            text-wrap: initial;
          }
        }
        .div-230 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-230 {
            justify-content: center;
          }
        }
        .img-124 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-125 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-126 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-127 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-128 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-231 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        @media (max-width: 991px) {
          .div-231 {
            margin-right: -1px;
          }
        }
        .img-129 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-232 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-233 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-234 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-235 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-235 {
            text-wrap: initial;
          }
        }
        .div-236 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-236 {
            justify-content: center;
          }
        }
        .img-130 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-131 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-132 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-133 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-134 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-237 {
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 5px 6px 12px 5px;
        }
        .img-135 {
          aspect-ratio: 1.1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: start;
        }
        .div-238 {
          justify-content: center;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 18px;
          width: 100%;
          flex-direction: column;
        }
        .div-239 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-240 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-241 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-241 {
            text-wrap: initial;
          }
        }
        .div-242 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 6px;
          width: 60px;
          max-width: 100%;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div-242 {
            justify-content: center;
          }
        }
        .img-136 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-137 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-138 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-139 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-140 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-243 {
          justify-content: center;
          align-items: center;
          background-color: var(--gray-scale-gray-50, #f2f2f2);
          align-self: stretch;
          display: flex;
          flex-direction: column;
          margin: 66px 0 2795px;
          padding: 60px 20px;
        }
        @media (max-width: 991px) {
          .div-243 {
            max-width: 100%;
            margin: 40px 1px 40px 0;
          }
        }
        .div-244 {
          justify-content: space-between;
          align-items: flex-start;
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1320px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-244 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-245 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 120%;
          max-width: 336px;
          align-self: center;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-246 {
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .img-141 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-142 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-247 {
          align-self: center;
          margin-top: 32px;
          width: 100%;
          max-width: 1320px;
        }
        @media (max-width: 991px) {
          .div-247 {
            max-width: 100%;
          }
        }
        .div-248 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-248 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .div-249 {
          align-items: flex-start;
          border-radius: 8px;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.01);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          padding: 24px 20px;
        }
        @media (max-width: 991px) {
          .div-249 {
            max-width: 100%;
            margin-top: 24px;
          }
        }
        .img-143 {
          aspect-ratio: 1.23;
          object-fit: cover;
          object-position: center;
          width: 32px;
          fill: var(--branding-success, #00b207);
          opacity: 0.3;
          overflow: hidden;
          align-self: start;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img-143 {
            margin-left: 4px;
          }
        }
        .div-250 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
          margin-top: 16px;
          width: 376px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .div-250 {
            margin-left: 4px;
          }
        }
        .div-251 {
          justify-content: space-between;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 24px;
          width: 376px;
          max-width: 100%;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-251 {
            margin-left: 4px;
          }
        }
        .div-252 {
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .img-144 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 56px;
          overflow: hidden;
          border-radius: 50%;
          align-self: stretch;
          max-width: 100%;
        }
        .div-253 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-254 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-254 {
            text-wrap: initial;
          }
        }
        .div-255 {
          color: var(--gray-scale-gray-400, #999);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-255 {
            text-wrap: initial;
          }
        }
        .div-256 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          gap: 1px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-256 {
            justify-content: center;
          }
        }
        .img-145 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-146 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-147 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-148 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-149 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-257 {
          align-items: flex-start;
          border-radius: 8px;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.01);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          padding: 24px 20px;
        }
        @media (max-width: 991px) {
          .div-257 {
            max-width: 100%;
            margin-top: 24px;
          }
        }
        .img-150 {
          aspect-ratio: 1.23;
          object-fit: cover;
          object-position: center;
          width: 32px;
          fill: var(--branding-success, #00b207);
          opacity: 0.3;
          overflow: hidden;
          align-self: start;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img-150 {
            margin-left: 4px;
          }
        }
        .div-258 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
          margin-top: 16px;
          width: 376px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .div-258 {
            margin-left: 4px;
          }
        }
        .div-259 {
          justify-content: space-between;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 24px;
          width: 376px;
          max-width: 100%;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-259 {
            margin-left: 4px;
          }
        }
        .div-260 {
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .img-151 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 56px;
          overflow: hidden;
          border-radius: 50%;
          align-self: stretch;
          max-width: 100%;
        }
        .div-261 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-262 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-262 {
            text-wrap: initial;
          }
        }
        .div-263 {
          color: var(--gray-scale-gray-400, #999);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-263 {
            text-wrap: initial;
          }
        }
        .div-264 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          gap: 1px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-264 {
            justify-content: center;
          }
        }
        .img-152 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-153 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-154 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-155 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-156 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-265 {
          align-items: flex-start;
          border-radius: 8px;
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.01);
          background-color: var(--gray-scale-white, #fff);
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          padding: 24px 20px;
        }
        @media (max-width: 991px) {
          .div-265 {
            max-width: 100%;
            margin-top: 24px;
          }
        }
        .img-157 {
          aspect-ratio: 1.23;
          object-fit: cover;
          object-position: center;
          width: 32px;
          fill: var(--branding-success, #00b207);
          opacity: 0.3;
          overflow: hidden;
          align-self: start;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img-157 {
            margin-left: 4px;
          }
        }
        .div-266 {
          color: var(--gray-scale-gray-700, #4d4d4d);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
          margin-top: 16px;
          width: 376px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .div-266 {
            margin-left: 4px;
          }
        }
        .div-267 {
          justify-content: space-between;
          align-items: flex-start;
          align-self: start;
          display: flex;
          margin-top: 24px;
          width: 376px;
          max-width: 100%;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-267 {
            margin-left: 4px;
          }
        }
        .div-268 {
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .img-158 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 56px;
          overflow: hidden;
          border-radius: 50%;
          align-self: stretch;
          max-width: 100%;
        }
        .div-269 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-270 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-270 {
            text-wrap: initial;
          }
        }
        .div-271 {
          color: var(--gray-scale-gray-400, #999);
          text-align: center;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: start;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-271 {
            text-wrap: initial;
          }
        }
        .div-272 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          gap: 1px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-272 {
            justify-content: center;
          }
        }
        .img-159 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-160 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-161 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-162 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .img-163 {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
      `}</style>
    </>
  );
}


export default Home;