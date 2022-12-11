import type { ReactElement } from 'react';
import { useState } from 'react';
// import { useContext } from 'react';

// import MultiStepFormContext from '@/state/form/multiStepForm/MultiStepFormState';

export function useMultistepForm(steps: ReactElement[]) {
  // const { currentStepIndex, setCurrentStepIndex } =
  //   useContext(MultiStepFormContext);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function skip() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    skip,
    back,
  };
}
