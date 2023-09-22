import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

type GsapType = typeof import('gsap')
type SpringType = typeof import('@react-spring/web');

// type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
  // Gesture?: GestureType;
  Spring?: SpringType;
  Gsap?: GsapType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Обе либы зависят друг от друга
const getAsyncAnimationModules = async () => {
  return Promise.all([
    import('@react-spring/web'),
    import('gsap')
    // import('@use-gesture/react'),
  ]);
};

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = useRef<SpringType>();
  const GsapRef = useRef<GsapType>();
  // const GestureRef = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gsap
                                       // , Gesture
                                     ]) => {
      SpringRef.current = Spring;
      GsapRef.current = Gsap;
      // GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      // Gesture: GestureRef.current,
      Spring: SpringRef.current,
      Gsap: GsapRef.current,
      isLoaded
    }),
    [isLoaded]
  );

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
