async function dataFetcher(apiName: string) {
	const res = await fetch(`http://127.0.0.1:4200/${apiName}`, {
		next: { revalidate: 100 }
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return await res.json()
}
export default dataFetcher
