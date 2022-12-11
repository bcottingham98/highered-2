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
      <h3>Have you joined our waitlist?</h3>
      <div className="mt-2 flex flex-col">
        <div className="mb-2 grid grid-cols-1">
          <div className="flex items-center justify-start">
            <p>Type your email here for confirmation</p>
          </div>
          {/* <p>abc-123</p> */}
        </div>
        <div className="flex flex-row">
          <input
            id="verify-email"
            type="text"
            name="verify-email"
            value={painpoint}
            className="inline-flex w-full cursor-pointer items-center justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
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
        <div className="mt-2 grid grid-cols-1">
          <div className="flex items-center justify-start">
            <p>Share your referral code with others</p>
          </div>
          <div className="group flex w-[fit-content] flex-row items-center">
            <p className="text-gray-500 group-hover:text-gray-700">abc-123</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 h-4 w-4 text-gray-500 group-hover:text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col">
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-start">
            <p>If not join our wait-list</p>
          </div>
        </div>
        <div className="mt-2 flex flex-row">
          <input
            id="verify-email"
            type="text"
            name="verify-email"
            value={painpoint}
            className="inline-flex w-full cursor-pointer items-center justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-blue-500"
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
