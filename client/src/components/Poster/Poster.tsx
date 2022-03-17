import React, { FC } from "react";
import Image from "next/image";
import { Poster } from "../../types/types";

const Poster: FC<Poster> = ({ imgUrl }) => {
  return (
    <div>
      <Image src={imgUrl} alt="poster" width="200" height="275"></Image>
    </div>
  );
};

export default Poster;
