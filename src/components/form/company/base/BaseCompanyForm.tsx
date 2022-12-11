import type { Key } from 'react';
import { useState } from 'react';

import { FormWrapper } from '../../FormWrapper';

// type BaseCompanyData = {
//   sampleTextProp?: string;
// };

// type BaseCompanyFormProps = BaseCompanyData & {
//   sampleTextPropTwo?: string;
// };

const list = [
  { name: 'grid-0', number: 0 },
  { name: 'grid-1', number: 1 },
  { name: 'grid-2', number: 2 },
  { name: 'grid-3', number: 3 },
  { name: 'grid-4', number: 4 },
  { name: 'grid-5', number: 5 },
  { name: 'grid-6', number: 6 },
  { name: 'grid-7', number: 7 },
  { name: 'grid-8', number: 8 },
  { name: 'grid-9', number: 9 },
  { name: 'grid-10', number: 10 },
];

export function BaseCompanyForm() {
  const [boolean, setBoolean] = useState<Boolean>(false);
  function setActive() {
    setBoolean(true);
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
              onChange={() => setActive()}
            />
            <label
              htmlFor="hosting-small"
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
              onChange={() => setActive()}
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
      <h3>
        What is your biggest pain point in the employee discovery process?
      </h3>
      <div>
        <ul className="grid w-full grid-cols-1 gap-6">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="peer hidden"
            />
            <label
              htmlFor="hosting-small"
              className="inline-flex w-full cursor-pointer items-center justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
            >
              <textarea
                id="pain-point"
                name="pain-point"
                value={''}
                className="peer hidden"
              />
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              className="peer hidden"
            />
            <label
              htmlFor="hosting-big"
              className="inline-flex w-full cursor-pointer items-center justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
            >
              <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full border border-black bg-white">
                <div className="aspect-square h-4 w-4 rounded-full peer-checked:bg-black"></div>
              </div>
              <div className="ml-4 block">
                <div className="w-full text-lg font-semibold">
                  No pain points
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <h3>How painful is your response from 0-10?</h3>
      <div>
        <ul className="grid w-full grid-cols-4 gap-6">
          {list.map((data: any, idx: Key | null | undefined) => (
            <li key={idx}>
              <input
                type="radio"
                id={data.name}
                name="hosting"
                value={data.name}
                className="peer hidden"
              />
              <label
                htmlFor={data.name}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500 xl:justify-start"
              >
                {data.number}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </FormWrapper>
  );
}
