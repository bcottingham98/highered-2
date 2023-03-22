// import { useRouter } from 'next/router';
import NextImage from 'next/image';

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
            Jump into the web3 community
          </p>
        </div>
        <div className="mt-4">
          <BaseWaitlistCandidateForm sampleTextProp={''} />
        </div>
      </section>
      <section className="my-4 flex flex-col space-y-4">
        <div className="flex h-72 w-3/5 flex-row">
          <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
            <Image
              src={'/assets/images/beautiful-woman-suit-happily-greets-man.jpg'}
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
              Schedule 1 on 1 interviews with the industries top talent
            </p>
          </div>
        </div>
        <div className="flex h-72 w-3/5 flex-row">
          <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
            <Image
              src={'/assets/images/beautiful-woman-suit-happily-greets-man.jpg'}
              alt=""
              layout="fill"
              // height="4480"
              // width="6720"
              className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <h2 className="font-bold">Learn during the interview</h2>
            <p className="text-lg">Learn during the interview</p>
          </div>
        </div>
        <div className="flex h-72 w-3/5 flex-row">
          <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
            <Image
              src={'/assets/images/beautiful-woman-suit-happily-greets-man.jpg'}
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
              Get reviewed and vetted of your skillset by experienced sr
              blockchain developers, digital artists and community managers
            </p>
          </div>
        </div>
      </section>
      <section className="my-4 flex flex-col items-end space-y-4">
        <div className="flex h-72 w-3/5 flex-row">
          <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
            <Image
              src={'/assets/images/beautiful-woman-suit-happily-greets-man.jpg'}
              alt=""
              layout="fill"
              // height="4480"
              // width="6720"
              className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <h2 className="font-bold">
              Test yourself against assessments created by Sr web3 employees at
              household name organizations
            </h2>
            <p className="text-lg">
              Test yourself against assessments created by Sr web3 employees at
              household name organizations
            </p>
          </div>
        </div>
        <div className="flex h-72 w-3/5 flex-row">
          <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
            <Image
              src={'/assets/images/beautiful-woman-suit-happily-greets-man.jpg'}
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
              Share your scores with potential employeers
            </p>
          </div>
        </div>
        <div className="flex h-72 w-3/5 flex-row">
          <div className="relative mr-4 hidden h-auto w-1/2 items-center justify-center sm:flex">
            <Image
              src={'/assets/images/beautiful-woman-suit-happily-greets-man.jpg'}
              alt=""
              layout="fill"
              // height="4480"
              // width="6720"
              className="tailwind-img-override relative flex h-auto items-center justify-center object-cover"
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <h2 className="font-bold">Grow your skills as you test yourself</h2>
            <p className="text-lg">Grow your skills as you test yourself</p>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-24 flex flex-col items-center">
          <h2 className="mb-4 font-bold">About Highered</h2>
          <p className="text-lg">
            Highered is a unique community-driven website that aims to connect
            recruiters from startups with small teams that have had difficulties
            finding qualified web3 candidates for their organizations. The
            platform also helps candidates looking for jobs within the web3
            community, who have struggled to find employment due to either lack
            of skills or inadequate ability to express themselves fully. The
            website connects recruiters to a database of qualified, vetted
            candidates, making it easier for them to find suitable candidates
            for their open positions. Additionally, Highered helps candidates
            learn blockchain code and integrate themselves into the web3
            community through qualifying interviews and assessments. This
            creates a win-win scenario where recruiters get access to a pool of
            talented candidates, and candidates get an opportunity to develop
            their skills and showcase their expertise. The platform connects
            senior web3 developers with junior web3 developers, as well as those
            who are looking to enter the web3 community, for digital
            informational qualifying interviews. It also allows developers to
            test themselves against other community member-created problem sets
            and assessments. This creates a supportive environment where
            developers can learn from each other and develop their skills
            faster. The ultimate goal of Highered is to grow the talent pool
            within the web3 community and connect qualified candidates with
            startups faster. This would help bridge the gap between recruiters
            and candidates, making it easier for startups to find the right
            talent and for candidates to find the right job opportunities. In
            summary, Highered is a community-driven website that helps to
            connect recruiters with talented web3 candidates while also helping
            candidates develop their skills and showcase their expertise. The
            platform fosters a supportive environment that encourages
            collaboration and skill development, ultimately growing the talent
            pool within the web3 community and connecting qualified candidates
            with startups faster.
          </p>
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
