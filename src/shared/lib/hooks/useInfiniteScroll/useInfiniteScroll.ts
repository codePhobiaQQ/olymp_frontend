import { MutableRefObject, useEffect, useRef } from 'react'

interface useInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef?: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: useInfiniteScrollProps) => {
  const { callback, triggerRef, wrapperRef } = props

  console.log("callback, triggerRef, wrapperRef", callback, triggerRef, wrapperRef)

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const wrapperElement = wrapperRef?.current || null;
    const triggerElement = triggerRef.current;

    if (!callback) return;

    const options = {
      // root: wrapperElement,
      // rootMargin: '300px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }
    }, options);

    observer.current?.observe(triggerElement)

    return () => {
      if (observer.current && triggerElement) {
        observer.current?.unobserve(triggerElement);
      }
    }

  }, [callback, triggerRef, wrapperRef])
}