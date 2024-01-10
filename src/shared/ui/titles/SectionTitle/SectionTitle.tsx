import { Title } from './../Title/Title.tsx';

type SectionTitleProps = {
  text: string
};

export const SectionTitle = (props: SectionTitleProps) => {
  const { text } = props;

  return (
    <Title uppercase underline fontSize='24' fontFamily='msb' text={text} />
  );
};