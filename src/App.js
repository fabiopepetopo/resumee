import { Layout } from "components";
import { ResumeeProvider } from "contexts";

export const App = () => {
  return (
    <ResumeeProvider>
      <div
        className="bg-no-repeat"
        style={{ backgroundImage: `url('images/waves3.svg')` }}
      >
        <Layout />;
      </div>
    </ResumeeProvider>
  );
};
