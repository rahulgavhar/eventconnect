import React from "react";

const Card = ({title,info,ele}) => {
  return (
    <div className="card">
    <div className="bcg">
        <div className="flex justify-center">

       {ele}
        </div>
        <div className="space-y-5">
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <p className="text-slate-800 text-center">{info}</p>
        </div>

    </div>
    <div class="blob"></div>
  </div>
  );
};

export default Card;
