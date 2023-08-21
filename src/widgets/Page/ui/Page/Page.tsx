import cn from 'classnames'
import cls from './Page.module.scss'
import { MutableRefObject, ReactNode, useRef, UIEvent } from 'react'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useLocation } from 'react-router-dom'
import { useThrottle } from '@shared/lib/hooks/useThrottle/useThrottle'
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

type PageProps = {
  className?: string;
  onScrollEnd?: () => void;
  children?: ReactNode
};

export const PAGE_ID = 'PAGE_ID';

export const Page = (props: PageProps) => {
  const { className, onScrollEnd, children } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  // const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
  // }, 500);

  return (
    <div className={cn(className, cls.Page)}>
      <main
        ref={wrapperRef}
        // onScroll={onScroll}
        id={PAGE_ID}
      >
        {children}
        {onScrollEnd ? (
          <div className={cls.trigger} ref={triggerRef} />
        ) : null}
      </main>
    </div>
  )
}