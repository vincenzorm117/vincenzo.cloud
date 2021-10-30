import Image from "next/image";
import imgProfile from "@/img/profile.jpg";

const SectionIntro = ({}) => (
  <section className="bg-gray-darkest text-white-dark">
    <div className="flex flex-nowrap flex-row justify-center mx-auto container py-28">
      <div className="w-4/12">
        <div className="rounded-full overflow-hidden border-white-darker border-4 border-solid w-8/12 mx-auto">
          <Image
            src={imgProfile}
            width={250}
            height={250}
            layout="responsive"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-8/12">
        <h2 className="text-4xl">Hello World!</h2>
        <p className="my-6 text-xl leading-10">
          My name is Vincenzo Marconi and I am Software Engineer <br />
          from Orlando, FL. I love to learn and I made this site to share <br />
          my experiences and experiments with the world.
        </p>
        <div>
          <a className="button--outline" href="mailto:vincenzorm117@gmail.com">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default SectionIntro;
