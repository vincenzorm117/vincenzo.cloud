const SectionIntro = () => (
  <section className='text-gray-darkest bg-white-default dark:bg-gray-darkest dark:text-white-dark relative'>
    <div className='sm:flex flex-nowrap sm:flex-row justify-center mx-auto container py-14 sm:py-28'>
      <div className='sm:w-4/12'>
        <img
          src='/img/profile.jpg'
          alt='Profile Portrait'
          className='rounded-full overflow-hidden border-gray-darkest dark:border-white-darker border-4 border-solid w-8/12 mx-auto'
        />
      </div>
      <div className='flex flex-col justify-center sm:w-8/12 px-10 mt-10 sm:mt-0'>
        <h2 className='text-4xl'>Hello World!</h2>
        <p className='my-6 text-xl leading-10'>
          My name is Vincenzo Marconi and I am Software Engineer <br />
          from Orlando, FL. I love to learn and I made this site to share <br />
          my experiences and experiments with the world.
        </p>
        <div>
          <a
            className='inline-block px-[26px] py-[1px] leading-[33px] uppercase tracking-[2px] text-center dark:text-[#cecece] bg-transparent font-semibold text-[14px] border-solid dark:border-[#cecece] border-2 hover:bg-[#1c1c1c] hover:border-[#1c1c1c] hover:text-[#cecece] dark:hover:bg-[#cecece] dark:hover:text-[#1c1c1c]'
            href='mailto:vincenzorm117@gmail.com'>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
)
export default SectionIntro
