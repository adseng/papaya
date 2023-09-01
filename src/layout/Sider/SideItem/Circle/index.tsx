import React, { ReactNode } from 'react'
import style from './style.module.scss'

function Index(props: IProps) {
  return (
    <div className={props.active ? style.wrapper : ''}>
      <div className={props.active ? style.box : ''}>
        {props.children}
      </div>
    </div>
  )
}

interface IProps {
  children: ReactNode
  active?: boolean
}

export default Index