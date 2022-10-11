import { Button, makeStyles } from "@mui/material";
import { useEthers } from "@usedapp/core";

const Header = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();

  const isConnected = account !== undefined;

  return (
    <div>
      {isConnected ? (
        <Button id="metamask-connect" variant="contained" onClick={deactivate}>
          Disconnect
        </Button>
      ) : (
        <Button
          id="metamask-connect"
          color="primary"
          variant="contained"
          onClick={() => activateBrowserWallet()}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default Header;