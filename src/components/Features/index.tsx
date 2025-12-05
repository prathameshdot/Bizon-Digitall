import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = ({ data }: { data?: { title?: string; subtitle?: string; items?: any[] } }) => {
  const items = data?.items?.map((it: any, idx: number) => ({
    id: it.id ?? idx,
    icon: it.icon,
    title: it.title || it.name || `Feature ${idx + 1}`,
    paragraph: it.description || it.paragraph || ''
  })) || featuresData;

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={data?.title || 'Main Features'}
            paragraph={data?.subtitle || 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {items.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
