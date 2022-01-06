import React, { useState } from "react";

function FaqText({ data }) {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  return (
    <div className="mb-5">
      <div className="font-medium rounded-sm text-2xl px-2 py-3 flex flex-row-reverse mt-2 cursor-pointer text-slate-900 border-t">
        <div className="flex-auto hover:text-blue-700" onClick={handleClick}>
          {data.title}
        </div>
        <div className="px-2 mt-1">
          <div className={dropdown ? "rotate-180 transition duration-600" : "transition duration-600"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-up w-5 h-5"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </div>
      </div>
      {dropdown && (
        <div className="wow fadeInDown text-justify text-gray-800 mb-5 bg-white">
          {data.description}
        </div>
      )}
    </div>
  );
}

export default FaqText;
