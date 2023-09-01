import { ReactNode } from 'react'
import style from './style.module.scss'
import Circle from '@/layout/Sider/SideItem/Circle'
import Line from '@/layout/Sider/SideItem/Line'

const base = style.menuItem
const ac = style.active

function Index(props: IProps) {

  return <>
    <div className={props.active ? base + ' ' + ac : base}>
      <Circle active={props.active}>{props.icon}</Circle>
      {props.text}
    </div>
    <Line />
  </>
}

interface IProps {
  active?: boolean
  icon: ReactNode
  text: ReactNode
}

export default Index