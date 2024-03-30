import s from './Home.module.scss'
import MetaTitle from '../ui/MetaTitle'
import CirclesPage from '../ui/circles/Circles'
import GridPage from '../components/screens/home/grid/Grid'
import AboutMePage from '../components/screens/home/about-me/AboutMe'

interface IIcon {
	path: string
	width: number
}

interface IGradient {
	from: string
	to: string
}

export interface ILinks {
	_id: string
	icon: IIcon
	gradient: IGradient
	link: string
	title: string
}

export interface IMe {
	site: string
	avatar: string
	description: string
}
export interface ILinksData {
	links: ILinks[]
}

export interface IMeData {
	me: IMe
}

const HomePage = async () => {
	const links = await fetch(`http://127.0.0.1:4200/links`, {
		next: { revalidate: 10 }
	})
	const me = await fetch(`http://127.0.0.1:4200/me`, {
		next: { revalidate: 10 }
	})
	const linksData: ILinksData = await links.json()
	const meData: IMeData = await me.json()
	return (
		<section className={s.section}>
			<MetaTitle title="Nail's links | All good stuff here!" />
			<div className={s.container}>
				<AboutMePage me={meData.me} />
				<GridPage links={linksData.links} />
			</div>
			<CirclesPage />
		</section>
	)
}

export default HomePage
