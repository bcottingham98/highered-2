import BaseMinimalForm from '@/components/form/company/minimal/base/BaseMinimalForm';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div>
      <BaseMinimalForm sampleTextProp={''} />
    </div>
  </Main>
);

export default About;
