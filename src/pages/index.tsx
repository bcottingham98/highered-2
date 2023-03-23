// import { useRouter } from 'next/router';
import NextImage from 'next/image';

import AnimateOnScroll from '@/components/animations/onScroll/AnimateOnScroll';
import BaseWaitlistCandidateForm from '@/components/form/candidate/waitlist/base/BaseWaitlistCandidateForm';
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
      {/* <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a> */}
      <section className="my-8 mb-16 flex min-h-[60vh] w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600 sm:text-left">
            Modern Web3 Job Discovery
          </h1>
          <p className="my-6">
            <span role="img" aria-label="rocket">
              {/* 🚀 */}
            </span>{' '}
            Join our waitlist
          </p>
        </div>
        <div className="mt-4">
          <BaseWaitlistCandidateForm sampleTextProp={''} />
        </div>
      </section>
      <section className="my-4 mb-8 flex flex-col space-y-8">
        <AnimateOnScroll>
          <div className="my-8 flex w-full flex-row items-center justify-center">
            <div className="relative mr-4 hidden h-10 w-10 items-center justify-center sm:flex">
              <Image
                src={'/assets/vectors/virtual-interview-icon.svg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold">
              Jr to Sr and Peer to Peer Interviews
            </h2>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          {/* reappear */}
          <div className="flex w-full flex-row">
            <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
              <Image
                src={'/assets/images/discuss-salary-in-interview-1.jpg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <h2 className="font-bold">
                Schedule 1 on 1 interviews with the industries top talent
              </h2>
              <p className="text-lg">
                Looking to take your business to the next level? Our 1 on 1
                interview service connects you with the top talent in your
                industry. Whether you&apos;re seeking insights from thought
                leaders or advice from experienced professionals, we&apos;ll
                help you find the right match to meet your unique needs. Our
                process is designed to ensure that you get the most out of your
                interview, with personalized attention and customized questions
                tailored to your goals. Get the inside scoop from the best and
                brightest in your field - schedule your 1 on 1 interview today.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex w-full flex-row">
            <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
              <Image
                src={
                  '/assets/images/UpdateEnglishPronunciation-1116x628-1.webp'
                }
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <h2 className="font-bold">Learn during the interview</h2>
              <p className="text-lg">
                At our company, we believe that interviews are not just for
                hiring, but also for learning. Our interview process is designed
                to give you the opportunity to gain valuable insights and
                knowledge from the industry&apos;s top talent. Our interviewers
                are experts in their fields and have a wealth of experience to
                share with you. With our &quot;learn during the interview&quot;
                approach, you&apos;ll come away with new ideas, strategies, and
                perspectives that can help you grow personally and
                professionally. Whether you&apos;re a seasoned pro or just
                starting out, we&apos;ll help you expand your knowledge and take
                your skills to the next level.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex w-full flex-row">
            <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
              <Image
                src={'/assets/images/content_portrait.jpg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
            <div className="flex w-1/2 flex-col">
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
                improve. Our team consists of seasoned blockchain developers,
                digital artists, and community managers who have the knowledge
                and expertise to recognize talent and potential. By getting
                reviewed and vetted by our team, you&apos;ll receive valuable
                insights and constructive criticism that will help you refine
                your skills and stand out in your field. Whether you&apos;re
                just starting out or looking to take your career to the next
                level, our service is designed to help you succeed. Don&apos;t
                wait any longer - get reviewed and vetted by our team of experts
                today!
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
      <section className="my-8 flex flex-col items-center space-y-8">
        <AnimateOnScroll>
          <div className="my-8 mt-16 flex w-full flex-row items-center justify-center">
            <div className="relative mr-4 hidden h-10 w-10 items-center justify-center sm:flex">
              <Image
                src={'/assets/vectors/virtual-assessment-icon.svg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold">
              Community created skill assessments
            </h2>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex w-full flex-row-reverse">
            <div className="relative ml-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
              <Image
                src={
                  '/assets/images/5-guidelines-for-developing-good-online-assessments-1024x574.jpg'
                }
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <h2 className="font-bold">
                Test yourself against assessments created by Sr web3 employees
                at household name organizations
              </h2>
              <p className="text-lg">
                Ready to test your skills and knowledge against some of the best
                in the business? Our assessment service puts you to the test
                with challenges created by senior web3 employees from household
                name organizations. Whether you&apos;re a developer, designer,
                or marketer, our assessments are designed to challenge you and
                push you to your limits. Our team of experts has years of
                experience in the industry and has crafted assessments that
                accurately reflect the skills and knowledge needed to succeed in
                today&apos;s web3 landscape. By taking our assessments,
                you&apos;ll not only gain valuable feedback on your strengths
                and weaknesses, but also the opportunity to showcase your
                abilities to potential employers. So if you&apos;re looking for
                a way to take your career to the next level, look no further
                than our assessment service. Get started today and see how you
                stack up against the best of the best in web3.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex w-full flex-row-reverse">
            <div className="relative ml-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
              <Image
                src={'/assets/images/www.usnews.jpg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
            <div className="flex w-1/2 flex-col">
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
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex w-full flex-row-reverse">
            <div className="relative ml-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
              <Image
                src={'/assets/images/improve_your_skills.jpg'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <h2 className="font-bold">
                Grow your skills as you test yourself
              </h2>
              <p className="text-lg">
                Ready to take your web3 skills to the next level? Our assessment
                service not only tests your knowledge and abilities but also
                helps you grow your skillset as you test yourself. Our
                assessments are designed to challenge you and push you outside
                your comfort zone, allowing you to identify areas for
                improvement and develop new skills. By taking our assessments,
                you&apos;ll gain valuable insights and feedback from senior web3
                employees from top organizations. Our assessments cover a wide
                range of topics, including development, design, and marketing,
                giving you a well-rounded understanding of the web3 landscape.
                And as you test yourself and improve your scores, you&apos;ll
                gain confidence and a sense of accomplishment that will serve
                you well in your career. So if you&apos;re ready to grow your
                web3 skillset and test yourself against the best, our assessment
                service is the perfect place to start.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
      <section>
        <div className="my-8 mx-24 mt-16 flex flex-col items-center">
          <AnimateOnScroll>
            <h2 className="mb-4 text-2xl font-bold">About Highered</h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="relative ml-4 hidden h-auto w-full items-center justify-center sm:flex">
              <Image
                src={'/assets/images/Candidates-for-Job-Interview.png'}
                alt=""
                layout="fill"
                // height="4480"
                // width="6720"
                className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className="text-lg">
              <span className="font-bold">H</span>
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
      {/* <section className="flex flex-row bg-green-50">
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
