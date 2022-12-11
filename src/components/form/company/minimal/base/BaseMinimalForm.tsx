import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useTimeoutFn } from 'react-use';

import { useMultistepForm } from '@/utils/form/multiStep/useMultistepForm';

// forms
import { CurrentlyLookingMinimalForm } from '../currentlyLooking/CurrentlyLookingMinimalForm';
import { LevelOfPainMinimalForm } from '../levelOfPain/LevelOfPainMinimalForm';
import { PainpointMinimalForm } from '../painpoint/PainpointMinimalForm';
import { WaitlistMinimalForm } from '../waitlist/WaitlistMinimalForm';

type FormData = {
  // basic info
  currentlyLooking: boolean;
  painpoint: string;
  levelOfPain: number;
};

const INITIAL_DATA: FormData = {
  // basic info
  currentlyLooking: false,
  painpoint: '',
  levelOfPain: 0,
};

export interface IBaseMinimalForm {
  sampleTextProp: string;
}

const BaseMinimalForm: React.FC<IBaseMinimalForm> = () => {
  const router = useRouter();
  const [iData, setIData] = useState(INITIAL_DATA);
  const contentType = 'application/json';
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState('w-2/3');
  const [isShowing, setIsShowing] = useState(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  function updateFields(fields: Partial<FormData>) {
    setIData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      // eslint-disable-next-line react/jsx-key
      <CurrentlyLookingMinimalForm
        {...iData}
        updateFields={updateFields}
        // next={next}
      />,
      // eslint-disable-next-line react/jsx-key
      <PainpointMinimalForm
        {...iData}
        updateFields={updateFields}
        // next={next}
      />,
      // eslint-disable-next-line react/jsx-key
      <LevelOfPainMinimalForm
        {...iData}
        updateFields={updateFields}
        // next={next}
      />,
      // eslint-disable-next-line react/jsx-key
      <WaitlistMinimalForm
        {...iData}
        updateFields={updateFields}
        // next={next}
      />,
    ]);

  // ---

  useEffect(() => {
    setIsShowing(false);
    resetIsShowing();
  }, []);

  const postData = async (data: any) => {
    console.log(data);

    try {
      const res = await fetch('/api/company/company-survey', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(data),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      router.push('/');
    } catch (error) {
      setMessage('Failed to add to company survey list');
    }
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      next();
      setIsShowing(false);
      resetIsShowing();
      setWidth(
        JSON.stringify(`w-[${currentStepIndex + 1}/${steps.length}]`).replace(
          '"',
          ''
        )
      );
      console.log(width);
    }
    setWidth(JSON.stringify(`w-[${currentStepIndex + 1}/${steps.length}]`));
    if (isLastStep) {
      postData(iData);
    }
    console.log(message);
    return setIsOpen(!isOpen);
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {/* <Transition appear show={animation} as={Fragment}> */}
      <form
        onSubmit={onSubmit}
        className="box-border grid h-full w-full grid-cols-1"
      >
        {/* <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1} / {steps.length}
        </div> */}
        {currentStepIndex + 1 !== 1 ? (
          <div className="flex w-full justify-end">
            <div className="w-full rounded-full bg-gray-200 ">
              <div
                className={`
                ${currentStepIndex + 1 === 2 ? 'w-2/3' : ''} 
                ${currentStepIndex + 1 === 3 / 3 ? 'w-full' : ''} 
                box-border rounded-full bg-green-200 px-4 py-1 text-xs`}
              >
                {currentStepIndex + 1} / {steps.length}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-end">
            <div className="w-[fit-content] rounded-full bg-gray-200 ">
              <div className="box-border w-[fit-content] rounded-full bg-green-200 px-4 py-1 text-xs">
                1/3
              </div>
            </div>
          </div>
        )}
        <div className="h-[20rem]">
          <Transition
            enter="transform transition ease-in duration-1000"
            enterFrom="transform opacity-0 translate-x-full"
            enterTo="transform opacity-100 translate-x-0"
            // leave="transform transition ease-out duration-1000"
            // leaveFrom="transform opacity-100 -translate-x-0"
            // leaveTo="transform opacity-0 -translate-x-full"
            show={isShowing}
          >
            {step}
          </Transition>
        </div>
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="box-border rounded-lg bg-white py-2 px-4 shadow-md"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="box-border rounded-lg bg-white py-2 px-4 shadow-md"
          >
            {isLastStep ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
      {/* </Transition> */}
    </div>
  );
};

export default BaseMinimalForm;
