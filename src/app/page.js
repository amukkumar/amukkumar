import Link from 'next/link';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import History from '@/components/history';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <hr></hr>
      <History />
      <hr></hr>
      <Skills />
      <hr></hr>
      <Experience />
      <hr></hr>
      <Projects />
      <hr></hr>
      <Footer />
      <Link href='#hero' className='bg-color fixed right-8 bottom-8 rounded-md px-2'>
        <span className="material-symbols-outlined text-md mt-2 mb-2">
          arrow_upward
        </span>
      </Link>
    </main>

  );
}
