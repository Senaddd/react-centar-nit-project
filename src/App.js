import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function App() {
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
