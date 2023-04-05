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

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Uplift Jobs | Find the perfect job for you"
          description="Find the perfect job for you"
        />
      }
    >
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
              <p className="my-6 text-gray-900">
                <span role="img" aria-label="rocket">
                  {/* 🚀 */}
                </span>{' '}
                Looking to take your business to the next level? Our one on one
                interview service connects you with the top talent in your
                industry.
              </p>
            </div>
            <div className="mt-4 flex">
              <button className="ml-0 mt-4 box-border h-12 w-full rounded bg-gradient-to-r from-green-600 to-green-400 px-8 py-2 text-white shadow-md hover:from-green-400 hover:to-green-600 hover:shadow-lg sm:mt-0 sm:w-[fit-content]">
                Get Started
              </button>
              <button className="ml-0 mt-4 box-border h-12 w-full rounded border border-gray-700 bg-gray-300 px-8 py-2 text-gray-700 shadow-inner hover:from-green-400 hover:to-green-600 hover:shadow-lg sm:mt-0 sm:ml-4 sm:w-[fit-content]">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative mr-4 hidden h-full w-1/2 items-center justify-center sm:flex">
            <div className="flex flex-col space-y-4">
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
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex aspect-square h-8 w-8 animate-bounce items-center justify-center rounded-full  bg-opacity-[90%] shadow-xl">
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
              <h2 className="font-bold text-gray-800">
                Schedule one on one interviews with the industries top talent
              </h2>
              <p className="text-lg">
                Our interview process is designed to give you the opportunity to
                gain valuable insights and knowledge from the industry&apos;s
                top talent. Our interviewers are experts in their fields and
                have a wealth of experience to share with you.
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
                  <p>Gain valuable feedback on your strengths and weaknesses</p>
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
                  <p>Gain valuable feedback on your strengths and weaknesses</p>
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
                  <p>Gain valuable feedback on your strengths and weaknesses</p>
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
                  <p>Gain valuable feedback on your strengths and weaknesses</p>
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
              <h2 className="font-bold text-gray-800">
                Get reviewed and vetted of your skillset by experienced senior
                blockchain developers, digital artists and community managers
              </h2>
              <p className="text-lg">
                Our community consists of seasoned blockchain developers,
                digital artists, and community managers who have the knowledge
                and expertise to recognize talent and potential. By getting
                reviewed and vetted by our community, you&apos;ll receive
                valuable insights and constructive criticism that will help you
                refine your skills and stand out in your field.
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
                  <p>Gain valuable feedback on your strengths and weaknesses</p>
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
                  <p>Gain valuable feedback on your strengths and weaknesses</p>
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
                  <p>Gain valuable feedback on your strengths and weaknesses</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
      <span className="my-16 block w-full border-t border-gray-500" />
      <section className="mb-16 box-border flex min-h-[80vh] w-full items-start justify-start py-8">
        <div className="z-10">
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-col">
              <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600 sm:text-left">
                Modern Web3 Skill
              </h1>
              <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600 sm:text-left">
                Assessments
              </h1>
            </div>
            <p className="mt-6 text-gray-800">
              <span role="img" aria-label="rocket">
                {/* 🚀 */}
              </span>{' '}
              Test yourself against assessments created by senior web3 employees
              at well known web3 organizations
            </p>
          </div>
          <div className="mt-2 grid w-full grid-cols-1 gap-4 text-lg">
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
              <p className="text-gray-800">
                Whether you&apos;re a developer, designer, or marketer, our
                assessments are designed to challenge you and push you to your
                limits.
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
              <p className="text-gray-800">
                Our community of experts has years of experience in the industry
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
              <p className="text-gray-800">
                assessments that accurately reflect the skills and knowledge
                needed to succeed in today&apos;s web3 landscape
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
              <p className="text-gray-800">
                gain valuable feedback on your strengths and weaknesses
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
              <p className="text-gray-800">
                showcase your abilities to potential employers
              </p>
            </div>
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
            <div className="aspect-[16/9] h-[65vh] min-h-[50vh] overflow-hidden rounded-lg border border-gray-500 ">
              <div className="relative box-border flex h-full w-full flex-col items-center justify-start overflow-hidden py-2">
                <div className="flex h-full w-[50%] animate-assessment-1 flex-col space-y-2 ">
                  <div className="flex w-full flex-col space-y-1 ">
                    <div className="flex w-full flex-row space-x-1">
                      <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                      <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                      <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full flex-row space-x-1">
                      <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                      <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                  </div>
                  <span className="w-full border-t border-gray-500 bg-gray-300" />
                  <div className="flex w-full flex-col space-y-4 ">
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex h-[5rem] w-full rounded-xl border border-gray-500"></div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex h-[5rem] w-full rounded-xl border border-gray-500"></div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex h-[5rem] w-full rounded-xl border border-gray-500"></div>
                    </div>
                    <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="absolute flex h-full w-[50%] animate-assessment-2 flex-col space-y-2 ">
                  <div className="flex w-full flex-col space-y-1 ">
                    <div className="flex w-full flex-row space-x-1">
                      <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                      <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                      <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                    <div className="flex w-full flex-row space-x-1">
                      <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                      <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                    </div>
                  </div>
                  <span className="w-full border-t border-gray-500 bg-gray-300" />
                  <div className="flex w-full flex-col space-y-4 ">
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex h-[5rem] w-full rounded-xl border border-gray-500"></div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500" />
                        <div className="flex h-[1rem] w-[1rem] items-center justify-center rounded-full border border-gray-500">
                          <span className="h-[0.5rem] w-[0.5rem] rounded-full bg-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex h-[5rem] w-full rounded-xl border border-gray-500"></div>
                    </div>
                    <div className="flex w-full flex-col space-y-2 ">
                      <div className="flex w-full flex-row space-x-1">
                        <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[30%] max-w-[4rem] rounded-full bg-gray-300" />
                        <span className="h-[1rem] w-[20%] max-w-[4rem] rounded-full bg-gray-300" />
                      </div>
                      <div className="flex h-[5rem] w-full rounded-xl border border-gray-500"></div>
                    </div>
                    <span className="h-[1rem] w-[10%] max-w-[4rem] rounded-full bg-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center space-y-8">
        <AnimateOnScroll>
          <div className="flex w-full flex-row">
            <div className="relative mr-4 hidden h-auto w-1/3 items-start justify-center sm:flex">
              <Image
                src={
                  '/assets/images/5-guidelines-for-developing-good-online-assessments-1024x574.jpg'
                }
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="flex w-2/3 flex-col">
              <h2 className="font-bold text-gray-800">
                Share your scores with potential employeers
              </h2>
              <p className="text-lg">
                Stand out from the crowd and impress potential employers
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
                    stand out from the crowd and impress potential employers
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
                    demonstrate your commitment to excellence and your
                    willingness to put your skills to the test.
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
                    assessments are designed by senior web3 employees from top
                    organizations, ensuring that your scores carry weight in the
                    industry.
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
                  <p>Position yourself as a top candidate for any web3 job</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
      <span className="my-16 block w-full border-t border-gray-500" />
      <section>
        <div className="mx-24 flex flex-col items-center">
          <AnimateOnScroll>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              About Highered
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll fullWidth>
            <div className="relative mb-4 hidden h-auto w-full items-center justify-center sm:flex">
              <Image
                src={'/assets/images/Web-3-2.jpg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className="mx-4 text-lg sm:mx-16">
              <span className="font-bold">&nbsp;&nbsp;&nbsp;&nbsp;H</span>
              ighered is a unique community-driven website that aims to connect
              recruiters from startups with small teams that have had
              difficulties finding qualified web3 candidates for their
              organizations. The platform also helps candidates looking for jobs
              within the web3 community, who have struggled to find employment
              due to either lack of skills or inadequate ability to express
              themselves fully. The website connects recruiters to a database of
              qualified, vetted candidates, making it easier for them to find
              suitable candidates for their open positions. Additionally,
              Highered helps candidates learn blockchain code and integrate
              themselves into the web3 community through qualifying interviews
              and assessments. This creates a win-win scenario where recruiters
              get access to a pool of talented candidates, and candidates get an
              opportunity to develop their skills and showcase their expertise.
              The platform connects senior web3 developers with junior web3
              developers, as well as those who are looking to enter the web3
              community, for digital informational qualifying interviews. It
              also allows developers to test themselves against other community
              member-created problem sets and assessments. This creates a
              supportive environment where developers can learn from each other
              and develop their skills faster. The ultimate goal of Highered is
              to grow the talent pool within the web3 community and connect
              qualified candidates with startups faster. This would help bridge
              the gap between recruiters and candidates, making it easier for
              startups to find the right talent and for candidates to find the
              right job opportunities. In summary, Highered is a
              community-driven website that helps to connect recruiters with
              talented web3 candidates while also helping candidates develop
              their skills and showcase their expertise. The platform fosters a
              supportive environment that encourages collaboration and skill
              development, ultimately growing the talent pool within the web3
              community and connecting qualified candidates with startups
              faster.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
      <span className="my-16 block w-full border-t border-gray-500" />
      <section>
        <div className="flex flex-col items-center">
          <AnimateOnScroll>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              From the Blog
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 space-y-2 space-x-0 sm:grid-cols-3 sm:space-y-0 sm:space-x-4">
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
                <div className="absolute top-0 left-0 box-border flex h-full w-[50%] flex-col rounded-l-xl  bg-gray-50 p-4 opacity-90">
                  <h3 className="text-2xl font-bold text-gray-800">Text</h3>
                  <p>Abcdefghig</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative mb-4 hidden aspect-[16/9] h-auto w-full items-center justify-center sm:flex">
                <Image
                  src={'/assets/images/improve_your_skills.jpg'}
                  alt=""
                  layout="fill"
                  // height="4480"
                  // width="6720"
                  className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover shadow-lg"
                />
                <div className="absolute top-0 left-0 box-border flex h-full w-[50%] flex-col rounded-l-xl  bg-gray-50 p-4 opacity-90">
                  <h3 className="text-2xl font-bold text-gray-800">Text</h3>
                  <p>Abcdefghig</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative mb-4 hidden aspect-[16/9] h-auto w-full items-center justify-center sm:flex">
                <Image
                  src={
                    '/assets/images/portrait-smiling-hr-manager-having-interview-with-candidate.jpg'
                  }
                  alt=""
                  layout="fill"
                  // height="4480"
                  // width="6720"
                  className="tailwind-img-override relative flex h-auto items-center justify-center overflow-hidden rounded-xl object-cover shadow-lg"
                />
                <div className="absolute top-0 left-0 box-border flex h-full w-[50%] flex-col rounded-l-xl  bg-gray-50 p-4 opacity-90">
                  <h3 className="text-2xl font-bold text-gray-800">Text</h3>
                  <p>Abcdefghig</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-row ">
        <div className="relative hidden w-2/5 items-center justify-center sm:flex">
          <Image
            src={'/assets/images/beautiful-woman-suit-happily-greets-man.jpg'}
            alt=""
            layout="fill"
            // height="4480"
            // width="6720"
            className="flex items-center justify-center object-cover"
          />
        </div>
        <div className="w-full sm:w-3/5">
          <div className="box-border flex h-[fit-content] flex-col items-start justify-start bg-green-100 p-4 sm:h-32">
            <h2 className="text-2xl font-bold">Complete a quick survey</h2>
            <p className="text-xl">
              - Fill out a quick survey to lower your position in the waitlist
            </p>
            <p className="text-xl">
              - Help us innovate for a modern job discovery platform
            </p>
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

export default Index;
