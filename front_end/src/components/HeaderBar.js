import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

export default function ButtonAppBar() {
    const { activateBrowserWallet, account, deactivate } = useEthers()
    const etherBalance = useEtherBalance(account)
    const isConnected = account !== undefined

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color='transparent' position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    {isConnected ? (
                        <Button variant="outlined" color="inherit" onClick={deactivate}>Disconnect Wallet</Button>
                    ) : (
                        <Button variant="outlined" color="inherit" onClick={() => activateBrowserWallet()}>Connect Wallet</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}