import React from 'react';
import { Text, HStack, Input, Box, Image } from '@chakra-ui/react';
import { Math } from '../utils';

export default ({ first, operator, second }: Math) => {
  return (
    <HStack spacing="2px" fontSize="3xl" p={1} fontWeight={600}>
      <Image
        src="http://cdn.shopify.com/s/files/1/0024/4370/6412/products/The_Milk_Tea_With_Boba_Sticker_-_Product_Image_1024x.jpg?v=1538448398"
        boxSize={14}
      />
      <Box width={6}>
        <Text>{first}</Text>
      </Box>
      <Box width={6}>
        <Text>{operator}</Text>
      </Box>
      <Box width={6}>
        <Text>{second}</Text>
      </Box>
      <Box width={10}>
        <Text>=</Text>
      </Box>
      <Box width={20}>
        <Input variant="filled" width={14} p={2} type="number" min={1} />
      </Box>
    </HStack>
  );
};
