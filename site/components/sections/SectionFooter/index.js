import SocialLinks from 'components/molecules/SocialLinks'

const SectionFooter = ({}) => (
  <footer className='dark:bg-purple-darkest dark:text-white-default text-purple-darkest bg-white-default'>
    <div className='container mx-auto'>
      <div className='flex justify-between pt-10 pb-9'>
        <a className='text-2xl' href='mailto:vincenzorm117@gmail.com'>
          Email
        </a>
        <div>
          <SocialLinks />
        </div>
      </div>
      <div className='text-right text-brown-darkest'>
        &copy; {new Date().getFullYear()} Vincenzo Marconi, All Rights Reserved
      </div>
    </div>
  </footer>
)
export default SectionFooter
