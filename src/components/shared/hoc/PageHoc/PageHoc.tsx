import { ReactNode } from 'react';

interface PageHocI {
	children?: ReactNode
}

const PageHoc = ({ children }: PageHocI) => {
	return (
		<>
			{children}
		</>
	)
}

export default PageHoc
