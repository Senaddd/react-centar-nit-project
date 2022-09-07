import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";

const BASE_URL =
  "https://newsapi.org/v2/everything?q=Apple&from=2022-09-07&sortBy=popularity&apiKey=984004e456fc482e8198ad93914cd6c9";

function App(page) {
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  return (
    <ChakraProvider>
      <Tabs align="center" variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab>Iphone</Tab>
          <Tab>Samsung</Tab>
          <Tab>Tesla</Tab>
          <Tab>New York</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>New York</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}

export default App;
