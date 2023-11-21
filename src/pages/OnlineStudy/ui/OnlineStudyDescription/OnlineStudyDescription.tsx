import cn from 'classnames';
import cls from './OnlineStudyDescription.module.scss';
import { SectionWrapper } from '@shared/layouts/SectionWrapper/SectionWrapper.tsx';
import Title from '@shared/ui/Title/Title.tsx';

type OnlineStudyDescriptionProps = {
  className?: string;

};

export const OnlineStudyDescription = (props: OnlineStudyDescriptionProps) => {
  const { className = '' } = props;

  return (
    <SectionWrapper className={cn(className, cls.OnlineStudyDescription)}>
      <Title text='онлайн-образование' />
    </SectionWrapper>
  );
};