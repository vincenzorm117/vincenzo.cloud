import PortfolioItem from "@/components/molecules/PortfolioItem";
import projectData from "@/data/projects.json";

const SectionProjects = ({}) => (
  <section className="bg-purple-dark pb-20">
    <h1 className="text-white-default text-6xl text-center pt-20">Projects</h1>
    {projectData.map((p) => (
      <>
        <h2 className="text-center text-white-default uppercase text-xl mt-20 font-sans font-light tracking-widest">
          {p.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          {p.projects.map((e) => (
            <PortfolioItem data={e} className="py-10" />
          ))}
        </div>
      </>
    ))}
  </section>
);
export default SectionProjects;
