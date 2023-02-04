import { Layout } from "../../components/Layout";

import { InputSolo } from "../../components/Input";
import { ImLocation } from "react-icons/im";
import { Btn, Btns } from "../../components/Button";

import { datacamp } from "../../utils/const/datas";

function Order() {
  return (
    <Layout>
      <h1 id="order-page" className="text-4xl p-5">
        Order
      </h1>
      <div className="flex flex-col lg:flex-row m-5 bg-bgcard rounded-3xl shadow-lg">
        <img
          className="lg:w-1/2 lg:rounded-l-3xl"
          src={datacamp.images[0]}
          alt={datacamp.title}
        />
        <div className="lg:w-1/2 p-5 flex flex-col justify-around">
          <div className="flex justify-between text-xl">
            <h1>{datacamp.title}</h1>
            <h1>$ {datacamp.price} /night</h1>
          </div>
          <p className="flex items-center">
            <ImLocation /> {datacamp.city}
          </p>
          <div className="flex justify-around mt-4">
            <h1>Check-In</h1>
            <h1>Check-Out</h1>
            <h1>Guest</h1>
          </div>
          <form className="flex justify-around">
            <InputSolo className="w-[30%]" id="Check-In" type={"date"} />
            <InputSolo className="w-[30%]" id="Check-Out" type={"date"} />
            <InputSolo className="w-[30%]" id="Guest" type={"number"} />
          </form>
          <h1 className="text-lg mt-4">Add On</h1>
          <div className="flex justify-around ml-10 mb-2">
            <h1>Items</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
          </div>
          <>
            {datacamp.items.map((data, index) => {
              // {console.log(datacamp.items)}
              <form className="flex" key={index}>
                <InputSolo id="" type={"checkbox"} />
                <h1>{`Item 1`}</h1>
                <h1>$ {data.rent_price}</h1>
              </form>;
            })}
          </>
          <div className="flex flex-col gap-2">
            <form className="flex justify-around items-center">
              <input className="w-[13%]" type={"checkbox"} />
              <h1 className="w-1/4">{`Item 1`}</h1>
              <h1 className="w-1/4">$ </h1>
              <InputSolo className="w-1/4" id="number" type="number" />
            </form>
            <form className="flex justify-around items-center">
              <input className="w-[13%]" type={"checkbox"} />
              <h1 className="w-1/4">{`Item 1`}</h1>
              <h1 className="w-1/4">$ </h1>
              <InputSolo className="w-1/4" id="number" type="number" />
            </form>
            <form className="flex justify-around items-center">
              <input className="w-[13%]" type={"checkbox"} />
              <h1 className="w-1/4">{`Item 1`}</h1>
              <h1 className="w-1/4">$ </h1>
              <InputSolo className="w-1/4" id="number" type="number" />
            </form>
            <form className="flex justify-around items-center">
              <input className="w-[13%]" type={"checkbox"} />
              <h1 className="w-1/4">{`Item 1`}</h1>
              <h1 className="w-1/4">$ </h1>
              <InputSolo className="w-1/4" id="number" type="number" />
            </form>
            <form className="flex justify-around items-center">
              <input className="w-[13%]" type={"checkbox"} />
              <h1 className="w-1/4">{`Item 1`}</h1>
              <h1 className="w-1/4">$ </h1>
              <InputSolo className="w-1/4" id="number" type="number" />
            </form>
          </div>
        </div>
      </div>
      <h1 className="text-4xl p-5">Price Details</h1>
      <div className="flex flex-col gap-3 p-5 m-5 bg-bgcard rounded-3xl shadow-lg border-2">
        <h1 className="text-xl">
          Check In : <span className="font-normal">{`2 February 2023`}</span>
        </h1>
        <h1 className="text-xl">
          Check Out : <span className="font-normal">{`5 February 2023`}</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <h1 className="text-lg mb-2">Campsite Cost</h1>
            <p>Night</p>
            <p>Price</p>
            <p>Guest</p>
            <p>Sub Total</p>
          </div>
          <div>
            <h1 className="text-lg mb-2">Items</h1>
            <p>Night</p>
            <p>Price</p>
            <p>Guest</p>
            <p>Sub Total</p>
          </div>
          <div>
            <h1 className="text-lg mb-2">Items</h1>
            <p>Night</p>
            <p>Price</p>
            <p>Guest</p>
            <p>Sub Total</p>
          </div>
          <div>
            <h1 className="text-lg mb-2">Items</h1>
            <p>Night</p>
            <p>Price</p>
            <p>Guest</p>
            <p>Sub Total</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl p-5">Payment Method</h1>
      <fieldset>
        <form
          action=""
          className="flex flex-col gap-5 p-5 m-5 bg-bgcard rounded-3xl shadow-lg border-2"
        >
          <div className="grid grid-cols-3 items-center">
            <img
              src="https://images.tokopedia.net/img/toppay/sprites/bca.png"
              alt=""
            />
            <label>BCA Virtual Account</label>
            <input type="radio" id="bca" value="bca" name="payment" />
          </div>
          <div className="grid grid-cols-3 items-center">
            <img
              src="https://images.tokopedia.net/img/toppay/sprites/bni.png"
              alt=""
            />
            <label>BNI Virtual Account</label>
            <input type="radio" id="bni" value="bni" name="payment" />
          </div>
          <div className="grid grid-cols-3 items-center">
            <img
              src="https://images.tokopedia.net/img/toppay/bank-bri.png"
              alt=""
            />
            <label>BRI Virtual Account</label>
            <input type="radio" id="bri" value="bri" name="payment" />
          </div>
        </form>
      </fieldset>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 p-5 pb-12">
        <div className="flex lg:flex-row lg:items-center lg:w-4/6">
          <h1 className="text-lg lg:text-2xl">Total Price :</h1>
          <p className="text-xl lg:text-2xl lg:ml-4">{`50 juta`}</p>
        </div>
        <Btns className="lg:w-1/6" id="btn-cancel" label="Cancel" />
        <Btn className="lg:w-1/6" id="btn-booknow" label="Book Now" />
      </div>
    </Layout>
  );
}

export default Order;
