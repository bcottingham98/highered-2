// import { useRouter } from 'next/router';
import NextImage from 'next/image';

import BaseWaitlistCompanyForm from '@/components/form/company/waitlist/base/BaseWaitlistCompanyForm';
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
      <section className="my-8 mb-16 flex min-h-[60vh] w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-center text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600 sm:text-left">
            Tap into the Web3 Community
          </h1>
          <p className="my-6 text-center sm:text-left">
            <span role="img" aria-label="rocket">
              {/* 🚀 */}
            </span>{' '}
            Join our waitlist
          </p>
        </div>
        <div className="mt-4">
          <BaseWaitlistCompanyForm sampleTextProp={''} />
        </div>
      </section>
      <section className="my-4 flex flex-col space-y-8">
        <div className="flex w-full flex-row">
          <div className="relative mr-4 hidden h-10 w-10 items-center justify-center sm:flex">
            <Image
              src={'/assets/images/hiring-concept.webp'}
              alt=""
              layout="fill"
              // height="4480"
              // width="6720"
              className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <h2 className="font-bold">
              Get access to qualified candidates who have been community vetted
            </h2>
            <p className="text-lg">
              Our vetting service takes the guesswork out of hiring by providing
              you with access to a pool of qualified candidates who have been
              vetted by the community. Our vetting process is rigorous and
              thorough, ensuring that only the best and most qualified
              candidates make it through. Our community of web3 experts provides
              valuable feedback on candidates, giving you a well-rounded view of
              their skills and potential. With our vetting service, you can save
              time and resources while still finding top talent for your
              organization. So if you&apos;re looking for a more efficient and
              effective way to hire web3 candidates, look no further than our
              vetting service. Get started today and find your next superstar
              hire!
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row-reverse">
          <div className="relative ml-4 hidden h-10 w-10 items-center justify-center sm:flex">
            <Image
              src={'/assets/images/resume_190411-800x450.jpg'}
              alt=""
              layout="fill"
              // height="4480"
              // width="6720"
              className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <h2 className="font-bold">
              View assessment scores to grasp a candidates capabilities on a
              high level
            </h2>
            <p className="text-lg">
              Are you tired of spending hours poring over resumes and conducting
              interviews, only to find that you still don&apos;t have a clear
              understanding of a candidate&apos;s capabilities? Our assessment
              and interview recap service can help. With our comprehensive
              assessments and detailed interview recaps, you can quickly get a
              high-level understanding of a candidate&apos;s skills and
              potential, allowing you to make more informed decisions about who
              to move forward with. Our assessments are designed by senior web3
              employees from top organizations, ensuring that they accurately
              reflect the skills and knowledge needed to succeed in today&apos;s
              web3 landscape. And our interview recaps provide valuable insights
              into a candidate&apos;s communication skills, work style, and
              overall fit for your organization. With our assessment and
              interview recap service, you can streamline your hiring process
              and make more informed hiring decisions. So if you&apos;re ready
              to take the guesswork out of candidate evaluation, try our service
              today. View assessment scores and interview recaps and get a clear
              understanding of a candidate&apos;s capabilities on a high level.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row">
          <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
            <Image
              src={
                '/assets/images/Woman-in-office-taking-part-in-interview-asessment-on-laptop.jpg.optimal.jpg'
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
              Give external candidates complete assessments to grasp their basic
              capabilities on a high level
            </h2>
            <p className="text-lg">
              As a recruiter or hiring manager, you know that sourcing
              candidates is just the first step in the hiring process. But how
              can you quickly and accurately assess a candidate&apos;s
              capabilities before moving forward with interviews and
              evaluations? Our assessment service can help. With our
              comprehensive assessments, you can quickly get a high-level
              understanding of a candidate&apos;s basic capabilities, allowing
              you to make more informed decisions about who to move forward
              with. And because our assessments are designed by senior web3
              employees from top organizations, you can be confident in their
              accuracy and relevance to the industry. Our assessments cover a
              wide range of topics, including development, design, and
              marketing, giving you a well-rounded view of a candidate&apos;s
              skills. So if you want to take the guesswork out of candidate
              evaluation and streamline your hiring process, try our assessment
              service today. Give your personally sourced candidates the
              opportunity to showcase their capabilities and make your hiring
              decisions with confidence.
            </p>
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
          <div className="box-border flex h-[fit-content] flex-col items-start justify-start bg-green-100 p-4 sm:h-32">
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
