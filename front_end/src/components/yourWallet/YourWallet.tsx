import { Token } from "../Main"
import { Box } from '@mui/material'
import React, { useState } from "react"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { WalletBalance } from "./WalletBalance"
import { StakeForm } from "./StakeForm";

interface YourWalletProps {
    supportedTokens: Array<Token>
}

export const YourWallet = ({ supportedTokens }: YourWalletProps) => {
    const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setSelectedTokenIndex(parseInt(newValue))
    }

    return (
        <>
            <div style={{ display: 'block', justifyContent: 'center', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>Staking Protocol</h1>
                <h5 style={{ color: 'white' }}>View Your Balances & Stake</h5>
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={selectedTokenIndex.toString()}>
                    <TabList onChange={handleChange} aria-label="stake form tabs" centered>
                        {supportedTokens.map((token, index) => {
                            return (
                                <Tab label={token.name}
                                    value={index.toString()}
                                    key={index} />
                            )
                        })}
                    </TabList>
                    {supportedTokens.map((token, index) => {
                        return (
                            <TabPanel value={index.toString()} key={index}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <WalletBalance token={supportedTokens[selectedTokenIndex]} />
                                    <StakeForm token={supportedTokens[selectedTokenIndex]} />
                                </div>
                            </TabPanel>
                        )
                    })}
                </TabContext>
            </Box>
        </>
    );
}

