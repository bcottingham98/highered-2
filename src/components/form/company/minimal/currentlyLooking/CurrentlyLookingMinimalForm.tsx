import { useContext, useState } from 'react';

import MultiStepFormContext from '@/state/form/multiStepForm/MultiStepFormState';

import { FormWrapper } from '../../../FormWrapper';

type CurrentlyLookingMinimalData = {
  currentlyLooking: boolean;
};

type CurrentlyLookingMinimalFormProps = CurrentlyLookingMinimalData & {
  updateFields: (fields: Partial<CurrentlyLookingMinimalData>) => void;
};

export function CurrentlyLookingMinimalForm({
  // currentlyLooking,
  updateFields,
}: CurrentlyLookingMinimalFormProps) {
  const [boolean, setBoolean] = useState<Boolean>(false);
  const { setCurrentStepIndex } = useContext(MultiStepFormContext);

  function next() {
    setCurrentStepIndex(() => {
      return 3;
    });
  }

  function setActive(data: boolean) {
    setBoolean(data);
    updateFields({ currentlyLooking: data });
    next();
  }
  return (
    <FormWrapper title="Ideal Job Info">
      <h3>Are you currently looking for a employees?</h3>
      <div>
        <ul className="grid w-full grid-cols-1 gap-6">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="peer hidden"
              onChange={() => setActive(true)}
            />
            <label
              htmlFor="hosting-small"
              className="inline-flex w-full cursor-pointer items-center justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
            >
              <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full border border-black bg-white">
                <div
                  className={`${
                    boolean === true ? 'bg-black' : ''
                  } aspect-square h-4 w-4 rounded-full`}
                ></div>
              </div>
              <div className="ml-4 block">
                <div className="w-full text-lg font-semibold">Yes</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              className="peer hidden"
              onChange={() => setActive(false)}
            />
            <label
              htmlFor="hosting-big"
              className="inline-flex w-full cursor-pointer items-center justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
            >
              <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full border border-black bg-white">
                <div
                  className={`${
                    boolean !== true ? 'bg-black' : ''
                  } aspect-square h-4 w-4 rounded-full`}
                ></div>
              </div>
              <div className="ml-4 block">
                <div className="w-full text-lg font-semibold">No</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </FormWrapper>
  );
}
