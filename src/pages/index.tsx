// import { useRouter } from 'next/router';
import NextImage from 'next/image';

import BaseWaitlistCandidateForm from '@/components/form/candidate/waitlist/base/BaseWaitlistCandidateForm';
import BaseMinimalForm from '@/components/form/company/minimal/base/BaseMinimalForm';
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
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
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
          <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-6xl font-extrabold text-transparent hover:from-green-400 hover:to-green-600">
            Modern Job Discovery
          </h1>
          <p className="my-6">
            <span role="img" aria-label="rocket">
              {/* 🚀 */}
            </span>{' '}
            Find your dream job
          </p>
        </div>
        <BaseWaitlistCandidateForm sampleTextProp={''} />
      </section>
      <section className="flex flex-row bg-green-50">
        <div className="relative flex w-2/5 items-center justify-center">
          <Image
            src={'/assets/images/beautiful-woman-suit-happily-greets-man.jpg'}
            alt=""
            layout="fill"
            // height="4480"
            // width="6720"
            className="flex items-center justify-center object-cover"
          />
        </div>
        <div className="w-3/5">
          <div className="box-border flex h-32 flex-col items-start justify-start bg-green-100 p-4">
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
      </section>
    </Main>
  );
};

export default Index;
