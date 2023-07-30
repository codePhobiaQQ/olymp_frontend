import { FullPage } from '@/components/hoc'

const MainPageTMP = () => {
	return (
		<FullPage
			sections={[
				{
					component: <>123</>,
					sectionId: 'MainSection',
					backgroundColor: '#000',
				},
				{
					component: <>12345</>,
					sectionId: 'NewsSection',
					backgroundColor: '#fff',
				},
				{
					component: <>12367</>,
					sectionId: 'MineSection',
					backgroundColor: 'red',
				},
			]}
		/>
	)
}

export default MainPageTMP
