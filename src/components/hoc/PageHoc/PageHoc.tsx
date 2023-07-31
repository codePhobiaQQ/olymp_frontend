import Footer from '@/components/shared/Footer/Footer'
import { Header } from '@/components/shared/Header'
import { HeaderTheme } from '@/components/shared/Header/ui/Header/Header'
import useHeaderTheme from '@/components/shared/Header/ui/Header/hook/useHeaderTheme'

interface PageHocI {
	children?: React.ReactNode
}

const PageHoc = ({ children }: PageHocI) => {
	// const { HeaderTheme } = useHeaderTheme()
	// console.log(HeaderTheme)

	return (
		<>
			<Header theme={HeaderTheme.DARK} />
			{children}
			<Footer />
		</>
	)
}

export default PageHoc
