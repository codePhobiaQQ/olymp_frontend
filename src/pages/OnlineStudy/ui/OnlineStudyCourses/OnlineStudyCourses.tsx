import cn from 'classnames';
import cls from './OnlineStudyCourses.module.scss';
import { SectionWrapper } from '@shared/layouts/SectionWrapper/SectionWrapper.tsx';
import Title from '@shared/ui/Title/Title.tsx';
import { HStack, VStack } from '@shared/ui/Stack';
import { CourseCard, CourseCardProps } from './../CourseCard/CourseCard.tsx';
import { useCallback } from 'react';

type OnlineStudyTechCoursesProps = {
  className?: string;
  courses: CourseCardProps[]
  title: string
};

export const OnlineStudyCourses = (props: OnlineStudyTechCoursesProps) => {
  const { className = '', title, courses } = props;

  const renderTechCourses = useCallback(() => {
    return courses.map(course => <CourseCard key={course.title} {...course} />)
  }, [])

  return (
    <SectionWrapper size='default' className={cn(className, cls.OnlineStudyTechCourses)}>
      <VStack gap='40' max align='center'>
        <Title fontFamily='lb' text={title} isUnderline={false} fontSize='24' />
        <HStack wrap='wrap' max gap='16'>
          {renderTechCourses()}
        </HStack>
      </VStack>
    </SectionWrapper>
  );
};