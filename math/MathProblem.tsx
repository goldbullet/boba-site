import React from 'react';
import { Text, HStack, Input, Box } from '@chakra-ui/react';
import { Math } from '../utils';

export default ({ first, operator, second }: Math) => {
  return (
    <HStack spacing="2px" fontSize="2xl" p={1}>
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
