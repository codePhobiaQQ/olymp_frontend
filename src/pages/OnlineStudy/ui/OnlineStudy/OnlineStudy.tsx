import cn from 'classnames';
import cls from './OnlineStudy.module.scss';
import { memo } from 'react';
import { OnlineStudyDescription } from '@pages/OnlineStudy/ui/OnlineStudyDescription/OnlineStudyDescription.tsx';

interface OnlineStudyProps {
    className?: string;
}

export const OnlineStudy = memo((props: OnlineStudyProps) => {
    const { className } = props;
    
    return (
        <div className={cn(className, cls.OnlineStudy)}>
           <OnlineStudyDescription />
        </div>
    );
});