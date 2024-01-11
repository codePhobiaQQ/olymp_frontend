import cn from 'classnames';
import cls from './TableScreen.module.scss';
import { HStack, VStack } from '@shared/ui/Stack';
import { SectionWrapper } from '@shared/layouts';
import { SectionTitle } from '@shared/ui/titles';

type TableScreenProps = {
  className?: string;
};

export const TableScreen = (props: TableScreenProps) => {
  const { className } = props;

  return (
    <SectionWrapper colorTheme='dark'>
      <VStack gap='64' max className={cn(className, cls.TableScreen)}>
        <SectionTitle className={cn(cls.Title)} text='расписание олимпиад' />

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
    </SectionWrapper>
  );
};