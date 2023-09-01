import React from 'react'
import style from './style.module.scss'
import Search from '@/module/svg/Search'

function Index() {
  return (
    <div className={style.container}>
      <div className={style.prefix}>
        <Search />
      </div>
      <input type='text' />
      <div className={style.suffix} ></div>
    </div>
  )
}

export default Index