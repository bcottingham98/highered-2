import { RadioGroup, Tab } from '@headlessui/react';
import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const audience = ['For Candidates', 'For Recruiters'];

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$150', annually: '$1800' },
    description: 'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    mostPopular: true,
  },
];

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];

const companyFeatures = [
  '5 products',
  'Up to 1,000 subscribers',
  'Basic analytics',
  '48-hour support response time',
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const About = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      {/* <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p> */}
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#EBEBEB] p-1 shadow-inner">
          {audience.map((tabTitle, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'text-green-700 bg-white shadow'
                    : 'text-gray-800 hover:bg-white/[0.12] hover:text-gray-600'
                )
              }
            >
              {tabTitle}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <div className="py-8 sm:py-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    For Candidates
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Distinctio et nulla eum soluta et neque labore quibusdam.
                    Saepe et quasi iusto modi velit ut non voluptas in.
                    Explicabo id ut laborum.
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                  <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      Lifetime membership
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      Lorem ipsum dolor sit amet consect etur adipisicing elit.
                      Itaque amet indis perferendis blanditiis repellendus etur
                      quidem assumenda.
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                      <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">
                        What’s included
                      </h4>
                      <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    >
                      {includedFeatures.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          {/* <CheckIcon
                    className="h-6 w-5 flex-none text-green-600"
                    aria-hidden="true"
                  /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6 flex-none text-green-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">
                          Pay per Interview
                        </p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-5xl font-bold tracking-tight text-gray-900">
                            $150
                          </span>
                          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                            USD
                          </span>
                        </p>
                        <a
                          href="#"
                          className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                          Get access
                        </a>
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                          Invoices and receipts available for easy reimbursement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="py-8 sm:py-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    For Recruiters
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Distinctio et nulla eum soluta et neque labore quibusdam.
                    Saepe et quasi iusto modi velit ut non voluptas in.
                    Explicabo id ut laborum.
                  </p>
                </div>
                <div className="mt-16 flex justify-center">
                  <RadioGroup
                    value={frequency}
                    onChange={setFrequency}
                    className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                  >
                    <RadioGroup.Label className="sr-only">
                      Payment frequency
                    </RadioGroup.Label>
                    {frequencies.map((option) => (
                      <RadioGroup.Option
                        key={option.value}
                        value={option}
                        className={({ checked }) =>
                          classNames(
                            checked
                              ? 'bg-green-600 text-white'
                              : 'text-gray-500',
                            'cursor-pointer rounded-full py-1 px-2.5'
                          )
                        }
                      >
                        <span>{option.label}</span>
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                  <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      Lifetime membership
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      Lorem ipsum dolor sit amet consect etur adipisicing elit.
                      Itaque amet indis perferendis blanditiis repellendus etur
                      quidem assumenda.
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                      <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">
                        What’s included
                      </h4>
                      <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    >
                      {companyFeatures.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          {/* <CheckIcon
                    className="h-6 w-5 flex-none text-green-600"
                    aria-hidden="true"
                  /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6 flex-none text-green-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
                    <div className="h-full w-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="flex items-center justify-between gap-x-4">
                          {tiers.map((tier) => (
                            <div key={tier.id}>
                              <p className="text-base font-semibold text-gray-600">
                                Pay monthly, cancel anytime
                              </p>
                              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                  {
                                    tier.price[
                                      frequency!
                                        .value as keyof typeof tier.price
                                    ]
                                  }
                                </span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                  {frequency!.priceSuffix}
                                </span>
                              </p>
                              <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                  tier.mostPopular
                                    ? 'bg-green-600 text-white shadow-sm hover:bg-green-500'
                                    : 'text-green-600 ring-1 ring-inset ring-green-200 hover:ring-green-300',
                                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                                )}
                              >
                                Buy plan
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Main>
  );
};

export default About;
