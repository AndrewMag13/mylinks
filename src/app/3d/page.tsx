import { NextPage } from 'next'
import ThreeScenePage from '../components/threescene/ThreeScene'
const tdPagePage: NextPage = () => {
	return (
		<div>
			<div>This is page for testing threejs in browser</div>
			<div><ThreeScenePage/></div>
			<div>Its a magic wow!</div>
		</div>
	)
}

export default tdPagePage
