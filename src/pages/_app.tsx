import '../styles/global.css';

import type { AppProps } from 'next/app';

import { MultiStepFormProvider } from '@/state/form/multiStepForm/MultiStepFormState';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MultiStepFormProvider>
    <Component {...pageProps} />
  </MultiStepFormProvider>
);

export default MyApp;
