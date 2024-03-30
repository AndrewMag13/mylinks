'use client'
import { useOutside } from '@/app/hooks/useOutside'
import s from './Description.module.scss'
import cn from 'classnames'

const DescriptionButtonPage = ({ description }: { description: string }) => {
	const { ref, isShow, setIsShow } = useOutside(false)
	return (
		<div className={s.parent} ref={ref}>
			<button
				onClick={() => setIsShow(!isShow)}
				className={cn({ [s.active]: isShow })}
			>
				<span>About me</span>
			</button>
			{isShow && <article>{description}</article>}
		</div>
	)
}

export default DescriptionButtonPage
