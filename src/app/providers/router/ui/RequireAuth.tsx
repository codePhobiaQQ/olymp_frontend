interface RequireAuthI {
	children?: React.ReactNode;
}

export const RequireAuth = (props: RequireAuthI) => {
	const { children } = props

	return children
};