import cn from 'classnames'
import cls from './TableScreen.module.scss'
import {Title} from "@shared/ui/SectionTitle/Title.tsx";
import {HStack, VStack} from "@shared/ui/Stack";

type TableScreenProps = {
  className?: string;
};

export const TableScreen = (props: TableScreenProps) => {
  const { className } = props

  return (
    <VStack gap='40' max align='center' className={cn(className, cls.TableScreen)}>

      <Title variant='h2'>РАСПИСАНИЕ олимпиад</Title>

      <VStack max className={cn(cls.Table)}>
        <HStack max className={cn(cls.TableRow, cls.TableRowHeader)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>

          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            Отборочный этап
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            Заключительный этап
          </div>
        </HStack>
        <HStack max className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </HStack>
        <HStack max className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </HStack>
        <HStack max className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </HStack>
        <HStack max className={cn(cls.TableRow)}>
          <div className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </div>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <div className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </div>
        </HStack>
        <HStack max className={cn(cls.TableRow)}>
          <HStack justify='start' className={cn(cls.TableRowLeft, cls.TableRowSide)}>
            Криптография
          </HStack>
          <div className={cn(cls.TableRowMiddle, cls.TableRowSide)}>
            с 01 по 20 ноября 2022 г.
          </div>
          <HStack justify='end' className={cn(cls.TableRowRight, cls.TableRowSide)}>
            27 ноября 2022 г.
          </HStack>
        </HStack>

      </VStack>
    </VStack>
  )
}