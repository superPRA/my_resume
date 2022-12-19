import React from 'react'
import { useSelector } from 'react-redux'

export default function FunPooriya() {
  const lang = useSelector(state=>state.glob.lang)
  return (
    <div className={`bg-white dark:bg-[#111111] px-6 ${lang==="en"?"L":"R"} lg:my-10 pt-16 lg:rounded-xl lg:pl-12`}>
      <h1 className='dark:text-white text-center text-4xl pb-16'>{lang==="en"?"Comming Soon":"به زودی"}</h1>
    </div>
  )
}
