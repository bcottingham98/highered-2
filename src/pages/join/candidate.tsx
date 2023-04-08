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
              <div className="flex aspect-square h-[80%] items-center justify-center rounded-full border border-gray-500 ">
                v
              </div>
              <div className="flex aspect-square h-[80%] items-center justify-center rounded-full border border-gray-500 ">
                v
              </div>
              <div className="flex aspect-square h-[80%] items-center justify-center rounded-full border border-gray-500 ">
                v
              </div>
              <div className="flex aspect-square h-[80%] items-center justify-center rounded-full border border-gray-500 ">
                v
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
