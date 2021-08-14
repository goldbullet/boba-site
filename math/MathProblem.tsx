import React from 'react';
import { Text, HStack, Input, Box, Image } from '@chakra-ui/react';
import { Math } from '../utils';

export default ({ first, operator, second }: Math) => {
  return (
    <HStack spacing="2px" fontSize="3xl" p={1} fontWeight={600}>
      <Box width={10} textAlign="right">
        <Text>{first}</Text>
      </Box>
      <Box width={6} textAlign="center">
        <Text>{operator}</Text>
      </Box>
      <Box width={10}>
        <Text>{second}</Text>
      </Box>
      <Box width={8}>
        <Text>=</Text>
      </Box>
      <Box width={20}>
        <Input variant="filled" width={14} p={2} type="number" min={1} />
      </Box>
    </HStack>
  );
};
