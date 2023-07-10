import { RoutesActionScreenType } from '@/core/routes'

export type DataTypes = RoutesActionScreenType

export function isRoutesActionScreenType(data?: DataTypes): data is RoutesActionScreenType {
	return Boolean(data && Object.values(data)[0] && Object.values(data)[0].path && Object.values(data)[0].id)
}
