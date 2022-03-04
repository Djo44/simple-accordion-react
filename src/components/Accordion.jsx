import React, { useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

const Accordion = ({ id, title, info }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className='mt-12 space-y-8 '>
      <div className='border-2 border-gray-400 rounded-lg dark:border-gray-700 divide-y'>
        <div className='flex items-center justify-between w-full p-8 '>
          <h1 className='font-semibold text-gray-700 dark:text-white'>{title}</h1>
          <div className='divide-y-4' />
          <button onClick={() => setShowText(!showText)} className='transition duration-5500 ease-linear'>
            {showText ? <AiFillMinusSquare className='text-4xl fill-sky-600' /> : <AiFillPlusSquare className='text-4xl fill-sky-600' />}
          </button>
        </div>
        {showText && <p className='p-8 text-sm text-gray-500 dark:text-gray-300 animate-bounce'>{info}</p>}
      </div>
    </div>
  );
};

export default Accordion;
