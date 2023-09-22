export type tabType =
  'login'
  | 'forgotPassword'
  | 'registration_shared'
  | 'registration_students'
  | 'registration_teachers'
  | 'registration_universities'

export interface AuthDialogSchema {
  isLoading: boolean
  isOpen?: boolean
}