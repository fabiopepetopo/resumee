import { ProfileImage, AsideListItems } from "components";

export const Aside = () => {
  return (
    <aside className={"md:col-span-3 col-span-12 row-span-10 h-full order-4"}>
      <ProfileImage />
      <AsideListItems />
    </aside>
  );
};
