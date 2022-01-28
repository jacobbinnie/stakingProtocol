import React from 'react';
import ImgMediaCard from './components/ImageCard';
import HeaderBar from './components/HeaderBar';
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, ChainId } from '@usedapp/core'
import { Container } from '@mui/material';
import { Main } from "./components/Main";
import { Box } from '@mui/material';



function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan]
    }}>
      <div></div>
      <Container disableGutters maxWidth="xl">
        <HeaderBar></HeaderBar>
        <Box sx={{ paddingTop: "200px" }}>
          <Main />
        </Box>
      </Container>

    </DAppProvider >
  );
}

export default App;

