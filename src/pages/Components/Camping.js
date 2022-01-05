import React from "react";

function Camping(props) {
  return (
    <div className="container flex max-w-sm">
      <div>
        <img src={props.picture} className="w-36" />
      </div>
      <div className="absolute ml-40 mt-9 container w-40">
        <h1 className="text-md text-left">{props.description}</h1>
        <button className="float-left bg-slate-300 text-slate-900 px-1.5 py-0.5 rounded-full text-sm font-bold uppercase mt-2">
          {props.places}
        </button>
      </div>
    </div>
  );
}

export default Camping;
