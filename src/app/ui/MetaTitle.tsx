import Head from 'next/head'

const MetaTitle = ({ title }: { title: string }) => {
	return (
		<Head>
			<title>{title}</title>
		</Head>
	)
}

export default MetaTitle
