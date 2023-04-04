// import { useRouter } from 'next/router';
import NextImage from 'next/image';

import AnimateOnScroll from '@/components/animations/onScroll/AnimateOnScroll';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Image = (props: any) => {
  if (props.src) {
    return <NextImage {...props} />;
  }

  // TODO: if the image source is not there, you can set a default source
  // const defaultSrc = "something"
  return <NextImage {...props} src={'/*'} />;
};

const Companies = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Uplift Companies | Find the perfect candidates for your company"
          description="Find the perfect candidates for your company"
        />
      }
    >
      {/* <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a> */}
      <section className="my-8 mb-16 flex min-h-[80vh] w-full flex-col items-start justify-start">
        <div className="flex min-h-[80vh] w-full items-start justify-start">
          <div className="z-10">
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-col">
                <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600 sm:text-left">
                  Modern Web3 Mock
                </h1>
                <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600 sm:text-left">
                  Interviews
                </h1>
              </div>
              <p className="my-6">
                <span role="img" aria-label="rocket">
                  {/* 🚀 */}
                </span>{' '}
                Looking to take your business to the next level? Our 1 on 1
                interview service connects you with the top talent in your
                industry.
              </p>
            </div>
            <div className="mt-4 flex">
              {/* <BaseWaitlistCandidateForm sampleTextProp={''} /> */}
              <button className="ml-0 mt-4 box-border h-12 w-full rounded bg-gradient-to-r from-green-600 to-green-400 px-8 py-2 text-white shadow-md hover:from-green-400 hover:to-green-600 hover:shadow-lg sm:mt-0 sm:w-[fit-content]">
                Get Started
              </button>
              <button className="ml-0 mt-4 box-border h-12 w-full rounded border border-gray-700 bg-gray-300 px-8 py-2 text-gray-700 shadow-inner hover:from-green-400 hover:to-green-600 hover:shadow-lg sm:mt-0 sm:ml-4 sm:w-[fit-content]">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative mr-4 hidden h-full w-1/2 items-center justify-center sm:flex">
            {/* <Image
            src={'/assets/images/UpdateEnglishPronunciation-1116x628-1.webp'}
            alt=""
            layout="fill"
            // height="4480"
            // width="6720"
            className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
          /> */}
            <div className="flex flex-col space-y-4">
              <div className="aspect-[16/9] h-[65vh] min-h-[50vh] overflow-hidden rounded-lg border border-black bg-gray-50">
                <div className="flex h-full w-full flex-row">
                  <div className="h-full w-[30%] animate-filter border-r border-black bg-gray-50">
                    <div className="box-border flex flex-col space-y-2 p-2">
                      <div className="flex w-full flex-col space-y-2 bg-gray-50">
                        <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                        <div className="flex w-full flex-col space-y-1">
                          <div className="flex w-full">
                            <span className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black" />
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <span className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black" />
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <span className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black" />
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <div className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black bg-green-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                className="h-4 w-4 stroke-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </div>
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full flex-col space-y-2 bg-gray-50">
                        <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                        <div className="flex w-full flex-col space-y-1">
                          <div className="flex w-full">
                            <span className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black" />
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <div className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black bg-green-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                className="h-4 w-4 stroke-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </div>
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <span className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black" />
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <span className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black" />
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full flex-col space-y-2 bg-gray-50">
                        <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                        <div className="flex w-full flex-col space-y-1">
                          <div className="flex w-full">
                            <div className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black bg-green-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                className="h-4 w-4 stroke-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </div>
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <span className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black" />
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <span className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black" />
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                          <div className="flex w-full">
                            <div className="mr-2 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm border border-black bg-green-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                className="h-4 w-4 stroke-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </div>
                            <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-[70%] animate-database rounded-r-lg bg-gray-50">
                    <div className="box-border flex h-[10%] w-full flex-col bg-gray-50 p-2">
                      <div className="flex h-full w-full justify-end">
                        <div className="box-border flex h-full w-[40%] flex-row items-center justify-between rounded-full border border-black p-2">
                          <span className="block h-full w-[80%] rounded-full bg-gray-600" />
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
                    <div className="box-border flex h-[10%] w-full animate-database-row flex-col bg-gray-50 p-2">
                      <div className="flex h-full w-full items-center justify-start space-x-2 bg-gray-50">
                        <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-transparent" />
                        <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                        <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                        <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                        <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                        <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      </div>
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-800" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-800" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-800" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-800" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-800" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-800" />
                    </div>
                    <div className="box-border flex h-[10%] w-full animate-database-row items-center justify-start space-x-2 border-t border-black bg-gray-50 p-2">
                      <span className="aspect-square h-full w-auto animate-database-avatar rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[30%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[20%] rounded-full bg-gray-600" />
                      <span className="h-[40%] w-[15%] rounded-full bg-gray-600" />
                    </div>
                  </div>
                  <div className="h-full w-[100%] animate-candidate-profile rounded-r-lg bg-gray-50">
                    <div className="box-border flex h-[60%] bg-gray-50 p-2">
                      <div className="flex h-full w-[70%] flex-col justify-between bg-gray-50">
                        <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                        <div className="flex h-[80%] w-full flex-row">
                          <span className="block aspect-square h-auto w-auto rounded-full border border-black bg-gray-50" />
                          <div className="flex h-full w-[50%] flex-col space-y-1">
                            <span className="block h-[1rem] w-full rounded-full bg-gray-600" />
                            <span className="block h-[1rem] w-full rounded-full bg-gray-600" />
                          </div>
                        </div>
                        <span className="h-[1rem] w-[40%] max-w-[4rem] rounded-full bg-gray-600" />
                      </div>
                      <div className="flex h-full w-[30%] items-center justify-center bg-gray-50">
                        <div className="box-border flex aspect-square w-[50%] rotate-45 items-center justify-center border border-black bg-transparent p-4">
                          <span className="block aspect-square w-full bg-gray-600" />
                        </div>
                      </div>
                    </div>
                    <div className="box-border flex h-[40%] w-full flex-col bg-gray-50 p-2">
                      <div className="mt-8 box-border flex w-full border-t border-black px-2">
                        <div className="z-10 -mt-8 box-border flex h-[2rem] w-[20%] items-center justify-start rounded-t-xl border border-b-0 border-black bg-gray-50 p-1">
                          <span className="block h-[1rem] w-[20%] rounded-full bg-gray-600" />
                        </div>
                        <div className="-mt-8 -ml-2 box-border flex h-[2rem] w-[20%] items-center justify-start rounded-t-xl border border-black bg-gray-50 p-1">
                          <span className="block h-[1rem] w-[20%] rounded-full bg-gray-600" />
                        </div>
                        <div className="-mt-8 -ml-2 box-border flex  h-[2rem] w-[20%] items-center justify-start rounded-t-xl border border-black bg-gray-50 p-1">
                          <span className="block h-[1rem] w-[20%] rounded-full bg-gray-600" />
                        </div>
                      </div>
                      <div className="box-border flex w-full flex-col space-y-1 py-2">
                        <span className="block h-[1rem] w-full rounded-full bg-gray-600" />
                        <span className="block h-[1rem] w-full rounded-full bg-gray-600" />
                        <span className="block h-[1rem] w-full rounded-full bg-gray-600" />
                        <span className="block h-[1rem] w-full rounded-full bg-gray-600" />
                        <span className="block h-[1rem] w-full rounded-full bg-gray-600" />
                        <span className="block h-[1rem] w-full rounded-full bg-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex aspect-square h-8 w-8 animate-bounce items-center justify-center rounded-full bg-gray-50 bg-opacity-[90%] shadow-xl">
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
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="my-4 mb-8 flex flex-col space-y-8">
        <AnimateOnScroll>
          <div className="flex w-full flex-row">
            <div className="relative mr-4 hidden h-auto w-1/3 items-start justify-center sm:flex">
              <Image
                src={'/assets/images/content_portrait.jpg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="flex w-2/3 flex-col">
              <h2 className="font-bold">
                Get reviewed and vetted of your skillset by experienced sr
                blockchain developers, digital artists and community managers
              </h2>
              <p className="text-lg">
                Are you a blockchain developer, digital artist, or community
                manager looking to showcase your skills and get recognized by
                industry experts? Look no further! Our review and vetting
                service connects you with experienced senior professionals who
                will evaluate your skillset and provide feedback to help you
                improve. Our community consists of seasoned blockchain
                developers, digital artists, and community managers who have the
                knowledge and expertise to recognize talent and potential. By
                getting reviewed and vetted by our community, you&apos;ll
                receive valuable insights and constructive criticism that will
                help you refine your skills and stand out in your field. Whether
                you&apos;re just starting out or looking to take your career to
                the next level, our service is designed to help you succeed.
                Don&apos;t wait any longer - get reviewed and vetted by our
                communities experts today!
              </p>
              <div className="mt-4 grid w-full grid-cols-2 gap-4 text-lg">
                <div className="flex flex-row">
                  <div className="box-border pr-4">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p>
                    Are you a blockchain developer, digital artist, or community
                    manager looking to showcase your skills and get recognized
                    by industry experts?
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="box-border pr-4">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p>
                    Are you a blockchain developer, digital artist, or community
                    manager looking to showcase your skills and get recognized
                    by industry experts?
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="box-border pr-4">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p>
                    Are you a blockchain developer, digital artist, or community
                    manager looking to showcase your skills and get recognized
                    by industry experts?
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="box-border pr-4">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p>
                    Are you a blockchain developer, digital artist, or community
                    manager looking to showcase your skills and get recognized
                    by industry experts?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex w-full flex-row-reverse">
            <div className="relative ml-4 hidden h-auto w-1/3 items-start justify-center sm:flex">
              <Image
                src={'/assets/images/www.usnews.jpg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="flex w-2/3 flex-col">
              <h2 className="font-bold">
                Share your scores with potential employeers
              </h2>
              <p className="text-lg">
                Are you looking for a way to stand out from the crowd and
                impress potential employers? Our assessment service not only
                tests your skills and knowledge but also provides you with the
                opportunity to share your scores with potential employers. By
                sharing your scores, you&apos;ll demonstrate your commitment to
                excellence and your willingness to put your skills to the test.
                Our assessments are designed by senior web3 employees from top
                organizations, ensuring that your scores carry weight in the
                industry. By taking our assessments and sharing your scores,
                you&apos;ll position yourself as a top candidate for any web3
                job. Whether you&apos;re just starting out in your career or
                looking to take it to the next level, our assessment service is
                the perfect way to showcase your abilities and get noticed by
                employers. Don&apos;t wait any longer - take our assessments and
                share your scores today.
              </p>
              <div className="mt-4 grid w-full grid-cols-2 gap-4 text-lg">
                <div className="flex flex-row">
                  <div className="box-border pr-4">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p>
                    Are you a blockchain developer, digital artist, or community
                    manager looking to showcase your skills and get recognized
                    by industry experts?
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="box-border pr-4">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p>
                    Are you a blockchain developer, digital artist, or community
                    manager looking to showcase your skills and get recognized
                    by industry experts?
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="box-border pr-4">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p>
                    Are you a blockchain developer, digital artist, or community
                    manager looking to showcase your skills and get recognized
                    by industry experts?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
      <span className="my-16 block w-full border-t border-black" />
      <section>
        <div className="flex flex-col items-center">
          <AnimateOnScroll>
            <h2 className="mb-4 text-3xl font-bold">From the Blog</h2>
          </AnimateOnScroll>
          <div className="flex space-y-2 space-x-0 sm:space-y-0 sm:space-x-4">
            <AnimateOnScroll>
              <div className="relative mb-4 hidden aspect-[16/9] h-auto w-full items-center justify-center sm:flex">
                <Image
                  src={'/assets/images/Web-3-2.jpg'}
                  alt=""
                  layout="fill"
                  // height="4480"
                  // width="6720"
                  className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover shadow-lg"
                />
                <div className="absolute top-0 left-0 box-border flex h-full w-[50%] flex-col rounded-l-xl bg-gray-50 p-4 opacity-90">
                  <h3>Text</h3>
                  <p>Abcdefghig</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative mb-4 hidden aspect-[16/9] h-auto w-full items-center justify-center sm:flex">
                <Image
                  src={'/assets/images/Web-3-2.jpg'}
                  alt=""
                  layout="fill"
                  // height="4480"
                  // width="6720"
                  className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover shadow-lg"
                />
                <div className="absolute top-0 left-0 box-border flex h-full w-[50%] flex-col rounded-l-xl bg-gray-50 p-4 opacity-90">
                  <h3>Text</h3>
                  <p>Abcdefghig</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative mb-4 hidden aspect-[16/9] h-auto w-full items-center justify-center sm:flex">
                <Image
                  src={'/assets/images/Web-3-2.jpg'}
                  alt=""
                  layout="fill"
                  // height="4480"
                  // width="6720"
                  className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover shadow-lg"
                />
                <div className="absolute top-0 left-0 box-border flex h-full w-[50%] flex-col rounded-l-xl bg-gray-50 p-4 opacity-90">
                  <h3>Text</h3>
                  <p>Abcdefghig</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-row bg-green-50">
        <div className="relative hidden w-2/5 items-center justify-center sm:flex">
          <Image
            src={
              '/assets/images/portrait-smiling-hr-manager-having-interview-with-candidate.jpg'
            }
            alt=""
            layout="fill"
            // height="4480"
            // width="6720"
            className="flex items-center justify-center object-cover"
          />
        </div>
        <div className="w-full sm:w-3/5">
          <div className="box-border flex h-[fit-content] flex-col items-start justify-start bg-gray-600 p-4 sm:h-32">
            <h2 className="text-2xl font-bold">Complete a quick survey</h2>
            <p>Help us innovate for a modern candidate discovery platform</p>
          </div>
          <div className="box-border h-[fit-content] p-4">
            <div>
              <BaseMinimalForm sampleTextProp={''} />
            </div>
          </div>
        </div>
      </section> */}
    </Main>
  );
};

export default Companies;
