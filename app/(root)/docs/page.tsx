import Sidebar from '@/components/shared/Sidebar';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Docs - SVRJS',
};

export default function Page() {
  return (
    <>
      <Sidebar />
    </>
  );
}
