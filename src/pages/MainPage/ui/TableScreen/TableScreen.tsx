import cn from 'classnames'
import cls from './TableScreen.module.scss'

type TableScreenProps = {
  className?: string;
};

export const TableScreen = (props: TableScreenProps) => {
  const { className } = props

  return (
    <div className={cn(className, cls.TableScreen)}>
      <div className={cn(cls.Table)}>
        <div className={cn(cls.TableRow, cls.TableRowHeader)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>

          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            Отборочный этап
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            Заключительный этап
          </div>
        </div>
        <div className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </div>
        <div className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </div>
        <div className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </div>
        <div className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </div>
        <div className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </div>
      </div>
    </div>
  )
}