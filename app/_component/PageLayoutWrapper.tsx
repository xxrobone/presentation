import { ReactNode } from 'react';

export default function PageLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='flex flex-col md:ml-60 min-h-screen relative w-full'>
      {children}
    </div>
  );
}
