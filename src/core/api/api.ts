import axios from 'axios'
import { USER_LOCALSTORAGE_KEY, __API__ } from '../vars/vars'

export const $api = axios.create({
	baseURL: __API__,
	headers: {
		authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
	},
})
