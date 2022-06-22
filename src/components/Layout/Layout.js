import { Aside } from "components";
import { Main } from "components";
import { Nav } from "components";

export const Layout = (props) => {
  return (
    <>
      <Nav />
      <div
        id="layout"
        className={
          "mx-auto px-1 my-0 grid auto-rows-max grid-cols-12 h-screen font-mono max-w-[210mm]"
        }
      >
        <Main />
        <Aside />
      </div>
    </>
  );
};
