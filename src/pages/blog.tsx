import Link from 'next/link';
import type {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// mongodb
import clientPromise from '../utils/mongodb/mongodb';
import type { NextPageWithLayout } from './page';

const featuredPost = {
  id: 1,
  title: 'We’re incredibly proud to announce we have secured $75m in Series B',
  href: '1',
  description:
    'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  imageUrl: '/assets/images/Web-3-2.jpg',
  author: {
    name: 'Michael Foster',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};
// const posts = [
//   {
//     id: 2,
//     title: 'Boost your conversion rate',
//     href: '2',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
//     date: 'Mar 10, 2020',
//     datetime: '2020-03-16',
//     imageUrl: '/assets/images/improve_your_skills.jpg',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Lindsay Walton',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     id: 2,
//     title: 'Boost your conversion rate',
//     href: '2',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
//     date: 'Mar 10, 2020',
//     datetime: '2020-03-16',
//     imageUrl:
//       '/assets/images/portrait-smiling-hr-manager-having-interview-with-candidate.jpg',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Lindsay Walton',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   // More posts...
// ];

export interface IResults {
  featuredArticle: any;
  articles: any;
  isLoading: boolean;
}

const Blog: NextPageWithLayout<IResults> = ({
  featuredArticle,
  articles,
  isLoading,
}) => {
  console.log(featuredArticle);
  console.log(articles);
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      {/* <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p> */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Recent
      </h2>
      <p className="text-lg leading-8 text-gray-600">
        Read our recent articles.
      </p>
      <div className="py-4">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
          <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="relative mb-2 w-full">
              <img
                src={featuredPost.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <time
              dateTime={featuredPost.datetime}
              className="block text-sm leading-6 text-gray-600"
            >
              {featuredPost.date}
            </time>
            <h2
              id="featured-post"
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {isLoading ? (
                <span className="h-[1rem] w-[8rem] bg-gray-500" />
              ) : (
                featuredArticle[0].title
              )}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {featuredPost.description}
            </p>
            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
              <div className="flex">
                <Link
                  href={`/blog/${featuredPost.title
                    .replace(/\s+/g, '-')
                    .toLowerCase()}`}
                  className="text-sm font-semibold leading-6 text-green-600"
                  aria-describedby="featured-post"
                >
                  {`Blog - ${featuredPost.href}`}
                  Continue reading <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                <a
                  href={featuredPost.author.href}
                  className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                >
                  <img
                    src={featuredPost.author.imageUrl}
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                  />
                  {featuredPost.author.name}
                </a>
              </div>
            </div>
          </article>
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-3xl lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-900/10">
              {isLoading ? (
                <span className="h-[1rem] w-[8rem] bg-gray-500" />
              ) : (
                articles.map(
                  (
                    article: {
                      imageUrl: string | undefined;
                      datetime: string | undefined;
                      date:
                        | string
                        | number
                        | boolean
                        | ReactElement<
                            any, // mongodb
                            string | JSXElementConstructor<any>
                          >
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      href: any;
                      title: string;
                      description:
                        | string
                        | number
                        | boolean
                        | ReactElement<
                            any, // mongodb
                            string | JSXElementConstructor<any>
                          >
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      author: {
                        href: string | undefined;
                        imageUrl: string | undefined;
                        name:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any, // mongodb
                              string | JSXElementConstructor<any>
                            >
                          | ReactFragment
                          | ReactPortal
                          | null
                          | undefined;
                      };
                    },
                    idx: number
                  ) =>
                    idx < 2 && (
                      <article key={idx} className="py-12">
                        <div className="group relative">
                          <div className="relative mb-2 w-full">
                            <img
                              src={article.imageUrl}
                              alt=""
                              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[7/2]"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                          </div>
                          <time
                            dateTime={article.datetime}
                            className="block text-sm leading-6 text-gray-600"
                          >
                            {article.date}
                          </time>
                          <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                            <Link
                              href={`/blog/${article.title
                                .replace(/\s+/g, '-')
                                .toLowerCase()}`}
                              aria-describedby="article"
                              className="text-gray-900"
                            >
                              <span className="absolute inset-0" />
                              {article.title}
                            </Link>
                          </h2>
                          <p className="mt-4 text-sm leading-6 text-gray-600">
                            {article.description}
                          </p>
                        </div>
                        <div className="mt-4 flex">
                          <a
                            href={article.author.href}
                            className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                          >
                            <img
                              src={article.author.imageUrl}
                              alt=""
                              className="h-6 w-6 flex-none rounded-full bg-gray-50"
                            />
                            <p className="text-gray-900">
                              {article.author.name}
                            </p>
                          </a>
                        </div>
                      </article>
                    )
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-900/10 py-16 sm:py-20">
        <div className="mx-auto">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All blog articles
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Read all our blog articles
            </p>
            <div className="mt-2 space-y-16 border-t border-gray-200 pt-2 sm:mt-2 sm:pt-2">
              {isLoading ? (
                <span className="h-[1rem] w-[8rem] bg-gray-500" />
              ) : (
                articles.map(
                  (
                    article: {
                      imageUrl: string | undefined;
                      datetime: string | undefined;
                      date:
                        | string
                        | number
                        | boolean
                        | ReactElement<
                            any, // mongodb
                            string | JSXElementConstructor<any>
                          >
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      category: {
                        href: string | undefined;
                        title:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any, // mongodb
                              string | JSXElementConstructor<any>
                            >
                          | ReactFragment
                          | ReactPortal
                          | null
                          | undefined;
                      };
                      href: any;
                      title: string;
                      description:
                        | string
                        | number
                        | boolean
                        | ReactElement<
                            any, // mongodb
                            string | JSXElementConstructor<any>
                          >
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      author: {
                        imageUrl: string | undefined;
                        href: string | undefined;
                        name:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any, // mongodb
                              string | JSXElementConstructor<any>
                            >
                          | ReactFragment
                          | ReactPortal
                          | null
                          | undefined;
                      };
                    },
                    idx: Key | null | undefined
                  ) => (
                    <article
                      key={idx}
                      className="relative isolate flex flex-col gap-8 lg:flex-row"
                    >
                      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                        <img
                          src={article.imageUrl}
                          alt=""
                          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-x-4 text-xs">
                          <time
                            dateTime={article.datetime}
                            className="text-gray-500"
                          >
                            {article.date}
                          </time>
                          <a
                            href={article.category.href}
                            className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            {article.category.title}
                          </a>
                        </div>
                        <div className="group relative max-w-xl">
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <Link
                              href={`/blog/${article.title
                                .replace(/\s+/g, '-')
                                .toLowerCase()}`}
                              aria-describedby="article"
                              className="text-gray-900"
                            >
                              <span className="absolute inset-0" />
                              {article.title}
                            </Link>
                          </h3>
                          <p className="mt-5 text-sm leading-6 text-gray-600">
                            {article.description}
                          </p>
                        </div>
                        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                          <div className="relative flex items-center gap-x-4">
                            <img
                              src={article.author.imageUrl}
                              alt=""
                              className="h-10 w-10 rounded-full bg-gray-50"
                            />
                            <div className="text-sm leading-6">
                              <p className="font-semibold text-gray-900">
                                <a href={article.author.href}>
                                  <span className="absolute inset-0" />
                                  <p className="text-gray-900">
                                    {article.author.name}
                                  </p>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

// eslint-disable-next-line consistent-return
export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('test');

    const articles = await db
      .collection('blogposts')
      .find({})
      .sort({})
      .limit(1000)
      .toArray();

    const featuredArticle = await db
      .collection('blogposts')
      .find({ isFeatured: true })
      .sort({})
      .limit(1)
      .toArray();

    return {
      props: {
        featuredArticle: JSON.parse(JSON.stringify(featuredArticle)),
        articles: JSON.parse(JSON.stringify(articles)),
        isLoading: false,
      },
    };
  } catch (e) {
    return {
      props: {
        isLoading: true,
      },
    };
  }
}

export default Blog;
