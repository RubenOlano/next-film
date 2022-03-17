import React, { FC } from "react";
import Image from "next/image";
import { Data } from "../../types/data";

const Body: FC<Data> = ({ data }) => {
  console.log(data);

  return (
    <div style={{ margin: 12 }}>
      <Image src={data.poster} alt="poster" width="100%" height="100%"></Image>
    </div>
  );
};

export default Body;
