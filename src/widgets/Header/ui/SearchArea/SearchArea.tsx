import cn from 'classnames'
import cls from './SearchArea.module.scss'
import { HStack } from '@shared/ui/Stack'
import { SearchLine } from '@features/SearchLine'
import { ReactComponent as CancelSvg } from '@shared/assets/svg/decor/cancel.svg'
import { Dispatch, SetStateAction, useState } from 'react'

type SearchAreaProps = {
  className?: string
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const SearchArea = (props: SearchAreaProps) => {
  const { className = '', isOpen, setIsOpen } = props
  const [searchValue, setSearchValue] = useState<string>('')

  const closeSearchHandler = () => {
    setIsOpen(false)
  }

  const searchHandler = () => {
    if (true) return
    // some actions
    setIsOpen(false)
  }

  return (
    <HStack max justify='center' className={cn(className, cls.SearchArea, { [cls.active]: isOpen })}>
      <HStack className={cn(cls.SearchLineWrapper)} max align='center' gap='24'>
        <SearchLine
          placeholder='Поиск...'
          value={searchValue}
          setValue={setSearchValue}
          searchHandler={searchHandler}
        />
        <CancelSvg onClick={closeSearchHandler} className={cn(cls.CancelSvg)} />
      </HStack>
    </HStack>
  )
}
