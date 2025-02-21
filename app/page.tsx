'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {FC} from 'react';

const HomePage: FC = () => {
  const router = useRouter();
  return (
    <div className='min-h-full font-[family-name:var(--font-geist-sans)]'>
      <div className='flex flex-col gap-28 mx-28 my-40 h-full'>
        <main className='flex flex-col gap-8'>
          <h1 className='font-extrabold text-2xl'>Playwright e2e test example</h1>
          <button
            onClick={() => router.push('/selectors')}
            className='px-4 py-3 border-2 font-bold rounded-[8px] max-w-xs'>
            Click me
          </button>

          <p data-testid='info'>Informationtext</p>
          <p className='text-lg'>LargeText 🤯</p>
          <p id='danger' className='hidden'>
            Danger!!!
          </p>
        </main>
        <footer className='flex gap-6 flex-wrap justify-center'>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'>
            <Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
