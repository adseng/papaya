import React from 'react'
import Input from '@/layout/Header/Input'
import style from './style.module.scss'

function Index() {
  return (
    <div className={style.container}>
      <div className={style.input}>
        <Input></Input>
      </div>
    </div>
  )
}

export default Index