import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { global } from '@/styles/global';
import MainLayout from '@/components/MainLayout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <RecoilRoot>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
