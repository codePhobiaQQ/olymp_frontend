import { FullPage } from '@/components/hoc'

const MainPageTMP = () => {
	return (
		<FullPage
			sections={[
				{
					component: <>123</>,
					sectionId: 'MainSection',
				},
				{
					component: <>12345</>,
					sectionId: 'NewsSection',
				},
				{
					component: <>12367</>,
					sectionId: 'MineSection',
				},
			]}
		/>
	)
}

export default MainPageTMP
