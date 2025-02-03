"use client";

import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";
import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import { useGetENSName } from "@/hooks/useGetENSName";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { blo } from "blo";
import { FaRegMoon } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import {
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import type { Wallet } from "thirdweb/wallets";
import { SideMenu } from "./SideMenu";

// Create Thirdweb Client
const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_TW_CLIENT_ID as string,
});

// Wallet Configuration
const wallets = [
  inAppWallet({
    auth: {
      options: [
        "email",
        "x",
        "google",
        "phone",
        "discord",
        "facebook",
        "apple",
        "twitch",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("xyz.abs"),
  createWallet("com.trustwallet.app"),
  createWallet("io.magiceden.wallet"),
];

export function Navbar() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { colorMode } = useColorMode();
  
  return (
    <Box py="10px" px={{ base: "20px", lg: "50px" }}>
      <Flex direction="row" justifyContent="space-between">
        {/* Branding */}
        <Box my="auto">
          <Heading
            as={Link}
            href="/"
            _hover={{ textDecoration: "none" }}
            fontWeight="extrabold"
          >
            <Box as="span" bgGradient="linear(to-l,rgb(40, 202, 99),rgb(183, 255, 0))" bgClip="text">
              Refreshmints
            </Box>

          </Heading>
        </Box>

        {/* Wallet Connection */}
        <Box display={{ lg: "block", base: "none" }}>
          {account && wallet ? (
            <ProfileButton address={account.address} wallet={wallet} />
          ) : (
            <ConnectButton
              client={client}
              wallets={wallets}
              theme={darkTheme({
                colors: {
                  accentText: "hsl(119, 100%, 60%)",
                  borderColor: "hsl(125, 76%, 45%)",
                },
              })}
              connectModal={{
                size: "wide",
                showThirdwebBranding: false,
              }}
            />
          )}
        </Box>
        
        {/* Side Menu */}
        <SideMenu />
      </Flex>
    </Box>
  );
}

function ProfileButton({
  address,
  wallet,
}: {
  address: string;
  wallet: Wallet;
}) {
  const { disconnect } = useDisconnect();
  const { data: ensName } = useGetENSName({ address });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  const { colorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton as={Button} height="56px">
        <Flex direction="row" gap="5">
          <Box my="auto">
            <FiUser size={30} />
          </Box>
          <Image
            src={ensAvatar ?? blo(address as `0x${string}`)}
            height="40px"
            rounded="8px"
          />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem display="flex">
          <Box mx="auto">
            <ConnectButton
              client={client}
              wallets={wallets}
              theme={darkTheme({
                colors: {
                  accentText: "hsl(119, 100%, 60%)",
                  borderColor: "hsl(125, 76%, 45%)",
                },
              })}
              connectModal={{
                size: "wide",
                showThirdwebBranding: false,
              }}
            />
          </Box>
        </MenuItem>
        <MenuItem as={Link} href="/profile" _hover={{ textDecoration: "none" }}>
          Profile {ensName ? `(${ensName})` : ""}
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (wallet) disconnect(wallet);
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button height="56px" w="56px" onClick={toggleColorMode} mr="10px">
      {colorMode === "light" ? <FaRegMoon /> : <IoSunny />}
    </Button>
  );
}
