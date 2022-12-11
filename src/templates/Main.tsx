import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import BaseWaitlistCandidateForm from '@/components/form/candidate/waitlist/base/BaseWaitlistCandidateForm';
import BaseWaitlistCompanyForm from '@/components/form/company/waitlist/base/BaseWaitlistCompanyForm';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  const pathName = router.asPath;
  const pathNameList = pathName.split('/');
  const [pageName, setPageName] = useState('candidate');

  useEffect(() => {
    console.log(pathNameList[1]);
    if (pathNameList[1] === 'companies') {
      setPageName(pathNameList[1]);
    } else if (pathNameList[1] === 'candidates') {
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
    //     case (data = '/companies/'):
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
    <div className="w-full bg-gradient-to-b from-[#EFEFEF] to-[#EFEFEF]/0 px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto box-border p-5">
        <div className="">
          <div>
            <ul className="flex flex-wrap">
              <li className="mr-6">
                <Link
                  href="/"
                  className={`${
                    // eslint-disable-next-line no-constant-condition
                    pageName === 'candidates' ? 'underline' : ''
                  } border-none text-gray-800 hover:text-gray-900`}
                >
                  For Candidates
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/companies"
                  className={`${
                    pageName === 'companies' ? 'underline' : ''
                  } border-none text-gray-800 hover:text-gray-900`}
                >
                  For Companies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="content py-5 text-xl">{props.children}</div>

        <div className="flex w-full flex-col items-start border-t border-gray-300 py-4 text-center text-sm">
          <span className="my-2 flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-black">
            U
          </span>
          <p className="my-2 font-bold">{AppConfig.title}</p>
          <p>Building the modern workforce acquisition tool</p>
          <ul className="my-2 flex w-full flex-col items-center justify-between sm:flex-row">
            <li>
              <Link
                href="/"
                className="border-none text-gray-800 hover:text-gray-900"
              >
                For Candidates
              </Link>
            </li>
            <li>
              <Link
                href="/companies"
                className="border-none text-gray-800 hover:text-gray-900"
              >
                For Companies
              </Link>
            </li>
            <li className="flex flex-row items-center">
              {pageName === 'candidates' ? (
                <BaseWaitlistCandidateForm sampleTextProp={''} />
              ) : (
                <></>
              )}
              {pageName === 'companies' ? (
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
