import React from 'react'
import style from './style.module.scss'
import Sider from '@/layout/Sider'
import Header from '@/layout/Header'

function Index() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Header></Header>
      </div>
      <div className={style.body}>
        <div className={style.sider}>
          <Sider></Sider>
        </div>
        <div className={style.main}></div>
      </div>
    </div>
  )
}

export default Index