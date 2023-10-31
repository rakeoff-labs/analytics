import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  Sidebar,
  Searchbar,
  Banner,
  MarketPrices,
  Footer,
  Stat,
  Graph,
} from "./Components";

const App = () => {
  return (
    <Flex>
      <Sidebar />
      <Box ml="5">
        <Banner />
        <Searchbar />
        <MarketPrices />
        <Stat />
        <Graph />
        <Footer />
      </Box>
    </Flex>
  );
};

export default App;
