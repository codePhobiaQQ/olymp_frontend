import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { __API__} from '@shared/vars/vars'
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { USER_LOCALSTORAGE_KEY } from '@shared/vars/localstorage/localstorage'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
      if (token) {
        headers.set('Authorization', token)
      }
      return headers;
    }
  } as FetchBaseQueryArgs),
  endpoints: (builder) => ({}),
})