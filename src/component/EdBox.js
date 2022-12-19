import React from 'react'

export default function EdBox({bg, date, field,uni}) {
  return (
    <div className={`col-span-12 md:col-span-6 rounded-xl ${bg} dark:bg-[#111111] dark:border dark:border-[rgb(252,244,255)] dark:text-white py-3 px-6 my-3`}>
        <h6 className='text-sm text-gray-700 dark:text-gray-400 my-2'>{date}</h6>
        <h4 className='text-xl my-2'>{field}</h4>
        <h5 className='text-lg my-2'>{uni}</h5>
    </div>
  )
}
