import React, { FC } from "react";
import Image from "next/image";
import { Data } from "../../types/types";
import Poster from "../Poster/Poster";
import { Center, Stack } from "@chakra-ui/react";
import Title from "../Title/Title";

const Body: FC<Data> = ({ data }) => {
  console.log(data);

  return (
    <div style={{ margin: 12 }}>
      <Stack direction="row">
        <Center width="45%" padding="10">
          <Poster imgUrl={data.poster} />
        </Center>
        <Center>
          <Title title={data.title} />
        </Center>
      </Stack>
    </div>
  );
};

export default Body;
