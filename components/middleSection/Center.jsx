import React from 'react'

function Center({data, AddToCart, refOfEachSection, items}) {
  return (
    <div className=" overflow-scroll">
                {data.categories ? (
                  data.categories.map((cat, i) => {
                    return (
                      <div
                        ref={refOfEachSection[i]}
                        id={`prod-${i}`}
                        className="flex flex-col items-center"
                      >
                        <p className="p-3 py-1 my-1 bg-yellow-100 w-full text-black font-bold text-center">
                          {cat.name_json.english}
                        </p>
                        <p className=" text-sm">
                          {cat.description_json.english}
                        </p>
                        {data.categories[i].products.map((prod, j) => {
                          return (
                            <div
                              key={prod.id}
                              className="flex flex-col items-start border-t-2 my-2 p-2 w-full border-gray-100 hover:shadow-lg transition-all duration-200"
                            >
                              {prod.is_popular && (
                                <p className="mb-2 max-w-[70px] text-white bg-black py-[1px] rounded flex items-center justify-center gap-1">
                                  <span className="icon-star-full text-[8px]"></span>
                                  <span className="text-[12px] font-semibold ">
                                    Popular
                                  </span>
                                </p>
                              )}
                              <div className="flex justify-between items-center w-full">
                                <div className="flex flex-col items-start">
                                  <p className=" font-bold">
                                    {prod.name_json.english}
                                  </p>
                                  <p className=" text-sm">
                                    {prod.description_json.english}
                                  </p>
                                  <p className=" font-bold">${prod.price}</p>
                                </div>
                                <div className="button ml-2 flex flex-col items-center">
                                  <img
                                    src={prod.image}
                                    alt=""
                                    className=" max-w-full"
                                  />
                                  {items.filter((a) => a.id === prod.id) ? (
                                    <button
                                      onClick={(e) => AddToCart(i, j)}
                                      className=" bg-yellow-400 w-20 text-black font-bold p-2 -mt-6 z-10 rounded"
                                    >
                                      ADD +
                                    </button>
                                  ) : (
                                    <button
                                      onClick={(e) => AddToCart(i, j)}
                                      className=" bg-yellow-400 w-20 text-black font-bold p-2 -mt-6 z-10 rounded"
                                    >
                                      Added
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })
                ) : (
                  <p>loading</p>
                )}
              </div>
  )
}

export default Center