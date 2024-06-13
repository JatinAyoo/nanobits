import React from 'react';

const Card = ({ src, alt, title, description, link }) => {
  return (
    <div className="md:w-1/2 lg:w-1/4 mb-2 md:mb-4 lg:mb-0 px-3 rounded-md flex-col">
      <div className="card bg-gradient-to-r from-gray-200/10 to-gray-400/10 text-white h-full rounded-md">
        <img src={src} alt={alt} className="hidden md:block w-full h-[220px] object-contain" loading="lazy" />
        <div className="card-body bg-gradient-to-r from-gray-200/10 to-gray-400/10 p-4 flex-1 box-border flex flex-col z-10" style={{ height: "calc(100% - 220px)" }}>
          <h2 className="text-xl font-medium mb-0.5 leading-[30px]">
            <a href={link} className="stretched-link text-white no-underline ">
              {title}
            </a>
          </h2>
          <p className="mb-0 flex-1">{description}</p>
        </div>

        
      </div>
    </div>
  );
};

export default Card;
