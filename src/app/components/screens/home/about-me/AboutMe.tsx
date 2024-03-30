import s from './AboutMe.module.scss'
import Image from 'next/image'
import { APP_URL } from '@/app/constants'
import EmailButtonPage from './email-button/EmailButton'
import DescriptionButtonPage from './description-button/DescriptionButton'
import { IMe } from '@/app/home/page'

const AboutMePage = ({ me }: { me: IMe }) => {
	
	return (
		<div className={s.me}>
			<div className={s.imgWrapper}>
				<Image
					src={`${APP_URL}/${me.avatar}`}
					alt={`${me.site}`}
					width={400}
					height={400}
					className={s.image}
					quality={100}
				/>
			</div>
			<DescriptionButtonPage description={me.description} />
			<div className={s.heading}>
				<span>Nail Burdasov</span>
				<Image
					className={s.check}
					src={`${APP_URL}/icons/check-black.svg`}
					alt=""
					height={25}
					width={25}
				/>
			</div>
			<EmailButtonPage />
		</div>
	)
}

export default AboutMePage
