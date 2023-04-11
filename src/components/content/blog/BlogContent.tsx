// DOMPurify
import DOMPurify from 'isomorphic-dompurify';
// styles

export interface IBlogContent {
  sampleTextProp: string;
}

const BlogContent: React.FC<IBlogContent> = ({ sampleTextProp }) => {
  const createMarkup = (html: string | Node) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      {sampleTextProp ? (
        <div className="flex w-full flex-col items-start">
          <div
            className={`article-post-override w-full px-4 text-left sm:px-6 lg:px-8`}
            dangerouslySetInnerHTML={createMarkup(sampleTextProp)}
          ></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BlogContent;
