import PortfolioItem from "@/components/molecules/PortfolioItem";
import universityExperiences from "@/data/university-experience.json";

const SectionUniversityExperience = () => (
  <section className="bg-purple-dark py-10">
    <div className="max-w-4xl mx-auto">
      {universityExperiences.map((e) => (
        <PortfolioItem data={e} className="py-10" />
      ))}
    </div>
  </section>
);
export default SectionUniversityExperience;
