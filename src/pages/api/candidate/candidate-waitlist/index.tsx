import BlogItem from '@/models/blog/BlogItemModel';
import dbConnect from '@/utils/mongodb/dbConnect';

export default async function handler(
  req: { body?: any; method?: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { success: boolean; data?: any }): void; new (): any };
    };
  }
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const blogItem = await BlogItem.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: blogItem });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const blogItem = await BlogItem.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: blogItem });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
