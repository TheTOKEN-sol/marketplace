
"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex>
      <Box mt="14px" m="auto">
        <Flex direction="column" gap="4">
          <Flex
            direction="row"
            wrap="wrap"
            mt="10px"
            gap="5"
            justifyContent="space-evenly"
          >
            {NFT_CONTRACTS.map((item) => (
              <Box
                as={Link}
                _hover={{ textDecoration: "none" }}
                key={item.address}
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
                role="group" // Important for hover effect to work
                textAlign="center"
              >
                <Box position="relative" w="50px" h="50px" m="auto">
                  {/* Image */}
                  <Image
                    src={item.thumbnailUrl}
                    boxSize="50px"
                    borderRadius="full"
                  />

                  {/* Tooltip (Appears Below) */}
                  <Text
                    position="absolute"
                    top="100%"
                    left="50%"
                    transform="translateX(-50%)"
                    bg="rgba(0, 0, 0, 0.7)"
                    color="white"
                    p="4px 8px"
                    borderRadius="4px"
                    fontSize="12px"
                    mt="4px"
                    whiteSpace="nowrap"
                    opacity="0"
                    transition="opacity 0.2s ease-in-out"
                    pointerEvents="none"
                    _groupHover={{ opacity: 1 }}
                  >
                    {item.title}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
