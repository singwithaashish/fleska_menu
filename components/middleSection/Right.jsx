import React from "react";
import { useSelector } from "react-redux";

function Right({ items, AddToCart }) {
  const jsonItems = useSelector((state) => state.counter.allItemsJson);
  return (
    <div className=" md:flex flex-col p-2 hidden overflow-scroll">
      <p className=" font-bold w-full border-b-2 border-black text-center my-5 text-3xl">
        Your Cart
      </p>
      {items.length <= 0 ? (
        <div className="empty-cart">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_960_720.jpg"
            alt=""
            className="w-full"
          />
          <p>Please Select atleast one product to place an order</p>
        </div>
      ) : (
        <div className="cart flex flex-col">
          {items.map((item, i) => {
            return (
              <div className="flex w-full my-1">
                <p className=" w-3/5">{item.name_json.english}</p>

                <div className="flex justify-between">
                  <button
                    className="bg-black w-6 h-6 text-white"
                    onClick={(e) => {
                      AddToCart(i, j);
                    }}
                  >
                    +
                  </button>
                  <p className="mx-5">{i}</p>
                  <button
                    className="bg-black w-6 h-6 text-white"
                    onClick={(e) => {
                      AddToCart(i, j);
                    }}
                  >
                    -
                  </button>
                </div>
                <p className=" w-1/5 text-end">{item.price}€</p>
              </div>
            );
          })}

          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>{items.reduce((a, b) => a + parseFloat(b.price), 0)}€</p>
          </div>
          <button className=" bg-gray-800 text-white w-full h-14 font-bold rounded-md">
            Checkout
          </button>
        </div>
      )}
      <div className="payment flex justify-evenly">
        <svg
          width="24"
          height="24"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M424.81,148.79c-.43,2.76-.93,5.58-1.49,8.48-19.17,98-84.76,131.8-168.54,131.8H212.13a20.67,20.67,0,0,0-20.47,17.46L169.82,444.37l-6.18,39.07a10.86,10.86,0,0,0,9.07,12.42,10.72,10.72,0,0,0,1.7.13h75.65a18.18,18.18,0,0,0,18-15.27l.74-3.83,14.24-90,.91-4.94a18.16,18.16,0,0,1,18-15.3h11.31c73.3,0,130.67-29.62,147.44-115.32,7-35.8,3.38-65.69-15.16-86.72A72.27,72.27,0,0,0,424.81,148.79Z" />
          <path d="M385.52,51.09C363.84,26.52,324.71,16,274.63,16H129.25a20.75,20.75,0,0,0-20.54,17.48l-60.55,382a12.43,12.43,0,0,0,10.39,14.22,12.58,12.58,0,0,0,1.94.15h89.76l22.54-142.29-.7,4.46a20.67,20.67,0,0,1,20.47-17.46h42.65c83.77,0,149.36-33.86,168.54-131.8.57-2.9,1.05-5.72,1.49-8.48h0C410.94,98.06,405.19,73.41,385.52,51.09Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-mastercard"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
          <circle cx="14" cy="12" r="3" />{" "}
          <path d="M12 9.765a3 3 0 1 0 0 4.47" />{" "}
          <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
        </svg>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {" "}
          <g>
            {" "}
            <path fill="none" d="M0 0h24v24H0z" />{" "}
            <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z" />{" "}
          </g>{" "}
        </svg>
      </div>
    </div>
  );
}

export default Right;
