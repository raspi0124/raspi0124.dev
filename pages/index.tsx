import type { NextPage } from "next";
import dynamic from "next/dynamic";
import TopDisplay from "./components/TopDisplay";
const Image = dynamic(import("mui-image"), { ssr: false }); // Async API cannot be server-side rendered
const Home: NextPage = () => {
  return (
    <>
      <TopDisplay />
    </>
  );
};

export default Home;
