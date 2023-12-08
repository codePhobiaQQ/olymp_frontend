import cn from 'classnames'
import cls from './SearchLine.module.scss'
import { HStack } from '@shared/ui/Stack'
import Input, { InputProps } from '@shared/ui/Input/Input'
import { ReactComponent as SearchSvg } from '@shared/assets/svg/search.svg'

interface SearchLineProps extends InputProps {
  className?: string
  value: string
  setValue: (data: string) => void
  searchHandler?: () => void
}

export const SearchLine = (props: SearchLineProps) => {
  const { className, setValue, value, searchHandler, ...otherProps } = props

  return (
    <HStack max align='center' className={cn(className, cls.SearchLine)}>
      <Input
        mayChangeValueInsideModule={false}
        maxSize
        className={cn(cls.InputCls)}
        value={value}
        onChangeCustom={setValue}
        {...otherProps}
      />
      <SearchSvg className={cn(cls.SearchIcon)} onClick={searchHandler} />
    </HStack>
  )
}
