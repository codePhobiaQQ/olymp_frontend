import cn from 'classnames';
import cls from './Rules.module.scss';
import Text from '@shared/ui/Text/Text.tsx';

type RulesProps = {
  introText?: string
};

export const Rules = (props: RulesProps) => {
  const { introText = 'Зарегистрировавшись, вы соглашаетесь' } = props;

  return (
    <Text align='center'>
      {introText}
      с <Text className={cn(cls.OfferSpan)} isParagraph={false}>Пользовательским соглашением</Text> и <Text
      className={cn(cls.OfferSpan)} isParagraph={false}>Правилами портала</Text>
    </Text>
  );
};