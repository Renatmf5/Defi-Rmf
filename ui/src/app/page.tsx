import IntroSection from './_components/intro-section';
import PoolSection from './_components/pool-section';


export default function Home() {
  return (
    <main className="">
      <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'></div>
      <IntroSection />
      <PoolSection />
    </main>
  );
}
