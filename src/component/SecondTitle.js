import React from 'react'

export default function SecondTitle({icon, title}) {
  console.log(icon)
  return (
    <div className="mt-8 flex justify-start items-center w-full mb-12">
        <i className={`${icon} text-[#fe4060] text-3xl`}></i>
        <h2 className="dark:text-white text-3xl mx-4">{title}</h2>
      </div>
  )
}
