import CompanyWaitlist from '@/models/company/CompanyWaitlistModel';
import dbConnect from '@/utils/mongodb/dbConnect';

// eslint-disable-next-line consistent-return
export default async function handler(
  req: { body?: any; query?: any; method?: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { success: boolean; data?: any }): void; new (): any };
    };
  }
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const companyWaitlist = await CompanyWaitlist.findById(id);
        if (!companyWaitlist) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: companyWaitlist });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const companyWaitlist = await CompanyWaitlist.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!companyWaitlist) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: companyWaitlist });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedCompanyWaitlist = await CompanyWaitlist.deleteOne({
          _id: id,
        });
        if (!deletedCompanyWaitlist) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
