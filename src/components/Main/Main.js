import { Header, Jobs } from "components";

export const Main = (props) => {
  return (
    <main className={"col-span-8 h-full order-3"}>
      <Header />
      <Jobs />
    </main>
  );
};
