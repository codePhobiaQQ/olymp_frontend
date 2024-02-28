import * as React from 'react'
import { Dialog } from '@shared/ui/Dialog/Dialog'

type Props = {};

export const Auth = (props: Props) => {
  return (
    <Dialog
      buttonComponent={(props) =>
        <button className='flex items-center justify-center h-9 rounded-3xl bg-white pl-8 pr-8 uppercase' {...props}>
          Вход
        </button>
      }
    >
      auth dialog
    </Dialog>
  )
}