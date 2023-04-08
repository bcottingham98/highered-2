import BaseWaitlistCompanyForm from '@/components/form/company/waitlist/base/BaseWaitlistCompanyForm';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const JoinHiring = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <section className="box-border flex h-[100vh] w-full items-center justify-center p-4">
      <div>
        <BaseWaitlistCompanyForm sampleTextProp={''} />
      </div>
    </section>
  </Main>
);

export default JoinHiring;
