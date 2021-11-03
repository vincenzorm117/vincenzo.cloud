import Tag from "@/components/atoms/Tag";
import styled from "styled-components";

const ListItem = styled.li`
  &:before {
    position: absolute;
    top: 14px;
    left: 0;
    content: "";
    display: block;
    border-radius: 50%;
    border: 1px solid #b2b2b2;
    height: 3px;
    width: 3px;
  }
`;

const PortfolioItem = ({ data = {}, className = "" }) => {
  const { dates, title, body, tags } = data;

  return (
    <div className={className}>
      <div className="text-red-pink text-base uppercase pb-1">{dates}</div>
      <h2 className="text-white-default text-[32px]">{title}</h2>
      <ul className="text-white-b2 pt-3 pb-6">
        {body.map((b) => (
          <ListItem
            className="py-[3px] pl-[15px] leading-[1.4] text-[20px] text-white-b2 relative"
            dangerouslySetInnerHTML={{ __html: b }}
          />
        ))}
      </ul>
      <div className="-mx-1 text-base">
        {tags.map((tag) => (
          <Tag className="mx-1" key={tag}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;