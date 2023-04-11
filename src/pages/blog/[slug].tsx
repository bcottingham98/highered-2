import type { GetServerSideProps } from 'next';

import BlogContent from '@/components/content/blog/BlogContent';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// mongodb
import clientPromise from '../../utils/mongodb/mongodb';
import type { NextPageWithLayout } from '../page';

// type IBlogUrl = {
//   slug: string;
// };

// export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
//   return {
//     paths: [...Array(10)].map((_, index) => ({
//       params: { slug: `blog-${index}` },
//     })),
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
//   params,
// }) => {
//   return {
//     props: {
//       slug: params!.slug,
//     },
//   };
// };

export interface IResults {
  articles: any;
  isLoading: boolean;
  resolvedUrl: any;
  test: any;
}

export const getServerSideProps: GetServerSideProps<{
  articles?: any;
  isLoading: boolean;
  test?: any;
}> = async (context) => {
  try {
    const client = await clientPromise;
    const db = client.db('test');

    const test = context.resolvedUrl.split(/[/?]+/);
    const test2 = test[2]!.replace(/[-]+/, ' ');
    const test3 = test2.replace(/[/]+/g, ' ');

    const articles = await db
      .collection('blogposts')
      .find({ title: { $regex: test3, $options: '$i' } })
      .sort({})
      .limit(1)
      .toArray();

    return {
      props: {
        articles: JSON.parse(JSON.stringify(articles)),
        isLoading: false,
        test: test3,
      },
    };
  } catch (e) {
    console.error(e);

    return {
      props: {
        isLoading: true,
      },
    };
  }
};

const Blog: NextPageWithLayout<IResults> = ({ articles, isLoading, test }) => {
  console.log(articles);
  console.log(test);
  return (
    <Main meta={<Meta title={'abc'} description="Lorem ipsum" />}>
      <h1 className="my-8 text-center text-2xl font-bold capitalize">
        {isLoading && articles ? (
          <span className="h-[1rem] w-[8rem] bg-gray-500" />
        ) : (
          // articles[0].title
          'hi'
        )}
      </h1>
      <div className="list-decimal">
        {isLoading && articles ? (
          <span className="h-[1rem] w-[8rem] bg-gray-500" />
        ) : (
          <BlogContent sampleTextProp={articles[0].content} />
        )}
      </div>
    </Main>
  );
};

export default Blog;
