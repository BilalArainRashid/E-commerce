/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxDragHandleDots2, RxDragHandleDots1 } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions"
import Materials from "../../components/data/materials";
import MainFooter from "../footer/MainFooter";

const FilterBar = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const addProduct = (Item) => {
    setIsLoading(true);
    dispatch(addCart(Item));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
 
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setshowTwo] = useState(false);
  const [showThree, setshowThree] = useState(false);
  const [showFour, setshowFour] = useState(false);
  const [sortOrder, setSortOrder] = useState(false);
  const [numProducts, setNumProducts] = useState(6);
  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);

  const sortedProducts = Materials.sort((a, b) => {
    switch (sortOrder) {
      case "asc":
        return a.name.localeCompare(b.name);
      case "dsc":
        return b.name.localeCompare(a.name);
      case "high":
        return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
      case "low":
        return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
      default:
        return a.id - b.id;
    }
  });
  // const filterProduct = (cat) => {
  //   const updatedList = Materials.filter((item) => item.category === cat);
  //   setFilter(updatedList);
  //   console.log(updatedList);
  // }

  const clickOne = () => {
    setShowOne(true);
    setshowTwo(false);
    setshowThree(false);
    setshowFour(false);
  };

  const clickTwo = () => {
    setShowOne(false);
    setshowTwo(true);
    setshowThree(false);
    setshowFour(false);
  };
  const clickThree = () => {
    setshowThree(true);
    setshowFour(false);
    setshowTwo(false);
    setShowOne(false);
  };
  const clickFour = () => {
    setshowFour(true);
    setshowThree(false);
    setshowTwo(false);
    setShowOne(false);
  };

  return ( 
      <>
    <div className="my-8">
      <div className="flex flex-row justify-between mx-3 my-4">
        <div className="flex flex-row space-x-3">
          <a onClick={() => clickOne()}>
            <BsThreeDots />
          </a>
          <a onClick={() => clickTwo()}>
            <RxDragHandleDots2 />
          </a>
          <a onClick={() => clickThree()}>
            <TbGridDots />
          </a>
          <a onClick={() => clickFour()}>
            <RxDragHandleDots1 />
          </a>
          
        </div>

        <div className=" absolute right-16 text-xs">
          <div className="">
            <form>
              <label className="mx-10">Sort by</label>
              <select
                className="mx-10"
                onChange={(event) => setSortOrder(event.target.value)}
              >
                <option>Featured</option>
                <br />
                <option>Best selling</option>
                <br />
                <option value="asc">Alphabetically, A-Z</option>
                <br />
                <option value="dsc">Alphabetically, Z-A</option>
                <br />
                <option value="low">Price, low to high</option>
                <br />
                <option value="high">Price, high to low</option>
                <br />
                <option>Date, old to new</option>
                <br />
                <option>Date, new to old</option>
              </select>
              <label className="mx-2">Show</label>
              <select
                className=""
                onChange={(event) => setNumProducts(event.target.value)}
              >
                <option>6</option>
                <br />
                <option>8</option>
                <br />
                <option>9</option>
                <br />
                <option>10</option>
                <br />
                <option>12</option>
                <br />
                <option>14</option>
                <br />
                <option>15</option>
                <br />
                <option>16</option>
                <br />
                <option>20</option>
                <br />
                <option>24</option>
              </select>
            </form>
          </div>
        </div>
      </div>
     {showOne ? (
        <div className="flex flex-col flex-wrap">
          {sortedProducts.slice(0, numProducts).map((Item) => (
            <div key={Item.id} className="flex p-4 ">
              <div className="relative border w-72 group h-96">
                  <img
                    className="absolute inset-0 object-cover w-full h-96 group-hover:opacity-100"
                    src={Item.image}
                  />
                  <div className="relative ">
                    <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                      <button
                        className="absolute top-80 w-full py-3 my-5 text-sm font-bold text-white bg-black hover:drop-shadow-xl"
                        onClick={() => addProduct(Item)}
                      >
                        {isLoading ? (
                          <div className="flex justify-center items-center">
                            {/* will be adjust */}
                            {/* <span className="ml-3 pr-3">Adding card</span> */}
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          </div>
                        ) : (
                          "Add to cart"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              <div className="mt-4">
                <h1 className="text-black text-1xl hover:text-red-600">
                  {Item.name}
                </h1>
                <p className="text-black text-1xl"> {Item.price}</p>
                <p className="text-1xl">{Item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null} 
  

      {showTwo ? (
        <div>
          <div className="flex flex-wrap">
            {sortedProducts.slice(0, numProducts).map((Item) => (
              <div key={Item.id} className="w-1/2 p-4">
                <div className="relative group">
                  <img className="" src={Item.image} alt={Item.id} />
                  <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100  group-hover:translate-y-0">
                    <button className="absolute top-0 w-full py-3 -my-10 text-sm font-bold text-white bg-black hover:drop-shadow-xl" onClick={() => addProduct(Item)}>
                      Add to card
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h1 className="text-black text-1xl hover:text-red-600">
                    {Item.name}
                  </h1>
                  <p className="text-black text-1xl"> {Item.price}</p>
                  <p className="text-1xl">{Item.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

       {showThree ? (
        <div>
          <div className="flex flex-wrap">
            {sortedProducts.slice(0, numProducts).map((Item) => (
              <div key={Item.id} className="w-1/3 p-4">
                <div className="relative group">
                  <img className="" src={Item.image} alt={Item.id} />
                  <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100  group-hover:translate-y-0">
                    <button className="absolute top-0 w-full py-3 -my-10 text-sm font-bold text-white bg-black hover:drop-shadow-xl" onClick={() => addProduct(Item)}>
                      Add to card
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h1 className="text-black text-1xl hover:text-red-600">
                    {Item.name}
                  </h1>
                  <p className="text-black text-1xl"> {Item.price}</p>
                  <p className="text-1xl">{Item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {showFour ? (
        <div>
          <div className="flex flex-wrap">
            {sortedProducts.slice(0, numProducts).map((Item) => (
              <div key={Item.id} className="w-1/4 p-4">
                <div className="relative group">
                  <img className="" src={Item.image} alt={Item.id} />
                  <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100  group-hover:translate-y-0">
                    <button className="absolute top-0 w-full py-3 -my-10 text-sm font-bold text-white bg-black hover:drop-shadow-xl" onClick={() => addProduct(Item)}>
                      Add to card
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h1 className="text-black text-1xl hover:text-red-600">
                    {Item.name}
                  </h1>
                  <p className="text-black text-1xl"> {Item.price}</p>
                  <p className="text-1xl">{Item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null} 

       
    </div>
    
    {/* <MainFooter/> */}
      
    
    </>
  );
};

export default FilterBar;
