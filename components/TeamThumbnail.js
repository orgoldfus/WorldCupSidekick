import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

export default function TeamThumbnail({ name, flagUrl }) {
  return (
    <Flex direction="column" justify="center" align="center" w={350}>
      <Image src={flagUrl} width={62} height={41} alt="Flag" />
      <Heading
        size="md"
        mt={4}
        as="a"
        href={`https://wikipedia.org/wiki/${name}`}
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: 'green.300' }}
      >
        {name}
      </Heading>
    </Flex>
  );
}
