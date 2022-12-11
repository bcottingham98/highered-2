import { FormWrapper } from '../../../FormWrapper';

type WaitlistMinimalData = {
  painpoint: string;
};

type WaitlistMinimalFormProps = WaitlistMinimalData & {
  updateFields: (fields: Partial<WaitlistMinimalData>) => void;
};

export function WaitlistMinimalForm({
  painpoint,
  updateFields,
}: WaitlistMinimalFormProps) {
  return (
    <FormWrapper title="Ideal Job Info">
      <h3>What is your biggest pain point in the job discovery process?</h3>
      <div className="mt-4 flex flex-col">
        <div className="flex flex-row">
          <input
            id="verify-email"
            type="text"
            name="verify-email"
            value={painpoint}
            className="inline-flex h-[16rem] w-full cursor-pointer items-center justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
            onChange={(e) => updateFields({ painpoint: e.target.value })}
          />
          <button
            type="button"
            // onClick={back}
            className="ml-4 box-border rounded-lg bg-white py-2 px-4 shadow-md"
          >
            Submit
          </button>
        </div>
        <div className="grid grid-cols-1">
          <p>Join waitlist</p>
          <p>abc-123</p>
        </div>
      </div>
      <div className="mt-4">
        <input
          id="verify-email"
          type="text"
          name="verify-email"
          value={painpoint}
          className="inline-flex h-[16rem] w-full cursor-pointer items-center justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
          onChange={(e) => updateFields({ painpoint: e.target.value })}
        />
        <button
          type="button"
          // onClick={back}
          className="ml-4 box-border rounded-lg bg-white py-2 px-4 shadow-md"
        >
          Join
        </button>
      </div>
      {/* <div>
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
                value={painpoint}
                className="peer hidden"
                onChange={(e) => updateFields({ painpoint: e.target.value })}
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
      </div> */}
    </FormWrapper>
  );
}
