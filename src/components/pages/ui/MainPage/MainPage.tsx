import Header from '@/components/common/Header/Header'
import { FullPage } from '@/components/hoc/FullPage'
import { MainScreen } from '@/components/screens/MainScreen'
import AboutScreen from '@/components/screens/AboutScreen/ui/AboutScreen'

const MainPage = () => {
	return (
		<FullPage
			sections={[
				{
					component: (
						<>
							<Header />
							<MainScreen />
						</>
					),
					sectionId: 'MainSection',
					backgroundColor: '#05131C',
				},
				{
					component: <AboutScreen />,
					sectionId: 'NewsSection',
					backgroundColor: '#fff',
				},
				{
					component: <>12367</>,
					sectionId: 'MineSection',
					backgroundColor: '#fff',
				},
			]}
		/>
	)
}

export default MainPage
