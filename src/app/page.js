import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <nav className='w-100 bg-card sticky top-0'>
        <div className='container mx-auto max-w-5xl px-4 flex justify-between'>
          <div className='p-2'>
            <Image alt='brand-logo' src='/assets/image/icon/logo.png' width="60" height="0" />
          </div>
          <div className="flex gap-20 items-center text-sm">
            <ul className='md:flex gap-10 hidden'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='blog'>Blog</Link>
              </li>
              <li>
                <Link href='projects'>Projects</Link>
              </li>
              <li>
                <Link href='/#about'>About</Link>
              </li>
              <li>
                <Link href='/#contact'>Contact</Link>
              </li>
            </ul>
            <button className='btn flex items-center gap-2'>
              <span className="material-symbols-outlined text-xl">mark_email_unread</span>
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      <section className='container mx-auto max-w-4xl p-4 pb-20'>
        <div className='flex md:flex-row flex-col items-center'>
          <div className='flex-1'>
            <img alt='main-image' src='/assets/image/hero/me.png' />
          </div>
          <div className='flex-1 flex flex-col gap-5 mt-10 justify-end'>
            <h1 className='text-3xl font-semibold'>Hello, I&apos;m&nbsp;<span className='primary'>Amuk&nbsp;Kumar</span></h1>
            <h2 className='secondary text-lg'>Full Stack Developer</h2>
            <p className='secondary text-sm'>Get top-notch full-stack development services tailored to your needs. Lets bring your ideas to life, hassle-free.</p>

            <div className='flex flex-col gap-1'>
              <div className='w-100 flex'>
                <h3 className='ternary'>AGE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                <h3 className='secondary'><span className='ternary'>: </span>25 Years</h3>
              </div>
              <hr className='bg-ternary'></hr>
              <div className='w-100 flex'>
                <h3 className='ternary'>ADDRESS &nbsp;</h3>
                <h3 className='secondary'><span className='ternary'>: </span>Indrapuri, Sector-B, Bhopal-462022</h3>
              </div>
              <hr className='ternary'></hr>
              <div className='w-100 flex'>
                <h3 className='ternary'>PHONE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                <h3 className='secondary'><span className='ternary'>: </span><Link href='tel:+918877347754'>+91 88773 47754</Link></h3>
              </div>
              <hr className='ternary'></hr>
              <div className='w-100 flex'>
                <h3 className='ternary'>EMAIL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                <h3 className='secondary'><span className='ternary'>: </span><Link href='mailto:contact@amukkumar.com'>contact@amukkumar.com</Link></h3>
              </div>
              <hr className='ternary'></hr>
            </div>

            <div className='flex gap-5'>
              <div className='bg-card rounded-md'>
                <Link href='https://www.linkedin.com/in/amukkumar'><img alt='linkedin-link' src='/assets/image/icon/linkedin-fill.svg' className='p-2 w-10' /></Link>
              </div>
              <div className='bg-card rounded-md'>
                <Link href='https://www.facebook.com/amukkumarpage'><img alt='facebook-link' src='/assets/image/icon/facebook-fill.svg' className='p-2 w-10' /></Link>
              </div>
              <div className='bg-card rounded-md'>
                <Link href='https://instagram.com/amukkumarsah'><img alt='instagram-link' src='/assets/image/icon/instagram-line.svg' className='p-2 w-10' /></Link>
              </div>
              <div className='bg-card rounded-md'>
                <Link href='https://twitter.com/amukkumarsah'><img alt='twitter-link' src='/assets/image/icon/twitter-x-line.svg' className='p-2 w-10' /></Link>
              </div>
              <div className='bg-card rounded-md'>
                <Link href='https://www.youtube.com/amukkumar'><img alt='youtube-link' src='/assets/image/icon/youtube-line.svg' className='p-2 w-10' /></Link>
              </div>
              <div className='bg-card rounded-md'>
                <Link href='https://github.com/amukkumar'><img alt='github-link' src='/assets/image/icon/github-fill.svg' className='p-2 w-10' /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className='container mx-auto max-w-5xl px-2 py-20'>
        <div className='flex md:flex-row flex-col md:gap-4 gap-16'>
          <div className='flex-1 flex flex-col gap-5 px-2'>
            <button className='btn flex items-center gap-2 max-w-32 justify-center'>
              My History
            </button>
            <h1 className='text-3xl font-semibold'>Say&nbsp;Hello&nbsp;Brother, I&apos;m Developer &<span className='primary'>Designer.</span></h1>
            <h2 className='secondary text-lg'>Full Stack Developer</h2>
            <p className='secondary text-sm'>
              Get top-notch full-stack development services tailored to your needs. Lets bring your ideas to life, hassle-free.
            </p>
            <p className='secondary text-sm'>
              Get top-notch full-stack development services tailored to your needs. Lets bring your ideas to life, hassle-free.
            </p>
            <div className='flex items-center gap-3'>
              <div className='max-w-36'>
                <img alt='sign' src='/assets/image/icon/sign.png' />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl'>Amuk Kumar</h3>
                <p className='ternary text-sm'>DEVELOPER & DESIGNER</p>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-2'>
            <div className='flex items-center gap-2 m-2'>
              <h1 className='font-outline primary text-7xl'>01</h1>
              <div className='p-1'>
                QUALITY OF WORK
                <p className='text-sm ternary'>Quality of work is the standard of work that an employee or team consistently delivers.</p>
              </div>
            </div>
            <div className='flex items-center gap-2 m-2'>
              <h1 className='font-outline primary text-7xl'>02</h1>
              <div className='p-1'>
                INTEGRITY OF VALUE
                <p className='text-sm ternary'>Quality of work is the standard of work that an employee or team consistently delivers.</p>
              </div>
            </div>
            <div className='flex items-center gap-2 m-2'>
              <h1 className='font-outline primary text-7xl'>03</h1>
              <div className='p-1'>
                VALUE OF RESULT
                <p className='text-sm ternary'>Quality of work is the standard of work that an employee or team consistently delivers.</p>
              </div>
            </div>
            <div className='flex items-center gap-2 m-2'>
              <h1 className='font-outline primary text-7xl'>04</h1>
              <div className='p-1'>
                CLIENT EXPERIENCE
                <p className='text-sm ternary'>Quality of work is the standard of work that an employee or team consistently delivers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className='container mx-auto max-w-5xl px-2 py-20'>
        <div className='flex flex-col justify-center items-center text-center gap-5'>
          <button className='btn flex items-center gap-2 max-w-44 justify-center'>
            Professional Skills
          </button>
          <h1 className='text-3xl font-semibold'>Innovative Solution to <span className='primary'>Enhance</span></h1>
          <h2 className='secondary text-lg'>Experties in using the Application</h2>
          <p className='secondary text-sm text-center'>
            Quality of work is the standard of work that an employee or team consistently delivers. It can include factors such as: Time management, Communication, Professional knowledge, Job knowledge, Working relationships.
          </p>
          <div className='flex gap-3 md:gap-5 justify-center flex-wrap mt-4'>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/html.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>HTML</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/css.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>CSS</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/javascript.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>Javascript</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/typescript.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>Typescript</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/nodejs.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>Node JS</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/php.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>PHP</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/csharp.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>C#</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/react.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>React JS</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/mui.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>MUI</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/tailwindcss.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>Tailwind</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/nextjs.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>Next JS</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/mongodb.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>Mongo DB</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/firebase.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>Firebase</p>
            </div>
            <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
              <img alt='github-link' src='/assets/image/icon/mysql.svg' className='w-20 h-20 p-3' />
              <p className='ternary text-sm text-center'>My SQL</p>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className='container mx-auto max-w-5xl px-4 py-20'>
        <div className='flex md:flex-row flex-col md:gap-4 gap-14'>
          <div className='flex-1 flex flex-col gap-5'>
            <button className='btn flex items-center gap-2 max-w-28 justify-center'>
              Experience
            </button>
            <h1 className='text-3xl font-semibold'>My Experience in <span className='primary'>Work</span></h1>
            <h2 className='secondary text-lg'>Experties in using the Application</h2>
            <p className='secondary text-sm ternary'>
              Quality of work is the standard of work that an employee or team consistently delivers. It can include factors such as: Time management, Communication, Professional knowledge, Job knowledge, Working relationships.
            </p>
          </div>
          <div className='flex-1 grid grid-cols-2 gap-3 md:gap-5'>
            <div className='text-center bg-card py-5 rounded-lg'>
              <h1 className='text-5xl font-bold'>12+</h1>
              <p className='ternary text-sm'>Project Done</p>
            </div>
            <div className='text-center bg-card py-5 rounded-lg'>
              <h1 className='text-5xl font-bold'>18+</h1>
              <p className='ternary text-sm'>Project Done</p>
            </div>
            <div className='text-center bg-card py-5 rounded-lg'>
              <h1 className='text-5xl font-bold'>23+</h1>
              <p className='ternary text-sm'>Project Done</p>
            </div>
            <div className='text-center bg-card py-5 rounded-lg'>
              <h1 className='text-5xl font-bold'>40+</h1>
              <p className='ternary text-sm'>Project Done</p>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className='w-100 bg-card' id='contact'>
        <footer className='container mx-auto max-w-5xl p-4'>
          <div className='flex justify-between items-center'>
            <p className='ternary text-sm'><Link href='/term-condition'><span>Term & Condition</span></Link> | <span><Link href='privacy-policy'>Privacy Policy</Link></span></p>
            <p className='ternary text-sm'>AMUK KUMAR &copy; 2024 ALL RIGHTS RESERVED</p>
          </div>
        </footer>
      </section>
      <button className='bg-color fixed right-8 bottom-8 rounded-md px-2'>
        <span class="material-symbols-outlined text-md mt-2 mb-2">
          arrow_upward
        </span>
      </button>
    </main>

  );
}
