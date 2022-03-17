import { Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Title } from "../../types/types";

const Title: FC<Title> = ({ title }) => {
  return <Text>{title}</Text>;
};

export default Title;
