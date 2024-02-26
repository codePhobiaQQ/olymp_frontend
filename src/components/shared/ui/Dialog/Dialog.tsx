import * as React from 'react'
import { Button, Modal, ModalProps } from 'antd'
import { ReactNode, useState } from 'react'

interface DialogProps extends ModalProps {
  children?: ReactNode
}

export const Dialog = (props: DialogProps) => {
  const { children, ...otherProps } = props

  const [open, setOpen] = useState<boolean>(false)
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false)
  const [modalText, setModalText] = useState('Content of the modal')

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        {...otherProps}
      >
        {children}
      </Modal>
    </>
  )
}
