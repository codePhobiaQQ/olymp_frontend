import cn from 'classnames';
import cls from './OnlineStudy.module.scss';
import { memo } from 'react';
import { OnlineStudyDescription } from '@pages/OnlineStudy/ui/OnlineStudyDescription/OnlineStudyDescription.tsx';
import { OnlineStudyCourses } from '@pages/OnlineStudy/ui/OnlineStudyCourses/OnlineStudyCourses.tsx';
import { CourseCardProps } from '@pages/OnlineStudy/ui/CourseCard/CourseCard.tsx';

interface OnlineStudyProps {
    className?: string;
}

export const OnlineStudy = memo((props: OnlineStudyProps) => {
    const { className } = props;
    
    return (
        <div className={cn(className, cls.OnlineStudy)}>
           <OnlineStudyDescription />
            <OnlineStudyCourses title='технические курсы' courses={techCourses} />
            <OnlineStudyCourses title='гуманитарные курсы курсы' courses={gumCourses} />
        </div>
    );
});

const techCourses: CourseCardProps[] = [
  {
    link: '/',
    description: 'Делимость, сравнимость, решение уравнений в целых числах',
    isCertificateOnFinish: true,
    time: 10,
    title: 'Подготовка к олимпиаде \n по криптографии. Часть 1'
  },{
    link: '/',
    description: 'Делимость, сравнимость, решение уравнений в целых числах',
    isCertificateOnFinish: true,
    time: 10,
    title: 'Подготовка к олимпиаде \n по криптографии. Часть 2'
  },{
    link: '/',
    description: 'Делимость, сравнимость, решение уравнений в целых числах',
    isCertificateOnFinish: true,
    time: 10,
    title: 'Подготовка к олимпиаде \n по криптографии. Часть 3'
  },{
    link: '/',
    description: 'Делимость, сравнимость, решение уравнений в целых числах',
    isCertificateOnFinish: true,
    time: 10,
    title: 'Подготовка к олимпиаде \n по криптографии. Часть 4'
  },
]

const gumCourses: CourseCardProps[] = [
  {
    link: '/',
    description: 'Делимость, сравнимость, решение уравнений в целых числах',
    isCertificateOnFinish: true,
    time: 10,
    bgTheme: 'light',
    title: 'Подготовка к олимпиаде \n по криптографии. Часть 1'
  },{
    link: '/',
    description: 'Делимость, сравнимость, решение уравнений в целых числах',
    isCertificateOnFinish: true,
    time: 10,
    title: 'Подготовка к олимпиаде \n по криптографии. Часть 2',
    bgTheme: 'light',
  },{
    link: '/',
    description: 'Делимость, сравнимость, решение уравнений в целых числах',
    isCertificateOnFinish: true,
    time: 10,
    title: 'Подготовка к олимпиаде \n по криптографии. Часть 3',
    bgTheme: 'light',
  },{
    link: '/',
    description: 'Делимость, сравнимость, решение уравнений в целых числах',
    isCertificateOnFinish: true,
    time: 10,
    title: 'Подготовка к олимпиаде \n по криптографии. Часть 4',
    bgTheme: 'light',
  },
]