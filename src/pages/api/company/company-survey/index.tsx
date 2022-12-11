import CompanySurvey from '@/models/company/CompanySurveyModel';
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
        const companySurveys = await CompanySurvey.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: companySurveys });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const companySurvey = await CompanySurvey.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: companySurvey });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
