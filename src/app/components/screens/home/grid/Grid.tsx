import { ILinks } from '@/app/home/page'
import s from './Grid.module.scss'
import GridItemPage from './GridItem'

const GridPage = ({ links }: { links: ILinks[] }) => {
	return (
		<div className={s.grid}>
			{links.map((link: any) => (
				<GridItemPage item={link} key={link._id} />
			))}
		</div>
	)
}

export default GridPage
