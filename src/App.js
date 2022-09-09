import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import BitcoinData from "./Datas/BitcoinData";
import SamsungData from "./Datas/SamsungData";
import TeslaData from "./Datas/TeslaData";
import IphoneData from "./Datas/IphoneData";

function App(props) {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <ChakraProvider>
      <Tabs
        index={tabIndex}
        onChange={handleTabsChange}
        variant="soft-rounded"
        colorScheme="purple"
        align="center"
      >
        <TabList>
          <Tab>Samsung</Tab>
          <Tab>Iphone</Tab>
          <Tab>Bitcoin</Tab>
          <Tab>Tesla</Tab>
          <Tab></Tab>
        </TabList>
        <Box align="center">
          <input
            type="range"
            min="0"
            max="3"
            value={tabIndex}
            onChange={handleSliderChange}
          />{" "}
        </Box>
        <TabPanels>
          <TabPanel>
            <h1 className="headers">News about Samsung </h1>
            <p>
              <SamsungData />
            </p>
          </TabPanel>
          <TabPanel>
            <h1 className="headers">News about Apple</h1>
            <p>
              <IphoneData />
            </p>
          </TabPanel>
          <TabPanel>
            <h1 className="headers">News about Bitcoin</h1>
            <p>
              <BitcoinData />
            </p>
          </TabPanel>
          <TabPanel>
            <h1 className="headers">News about Tesla </h1>
            <TeslaData />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}

export default App;
