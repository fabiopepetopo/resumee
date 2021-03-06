import { Link, Tag, Language } from "components";

export const AsideItem = ({ title, description, languages, tags, links }) => {
  return (
    <div className="text-base my-4 mx-2">
      <h3 className="inline-block text-xl font-black border-b-2 mt-6 mb-4 pb-1 pr-16 pl-2 border-slate-900">
        {title}
      </h3>
      {description && <p className="">{description}</p>}
      {links && links.map((link, index) => <Link key={index} {...link} />)}
      {languages &&
        languages.map((language, index) => (
          <Language key={index} {...language} />
        ))}
      <div className="flex flex-wrap">
        {tags && tags.map((tag, index) => <Tag key={index} tag={tag} />)}
      </div>
    </div>
  );
};
