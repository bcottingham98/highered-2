// import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

/* JobSchema will correspond to a collection in your MongoDB database. */
const CompanyWaitlistSchema = new mongoose.Schema({
  email: {
    /* The title of this job */

    type: String,
    required: [false],
    unique: [false],
  },
  has_candidate_survey: {
    /* The title of this job */

    type: Boolean,
    required: [false],
  },
  candidate_survey_uid: {
    /* The title of this job */

    type: String,
    required: [false],
  },
  has_company_survey: {
    /* The title of this job */

    type: Boolean,
    required: [false],
  },
  company_survey_uid: {
    /* The title of this job */

    type: String,
    required: [false],
  },
  waitlist_position: {
    /* The title of this job */

    type: Number,
    required: [false],
  },
  has_referred: {
    /* The title of this job */

    type: Boolean,
    required: [false],
  },
  num_referred: {
    /* The title of this job */

    type: Number,
    required: [false],
  },
  emails_referred: {
    /* The title of this job */

    type: [String],
    required: [false],
  },
});

export default mongoose.model('CompanyWaitlist', CompanyWaitlistSchema);
