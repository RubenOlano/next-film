import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface Test {
  data: {
    actors: any;
    poster: string;
    title: string;
    year: number;
  };
}

const Home: NextPage<Test> = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Image src={data.poster} alt="poster" layout="fill"></Image>
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async (_context) => {
  const res = await fetch("http://localhost:4000/movies");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
