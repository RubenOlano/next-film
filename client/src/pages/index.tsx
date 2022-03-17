import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Body from "../components/Body/Body";
import Navbar from "../components/Navbar/Navbar";
import { Data } from "../types/data";

const Home: NextPage<Data> = ({ data }) => {
  return (
    <>
      <Navbar />
      <Body data={data} />
    </>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (_context) => {
  const res = await fetch("http://localhost:4000/movies");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
