import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

export default function TeamMatchThumbnail({ name, flagUrl }) {
  return (
    <Flex direction="column" justify="center" align="center" w={350}>
      <Image src={flagUrl} width={62} height={41} alt="Flag" />
      <Heading>{name}</Heading>
    </Flex>
  );
}
