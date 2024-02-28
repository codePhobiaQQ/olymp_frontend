import * as React from 'react'
import cls from './Dialog.module.scss'
import { Button, Modal, ModalProps } from 'antd'
import { ReactNode, useState } from 'react'
import cn from 'classnames'

interface DialogProps extends ModalProps {
  children?: ReactNode
  handleOkProps?: {
    action: (...data: any) => any
    isAsync?: boolean
  }
}

export const Dialog = (props: DialogProps) => {
  const { children, className, handleOkProps, ...otherProps } = props


  const [open, setOpen] = useState<boolean>(false)
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false)

  const [modalText, setModalText] = useState('Content of the modal')

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = async (data) => {
    if (!handleOkProps) return

    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)

    if (handleOkProps?.isAsync) {
      await handleOkProps.action?.(data)
        ?.then(res => {
          console.log(res)
        })
        ?.finally(() => {
          setOpen(false)
          setConfirmLoading(false)
        })
    }
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal with async logic
      </Button>

      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className={cn(className, cls.Dialog)}
        {...otherProps}
      >
        {children}
      </Modal>
    </>
  )
}
