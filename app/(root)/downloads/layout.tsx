import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads - SVRJS',
};

const ModLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ModLayout;
