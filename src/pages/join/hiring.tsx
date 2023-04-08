import BaseWaitlistCompanyForm from '@/components/form/company/waitlist/base/BaseWaitlistCompanyForm';
import { Meta } from '@/layouts/Meta';
import { Waitlist } from '@/templates/waitlist/Waitlist';

const JoinHiring = () => (
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
          <BaseWaitlistCompanyForm sampleTextProp={''} />
        </div>
      </div>
    </section>
    <section className="my-8 mb-16 flex min-h-[80vh] w-full flex-col items-center justify-start">
      <div className="flex min-h-[80vh] w-full items-start justify-center">
        <div className="aspect-[16/9] h-[65vh] min-h-[50vh] overflow-hidden rounded-lg border border-gray-500 ">
          <div className="flex h-full w-full flex-row">
            <div className="h-full w-[30%] animate-filter border-r border-gray-500 ">
              <div className="box-border flex flex-col space-y-2 p-2">
                <div className="flex w-full flex-col space-y-2 ">
                  <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                  <div className="flex w-full flex-col space-y-1">
                    <div className="flex w-full">
                      <span className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500" />
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <span className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500" />
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <span className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500" />
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <div className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500 bg-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          className="animate-check stroke-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col space-y-2 ">
                  <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                  <div className="flex w-full flex-col space-y-1">
                    <div className="flex w-full">
                      <span className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500" />
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <div className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500 bg-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          className="animate-check stroke-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <span className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500" />
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <span className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500" />
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col space-y-2 ">
                  <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                  <div className="flex w-full flex-col space-y-1">
                    <div className="flex w-full">
                      <div className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500 bg-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          className="animate-check stroke-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <span className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500" />
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <span className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500" />
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full">
                      <div className="mr-2 flex h-[1rem] w-[1rem] animate-checkbox items-center justify-center rounded-sm border border-gray-500 bg-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          className="animate-check stroke-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-[70%] animate-database rounded-r-lg ">
              <div className="box-border flex h-[10%] w-full flex-col  p-2">
                <div className="flex h-full w-full justify-end">
                  <div className="box-border flex h-full w-[40%] flex-row items-center justify-between rounded-full border border-gray-500 p-2">
                    <span className="block h-full w-[80%] rounded-full bg-gray-300" />
                    <div className="h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="aspect-square h-full stroke-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row flex-col  p-2">
                <div className="flex h-full w-full items-center justify-start space-x-2 ">
                  <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-transparent" />
                  <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                  <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                  <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                  <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                  <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                </div>
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-800" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-800" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-800" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-800" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-800" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-800" />
              </div>
              <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-gray-500  p-2">
                <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-300" />
                <span className="h-[40%] w-[30%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[20%] rounded-full bg-gray-300" />
                <span className="h-[40%] w-[15%] rounded-full bg-gray-300" />
              </div>
            </div>
            <div className="h-full w-[100%] animate-candidate-profile rounded-r-lg ">
              <div className="box-border flex h-[60%]  p-2">
                <div className="flex h-full w-[70%] flex-col justify-between ">
                  <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                  <div className="flex h-[80%] w-full flex-row">
                    <span className="block aspect-square h-auto w-auto rounded-full border border-gray-500 " />
                    <div className="flex h-full w-[50%] flex-col space-y-1">
                      <span className="block h-[1rem] w-full rounded-full bg-gray-300" />
                      <span className="block h-[1rem] w-full rounded-full bg-gray-300" />
                    </div>
                  </div>
                  <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-300" />
                </div>
                <div className="flex h-full w-[30%] items-center justify-center ">
                  <div className="box-border flex aspect-square w-[50%] rotate-45 items-center justify-center border border-gray-500 bg-transparent p-4">
                    <span className="block aspect-square w-full bg-gray-300" />
                  </div>
                </div>
              </div>
              <div className="box-border flex h-[40%] w-full flex-col  p-2">
                <div className="mt-8 box-border flex w-full border-t border-gray-500 px-2">
                  <div className="z-10 -mt-8 box-border flex h-[2rem] w-[20%] items-center justify-start rounded-t-xl border border-b-0 border-gray-500  p-1">
                    <span className="block h-[1rem] w-[20%] rounded-full bg-gray-300" />
                  </div>
                  <div className="-mt-8 box-border flex h-[2rem] w-[20%] items-center justify-start rounded-t-xl border border-gray-500  p-1">
                    <span className="block h-[1rem] w-[20%] rounded-full bg-gray-300" />
                  </div>
                  <div className="-mt-8 box-border flex  h-[2rem] w-[20%] items-center justify-start rounded-t-xl border border-gray-500  p-1">
                    <span className="block h-[1rem] w-[20%] rounded-full bg-gray-300" />
                  </div>
                </div>
                <div className="box-border flex w-full flex-col space-y-1 py-2">
                  <span className="block h-[1rem] w-full rounded-full bg-gray-300" />
                  <span className="block h-[1rem] w-full rounded-full bg-gray-300" />
                  <span className="block h-[1rem] w-full rounded-full bg-gray-300" />
                  <span className="block h-[1rem] w-full rounded-full bg-gray-300" />
                  <span className="block h-[1rem] w-full rounded-full bg-gray-300" />
                  <span className="block h-[1rem] w-full rounded-full bg-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Waitlist>
);

export default JoinHiring;
