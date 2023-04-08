import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import BaseCta from '@/components/cta/base/BaseCta';
import BaseWaitlistCandidateForm from '@/components/form/candidate/waitlist/base/BaseWaitlistCandidateForm';
import BaseWaitlistCompanyForm from '@/components/form/company/waitlist/base/BaseWaitlistCompanyForm';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Image = (props: any) => {
  if (props.src) {
    return <NextImage {...props} />;
  }

  // TODO: if the image source is not there, you can set a default source
  // const defaultSrc = "something"
  return <NextImage {...props} src={'/*'} />;
};
const Main = (props: IMainProps) => {
  const router = useRouter();
  const pathName = router.asPath;
  const pathNameList = pathName.split('/');
  const [pageName, setPageName] = useState('candidate');

  useEffect(() => {
    console.log(pathNameList[1]);
    if (pathNameList[1] === 'hiring') {
      setPageName(pathNameList[1]);
    } else if (pathNameList[1] === 'candidates') {
      setPageName(pathNameList[1]);
    } else if (pathNameList[1] === 'blog') {
      setPageName(pathNameList[1]);
    } else {
      setPageName('candidates');
    }
    // if (pathNameList[0] !== undefined || pathNameList[1] !== undefined) {
    //   const data = pathNameList;
    //   switch (data) {
    //     case (pathNameList[1] = '/'):
    //       if (pageName !== undefined) {
    //         setPageName(pageName);
    //         console.log(pageName);
    //       }
    //       break;
    //     case (data = '/candidates/'):
    //       if (pageName !== undefined) {
    //         setPageName(pageName);
    //         console.log(pageName);
    //       }
    //       break;
    //     case (data = '/hiring/'):
    //       if (pageName !== undefined) {
    //         setPageName(pageName);
    //         console.log(pageName);
    //       }
    //       break;
    //     default:
    //       setPageName('candidate');
    //   }
    // }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#EFEFEF] to-[#EFEFEF]/0 px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto box-border p-5">
        <div className="">
          <div>
            <ul className="flex flex-wrap">
              <li className="mr-6">
                <Link
                  href="/"
                  className="relative mr-4 hidden h-6 w-6 items-center justify-center border-none text-gray-800 hover:text-gray-900 sm:flex"
                >
                  <Image
                    src={'/assets/vectors/Elevate-Sun-Final.svg'}
                    alt=""
                    layout="fill"
                    // height="4480"
                    // width="6720"
                    className="relative flex w-4 items-center justify-center object-cover"
                  />
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/learn"
                  className={`${
                    pageName === 'learn' ? 'underline' : ''
                  } border-none text-gray-800 hover:text-gray-900`}
                >
                  Learn
                </Link>
              </li>

              <li className="mr-6">
                <Link
                  href={pageName !== 'hiring' ? '/hiring' : '/'}
                  className={`${
                    pageName === 'hiring' ? '' : ''
                  } border-none text-gray-800 hover:text-gray-900`}
                >
                  {pageName !== 'hiring' ? 'For Recruiters' : 'For Candidates'}
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/blog"
                  className={`${
                    pageName === 'blog' ? 'underline' : ''
                  } border-none text-gray-800 hover:text-gray-900`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="content text-xl">{props.children}</div>
        <span className="my-16 block w-full border-t border-gray-300" />
        <section className="mb-16">
          <BaseCta />
        </section>

        <div className="flex w-full flex-col items-start border-t border-gray-300 py-4 text-center text-sm">
          <Link
            href="/"
            className="relative my-2 mr-4 flex aspect-square h-8 w-8 items-center justify-center border-none text-gray-800 hover:text-gray-900"
          >
            <Image
              src={'/assets/vectors/Elevate-Sun-Final.svg'}
              alt=""
              layout="fill"
              // height="4480"
              // width="6720"
              className="relative flex w-4 items-center justify-center object-cover"
            />
          </Link>
          <p className="mt-2 text-base font-bold">{AppConfig.title}</p>
          <p>Building the modern workforce acquisition tool</p>
          <ul className="my-2 flex w-full flex-col items-start justify-between sm:flex-row">
            <li>
              <div className="flex flex-col items-start">
                <h3 className="text-base font-bold text-gray-700">Use Cases</h3>
                <Link
                  href="/"
                  className="mb-4 border-none text-gray-800 hover:text-gray-900 sm:mb-0"
                >
                  For Candidates
                </Link>
                <Link
                  href="/hiring"
                  className="mb-4 border-none text-gray-800 hover:text-gray-900 sm:mb-0"
                >
                  For Recruiters
                </Link>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-start">
                <h3 className="text-base font-bold text-gray-800">About</h3>
                <Link
                  href="/learn"
                  className="mb-4 border-none text-gray-800 hover:text-gray-900 sm:mb-0"
                >
                  Learn
                </Link>
                <Link
                  href="/blog"
                  className="mb-4 border-none text-gray-800 hover:text-gray-900 sm:mb-0"
                >
                  Blog
                </Link>
                <Link
                  href="/pricing"
                  className="mb-4 border-none text-gray-800 hover:text-gray-900 sm:mb-0"
                >
                  Pricing
                </Link>
              </div>
            </li>
            <li className="flex flex-row items-center">
              {pageName !== 'hiring' ? (
                <BaseWaitlistCandidateForm sampleTextProp={''} />
              ) : (
                <></>
              )}
              {pageName === 'hiring' ? (
                <BaseWaitlistCompanyForm sampleTextProp={''} />
              ) : (
                <></>
              )}
            </li>
          </ul>
          <p>All rights reserved Uplift {new Date().getFullYear()}</p>
          {/* <p>© Copyright {new Date().getFullYear()}</p> */}
        </div>
      </div>
    </div>
  );
};

export { Main };
