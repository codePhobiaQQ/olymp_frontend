import cn from 'classnames'
import cls from './Select.module.scss'
import { Listbox } from '@headlessui/react'
import { useState } from 'react'

interface OptionProps<T = string | number> {
  id: T
  name: string
  unavailable?: boolean
}

interface SelectProps<T = string> {
  options?: OptionProps<T>[]
  initOption?: OptionProps<T>
  onChange?: (props: T) => void
}

export const Select = <T = string,>(props: SelectProps<T>) => {
  const { options, initOption, onChange } = props

  let _initOption
  if (initOption) {
    _initOption = initOption
  } else if (options && options?.length !== 0) {
    _initOption = options[0]
  }

  const [selectedPerson, setSelectedPerson] = useState(_initOption)

  const _onChange = (value: OptionProps<T>) => {
    setSelectedPerson(value)
    onChange?.(value.id)
  }

  return (
    <Listbox by="id" value={selectedPerson} onChange={_onChange}>
      <Listbox.Button className={cn(cls.SelectBtn)}>{selectedPerson?.name}</Listbox.Button>
      <Listbox.Options as="ul" className={cn(cls.SelectOptions)}>
        {options?.map((option, index) => (
          <Listbox.Option
            className={cn(cls.SelectOptionsItem)}
            as="li"
            key={option?.id?.toString() || index}
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
