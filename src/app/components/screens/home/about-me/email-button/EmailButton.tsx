import { NextPage } from 'next'
import s from './EmailButton.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { APP_URL } from '@/app/constants'
const EmailButtonPage: NextPage = () => {
	return (
		<div className={s.button}>
			<Link
				href="mailto:nnaaiillburdasov@gmail.com"
				target="_blank"
				rel="noreferrer"
				className={s.link}
				title="nnaaiillburdasov@gmail.com"
			>
				<span>
					<Image
						src={`${APP_URL}/icons/email-white.svg`}
						width={20}
						height={20}
						alt=""
						className={s.emailImg}
					/>
				</span>
				<span>EMail</span>
			</Link>
		</div>
	)
}

export default EmailButtonPage
