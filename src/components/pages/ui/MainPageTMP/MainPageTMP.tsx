import Header from '@/components/common/Header/Header'
import { FullPage } from '@/components/hoc/FullPage'

const MainPageTMP = () => {
	return (
		<FullPage
			sections={[
				{
					component: (
						<>
							<Header />
							123
						</>
					),
					sectionId: 'MainSection',
					backgroundColor: '#05131C',
				},
				{
					component: <>12345</>,
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

export default MainPageTMP
