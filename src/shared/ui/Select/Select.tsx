import cn from 'classnames'
import cls from './Select.module.scss'
import { Listbox } from '@headlessui/react'
import { useState } from 'react'

interface OptionProps {
  id: number | string
  name: string
  unavailable?: boolean
}

interface SelectProps {
  options?: OptionProps[]
  initOption?: OptionProps
  onChange?: (props: string) => void
}

export const Select = (props: SelectProps) => {
  const { options, initOption, onChange } = props

  let _initOption
  if (initOption) {
    _initOption = initOption
  } else if (options && options?.length !== 0) {
    _initOption = options[0]
  }

  const [selectedPerson, setSelectedPerson] = useState(_initOption)

  const _onChange = (value: OptionProps) => {
    setSelectedPerson(value)
    onChange?.(value.id.toString())
  }

  return (
    <Listbox by="id" value={selectedPerson} onChange={_onChange}>
      <Listbox.Button>{selectedPerson?.name}</Listbox.Button>
      <Listbox.Options as='ul'>
        {options?.map((option) => (
          <Listbox.Option
            as='li'
            key={option.id}
            value={option}
            disabled={option?.unavailable}
          >
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}