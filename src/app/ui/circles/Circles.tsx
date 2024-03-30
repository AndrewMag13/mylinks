import { NextPage } from 'next'
import s from './Circles.module.scss'
const CirclesPage: NextPage = () => {
	return (
		<div className={s.circles}>
			<div className={s.fCircle}></div>
			<div className={s.lCircle}></div>
		</div>
	)
}

export default CirclesPage
