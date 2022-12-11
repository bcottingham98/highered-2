// import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

/* JobSchema will correspond to a collection in your MongoDB database. */
const CandidateSurveySchema = new mongoose.Schema({
  currently_looking: {
    /* The title of this job */

    type: Boolean,
    required: [false],
  },
  painpoint: {
    /* The title of this job */

    type: String,
    required: [false],
  },
  level_of_pain: {
    /* The title of this job */

    type: Number,
    required: [false],
  },
  linked_to_email: {
    /* The title of this job */

    type: Boolean,
    required: [false],
  },
  linked_email: {
    /* The title of this job */

    type: String,
    required: [false],
  },
});

export default mongoose.model('CandidateSurvey', CandidateSurveySchema);
