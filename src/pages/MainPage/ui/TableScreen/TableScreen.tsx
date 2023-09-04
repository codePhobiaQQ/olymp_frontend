import cn from 'classnames'
import cls from './TableScreen.module.scss'

type TableScreenProps = {
  className?: string;
};

export const TableScreen = (props: TableScreenProps) => {
  const { className } = props

  return (
    <div className={cn(className, cls.TableScreen)}>
      table screen
    </div>
  )
}