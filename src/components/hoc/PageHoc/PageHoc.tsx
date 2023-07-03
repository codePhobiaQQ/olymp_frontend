import Header from '../../common/Header/Header'

interface PageHocI {
	children?: React.ReactNode
}

const PageHoc = ({ children }: PageHocI) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default PageHoc
