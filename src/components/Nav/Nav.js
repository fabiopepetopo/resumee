import { Download } from "components";
export const Nav = () => {
  return (
    <nav
      className={
        "max-w-[210mm] font-mono mx-auto px-1 my-0 py-8 flex justify-between items-center"
      }
    >
      <img alt="logo" className="max-w-[100px]" src="images/logo.png"></img>
      <Download />
    </nav>
  );
};
