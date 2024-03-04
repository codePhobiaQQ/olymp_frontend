import cn from 'classnames'
import cls from './ScreenTitle.module.scss'

type Props = {
  text: string
  className?: string
};

export const ScreenTitle = (props: Props) => {
  return (
    <h2 className={cn('text-4xl uppercase m-sb-i pb-1', cls['Title'], props.className)}>
      {props.text}
    </h2>
  )
}