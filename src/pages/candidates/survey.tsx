// import { useRouter } from 'next/router';
import NextImage from 'next/image';

import { BaseCompanyForm } from '@/components/form/company/base/BaseCompanyForm';
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

const CompanyFormPage = () => {
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
      <section className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-full sm:w-3/5">
            <div className="box-border h-[fit-content] p-4">
              <div className="grid grid-cols-3">
                <p className="">
                  <span
                    role="img"
                    aria-label="arrow"
                    className="mr-4 flex flex-row"
                  >
                    arrow
                    <p> Return</p>
                  </span>
                </p>
                <h1 className="text-center text-2xl font-bold sm:text-left">
                  Modern Hire Discovery
                </h1>
              </div>
              <div>
                <BaseCompanyForm />
              </div>
            </div>
          </div>
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
        </div>
      </section>
    </Main>
  );
};

export default CompanyFormPage;
