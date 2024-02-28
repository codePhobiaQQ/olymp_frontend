import * as React from 'react'
import cls from './LoginDialog.module.scss'
import { Dialog } from '@shared/ui/Dialog/Dialog'
import { Input } from '@shared/ui/Input/Input'
import { Flex } from 'antd'
import cn from 'classnames'

type Props = {};

export const LoginDialog = (props: Props) => {
  const loginHandler = async (data) => {
    console.log(data)
  }

  return (
    <Dialog handleOkProps={{ action: loginHandler, isAsync: true }} className={cn(cls.LoginDialog)}>
      <Flex gap='middle' vertical>
        <Input placeholder='example@yandex.ru' labelProps={{ children: 'E-mail' }} />
        <Input type='password' labelProps={{ children: 'Пароль' }} />
      </Flex>
    </Dialog>
  )
}