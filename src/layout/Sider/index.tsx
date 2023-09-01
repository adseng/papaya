import React, { useEffect } from 'react'
import style from './style.module.scss'
import svg1 from '@/assert/icon/1.svg'
import logo from '@/assert/icon/logo.svg'
import Home from '@/module/svg/Home'
import SideItem from '@/layout/Sider/SideItem'

let aa = [1,2,3,4,5,6,7,8,9,10,11,12,13]
function Index() {

  useEffect(() => {

  }, [])
  return (
    <div>
      <div className={style.header}>
        <img src={svg1} alt='' />
        <img src={logo} alt='' />
      </div>
      <SideItem active={false} icon={<Home />} text={<div className='text'>Home</div>} />
      {aa.map(it => {
        return <SideItem key={it} active={false} icon={<Home />} text={<div className='text'>Home</div>} />
      })}
    </div>
  )

  function active() {

  }
}

export default Index