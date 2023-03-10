import Card from "./Card";

const CardList = ({
  filteredData,
}: {
  filteredData: {
    name: string;
    link: string;
    description: string;
    pngLink: string;
    svgLink: string;
    scrImg: string;
    socials: {
      twitter: string;
      github: string;
      linkedin: string;
      facebook: string;
    };
  }[];
}) => (
  <div className="main-container">
    {filteredData.map((item, index) => (
      <Card
        key={index}
        name={item.name}
        link={item.link}
        description={item.description}
        pngLink={item.pngLink}
        svgLink={item.svgLink}
        scrImg={item.scrImg}
        socials={item.socials}
      />
    ))}
    {filteredData.length === 0 && <h2>No Logos found ...</h2>}
  </div>
);

export default CardList;
