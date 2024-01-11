import { Title } from './../Title/Title.tsx';
import cn from 'classnames';

type SectionTitleProps = {
  text: string
  className?: string
};

export const SectionTitle = (props: SectionTitleProps) => {
  const { text, className } = props;

  return (
    <Title uppercase underline tag='h2' fontSize='24' fontFamily='msb' text={text} className={cn(className)} />
  );
};