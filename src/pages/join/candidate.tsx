import BaseWaitlistCandidateForm from '@/components/form/candidate/waitlist/base/BaseWaitlistCandidateForm';
import { Meta } from '@/layouts/Meta';
import { Waitlist } from '@/templates/waitlist/Waitlist';

const JoinCandidate = () => (
  <Waitlist meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <section className="box-border flex w-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600 sm:text-left">
            Modern Web3 Mock
          </h1>
          <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600 sm:text-left">
            Interviews
          </h1>
        </div>
        <p className="my-6 text-gray-900">
          <span role="img" aria-label="rocket">
            {/* 🚀 */}
          </span>{' '}
          Looking to take your business to the next level? Our one on one
          interview service connects you with the top talent in your industry.
        </p>
        <div>
          <BaseWaitlistCandidateForm sampleTextProp={''} />
        </div>
      </div>
    </section>
    <section className="my-8 mb-16 flex min-h-[80vh] w-full flex-col items-center justify-start">
      <div className="flex min-h-[80vh] w-full items-start justify-center">
        <div className="aspect-[16/9] h-[65vh] min-h-[50vh] overflow-hidden rounded-lg border border-gray-500 ">
          <div className="h-[10%] w-full rounded-t-lg border-b border-gray-500 ">
            <div className="box-border flex h-full w-full items-center justify-end space-x-2 pr-2">
              <div className="flex aspect-square h-[80%] items-center justify-center rounded-full border border-green-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="h-6 w-6 stroke-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <div className="flex aspect-square h-[80%] animate-video-toggle items-center justify-center rounded-full border border-gray-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="h-6 w-6 animate-video-toggle"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <div className="flex aspect-square h-[80%] animate-chat-toggle items-center justify-center rounded-full border border-gray-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="h-6 w-6 animate-chat-toggle"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <div className="flex aspect-square h-[80%] animate-ide-toggle items-center justify-center rounded-full border border-gray-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="h-6 w-6 animate-ide-toggle"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex h-[90%] w-full flex-row rounded-b-lg">
            <div className="h-auto w-[0%] animate-filepicker rounded-bl-lg border-r-0 border-gray-500 ">
              <div className="box-border flex h-full w-full flex-col space-y-1 p-2">
                <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                <div className="box-border w-full pl-6">
                  <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                  <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                  <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                </div>
                <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                <div className="box-border w-full pl-6">
                  <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                </div>
                <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
                <span className="h-[1rem] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
              </div>
            </div>
            <div className="flex h-auto w-[0%] animate-editor flex-col rounded-br-lg ">
              <div className="mt-[-2rem] ml-[-1px] flex h-[2rem] w-[20%] animate-editor-tab items-center justify-start rounded-t-lg border border-b-0 border-gray-500 ">
                <span className="mx-2 h-[60%] w-[70%] max-w-[4rem] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[65%] w-full animate-editor-contents flex-col space-y-1 py-2">
                <div className=" box-border flex w-full flex-row space-x-1 pl-2">
                  <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                  <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                  <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                </div>
                <div className="box-border flex w-full flex-row space-x-1 pl-6">
                  <span className="box-border h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                  <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                  <span className="h-[1rem] w-[35%] max-w-[4rem] rounded-full bg-gray-300" />
                </div>
              </div>
              <div className="h-[35%] w-full animate-terminal border-t border-gray-500 "></div>
            </div>
            <div className="h-auto w-[100%] animate-video rounded-b-lg "></div>
            <div className="h-auto w-[0%] animate-chat rounded-br-lg border-l-0 border-gray-500 ">
              <div className="box-border flex h-full w-full flex-col py-2">
                <div className="box-border flex h-[90%] w-full flex-col justify-end space-y-1 p-2">
                  <div className="flex w-full justify-end">
                    <span className="box-border h-[1rem] w-[60%] rounded-xl bg-gray-300" />
                  </div>
                  <div className="flex w-full justify-start">
                    <span className="box-border h-[1rem] w-[40%] rounded-full bg-gray-300" />
                  </div>
                </div>
                <div className="box-border flex h-[10%] w-full flex-row px-2">
                  <div className="h-[1.4rem] w-[100%] rounded-full border border-gray-500 bg-transparent">
                    <span className="box-border h-[1rem] w-[40%] rounded-full " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Waitlist>
);

export default JoinCandidate;
