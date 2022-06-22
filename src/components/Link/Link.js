export const Link = ({ type, href, text }) => {
  const icons = {
    github: "images/github.png",
    email: "images/email.png",
    tel: "images/phone-call.png",
    location: "images/gps.png",
    blog: "images/web.png",
  };

  return (
    <div className="flex justify-start items-center mb-1">
      <img alt={type} className="max-w-[20px] mr-2" src={icons[type]} />
      <a href={href} target={"_blank"} rel={"noreferrer"}>
        {text}
      </a>
    </div>
  );
};
