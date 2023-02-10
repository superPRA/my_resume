import React from 'react'
import PageTitle from '../component/mainPage/PageTitle'
import SecondTitle from '../component/mainPage/SecondTitle'
import { useSelector } from 'react-redux'

export default function WorkPooriya() {
  const lang = useSelector(state=>state.glob.lang)
  return (
    <div className={`bg-white dark:bg-[#111111] px-6 lg:my-10 pt-16 lg:rounded-xl lg:pl-12 ${lang==="en"?"L":"R"}`}>
      <PageTitle title={lang==="en"?"Works":"نمونه کار ها"} withLine={true} />
      <div className='mt-16'>
        <SecondTitle  icon={"fa-solid fa-face-sleeping"} title={lang==="en"?"Comming Soon...":"به زودی"}/>
      </div>
    </div>
  )
}
