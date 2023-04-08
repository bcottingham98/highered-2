import BaseWaitlistCandidateForm from '@/components/form/candidate/waitlist/base/BaseWaitlistCandidateForm';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const JoinCandidate = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <section className="box-border flex h-[100vh] w-full items-center justify-center p-4">
      <div>
        <BaseWaitlistCandidateForm sampleTextProp={''} />
      </div>
    </section>
  </Main>
);

export default JoinCandidate;
