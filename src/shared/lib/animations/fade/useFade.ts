import { MutableRefObject, ReactNode, useEffect, useRef } from 'react';
import { useAnimationLibs } from '@shared/lib/components/AnimationProvider/AnimationProvider.tsx';

// type variant = 'default'

type FadeProps = {
  isOpen: boolean
  onOpenComplete?: () => void
  onCloseComplete?: () => void
};

// const fadeInVariantClass

interface useFadeInPayload {
  ref: MutableRefObject<ReactNode | null>
}

export const useFade = (props: FadeProps): useFadeInPayload => {
  const { isOpen, onOpenComplete, onCloseComplete } = props;
  const ref = useRef<ReactNode | null>(null)
  const { Gsap, isLoaded } = useAnimationLibs()

  useEffect(() => {
    if (!isLoaded) return;

    console.log(ref)

    // Fade in item
    if (isOpen && ref.current) {
      Gsap.gsap.fromTo(ref, { opacity: 0 }, { opacity: 1, duration: .5, onComplete: onOpenComplete })
    }
    // Fade out item
    else {
      Gsap.gsap.fromTo(ref, { opacity: 0 }, { opacity: 1, duration: .5, onComplete: onCloseComplete }).reverse()
    }
  }, [isOpen, Gsap, isLoaded])

  return {
    ref
  }
};