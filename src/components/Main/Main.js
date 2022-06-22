import { Header, Jobs } from "components";

export const Main = (props) => {
  return (
    <main className={"md:col-span-9 col-span-12 h-full order-3"}>
      <Header />
      <Jobs />
    </main>
  );
};
