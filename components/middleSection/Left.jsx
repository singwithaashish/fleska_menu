import React from "react";

function Left({ currentIndex, data, refOfEachSection }) {
  return (
    <div className="md:flex flex-col items-end overflow-y-scroll p-3 hidden">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="border-[3px] border-black h-full border-r-0"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input type="text" className="w-60 border-black border-[3px]" />
      </div>
      {data.categories ? (
        data.categories.map((cat, i) => {
          return (
            <p
              className={
                "p-3 py-1 my-1 rounded-3xl cursor-pointer" +
                (i === currentIndex ? " bg-stone-800 text-white" : "")
              }
              onClick={() => {
                refOfEachSection[i].current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {cat.name_json.english}
            </p>
          );
        })
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default Left;
