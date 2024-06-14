import { Box } from "@chakra-ui/react";
import  { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div>
      <Box borderRadius={10} overflow="hidden" width={"300px"}>
        {children}
      </Box>
    </div>
  );
};

export default GameCardContainer;
