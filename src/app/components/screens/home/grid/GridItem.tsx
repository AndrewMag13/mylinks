import s from './Grid.module.scss'
import Image from 'next/image'
import { APP_URL } from '@/app/constants'
import Link from 'next/link'
import { ILinks } from '@/app/home/page'

const GridItemPage = ({ item }: { item: ILinks }) => {
	return (
		<Link
			href={item.link}
			rel={'noreferror'}
			target="_blank"
			className={s.item}
		>
			<div
				className={s.gradient}
				style={{
					backgroundImage: `linear-gradient(to right, 
						${item.gradient.from} 0%, 
						${item.gradient.to} 50%, 
						${item.gradient.from} 100%)`
				}}
			>
				<Image
					src={`${APP_URL}/${item.icon.path}`}
					alt=""
					width={item.icon.width}
					height={item.icon.width}
				/>
			</div>
			<div className={s.title}>{item.title}</div>
		</Link>
	)
}

export default GridItemPage
