import BlinkingGrid from "@/components/atoms/BlinkingGrid";

const SectionHomeHero = ({}) => (
  <section className="relative">
    <BlinkingGrid>
      <div className="absolute w-full h-full flex flex-col items-center justify-center">
        <div className="text-white-default">
          <h2 className="text-[32px] leading-none">Hi I'm</h2>
          <h1 className="text-[90px] leading-none">Vincenzo</h1>
        </div>
      </div>
    </BlinkingGrid>
  </section>
);
export default SectionHomeHero;
