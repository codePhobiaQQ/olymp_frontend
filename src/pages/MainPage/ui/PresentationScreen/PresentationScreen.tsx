import cn from 'classnames';
import cls from './PresentationScreen.module.scss';
import { useSelector } from 'react-redux';
import {
  getPresentationButtonText1,
  getPresentationScreenNumb1,
  getPresentationScreenNumb2,
  getPresentationText1,
  getPresentationText2
} from '@pages/MainPage/model/selectors/mainPageSelectors';
import Button from '@shared/ui/Button/Button';
import { HStack, VStack } from '@shared/ui/Stack';
import { WpTextFormatter } from '@shared/ui/WpTextFormatter/WpTextFormatter.tsx';
import { SectionWrapper } from '@shared/layouts';
import Text from '@shared/ui/Text/Text.tsx';

type PresentationScreenProps = {
  className?: string
}

export const PresentationScreen = (props: PresentationScreenProps) => {
  const { className } = props;
  const numb1 = useSelector(getPresentationScreenNumb1);
  const numb2 = useSelector(getPresentationScreenNumb2);

  const text1 = useSelector(getPresentationText1);
  const text2 = useSelector(getPresentationText2);

  const buttonText1 = useSelector(getPresentationButtonText1);
  // const buttonText2 = useSelector(getPresentationButtonText2)

  return (
    <SectionWrapper size='default' className={cn(className, cls.PresentationScreen)}>
      <HStack gap='40' max justify='between' align='start' className={cn(cls.PresentationWrapper)}>

        <VStack gap='20' align='start' className={cn(cls.PresentationItem, 'WithDecorLineComponent')}>
          <Text className={cn(cls.NumberSide)} text={numb1 ?? '6'} />
          <WpTextFormatter className={cn(cls.Content)} content={text1} />
          <Button className={cn(cls.PresentationBtn)} colorTheme='dark' variant='outline_transparent_arrow'>
            {buttonText1}
          </Button>
        </VStack>

        <VStack gap='20' align='start' className={cn(cls.PresentationItem, 'WithDecorLineComponent')}>
          <Text className={cn(cls.NumberSide)} text={numb2 ?? '19'} />
          <WpTextFormatter className={cn(cls.Content)} content={text2} />
          <Button className={cn(cls.PresentationBtn)} colorTheme='dark' variant='outline_transparent_arrow'>
            {buttonText1}
          </Button>
        </VStack>

        <VStack gap='20' align='start' className={cn(cls.PresentationItem, 'WithDecorLineComponent')}>
          <Text className={cn(cls.NumberSide)} text='>1900' />
          <WpTextFormatter className={cn(cls.Content)} content='школьников принимают участие в олимпиадах каждый год' />
        </VStack>

      </HStack>
    </SectionWrapper>
  );
};
