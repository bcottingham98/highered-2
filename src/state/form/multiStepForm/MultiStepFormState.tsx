import type { ReactNode, SetStateAction } from 'react';
import { createContext, useMemo, useState } from 'react';

interface IMultiStepFormContext {
  currentStepIndex: number;
  setCurrentStepIndex: (data: SetStateAction<number>) => void;
}

interface IMultiStep {
  children: ReactNode;
}

const defaultValue: IMultiStepFormContext = {
  currentStepIndex: 0,
  setCurrentStepIndex: () => undefined,
};

const MultiStepFormContext = createContext<IMultiStepFormContext>(defaultValue);

export const MultiStepFormProvider: React.FC<IMultiStep> = ({ children }) => {
  // currrentStepIndex
  const [currentStepIndex, setCurrentStepIndexAction] = useState(
    defaultValue.currentStepIndex
  );
  const setCurrentStepIndex = (data: SetStateAction<number>) =>
    setCurrentStepIndexAction(data);

  const multiStepFormContext = useMemo(
    () => ({
      currentStepIndex,
      setCurrentStepIndex,
    }),
    []
  );

  return (
    <MultiStepFormContext.Provider value={multiStepFormContext}>
      {children}
    </MultiStepFormContext.Provider>
  );
};

export default MultiStepFormContext;
