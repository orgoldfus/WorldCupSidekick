import { parse, format } from 'date-fns';
import Countdown from 'react-countdown';
import { Flex, Heading, Text } from '@chakra-ui/react';
import MatchThumbnail from './MatchThumbnail.js';

export default function NextMatch({ match }) {
  const nextMatchDatetime = parse(
    match.local_date,
    'MM/dd/yyyy kk:mm',
    new Date()
  );

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading mb={8}>Next match:</Heading>
      <MatchThumbnail match={match} />
      <Text mt={4} fontSize="larger">
        {format(nextMatchDatetime, 'EEEE, dd MMMM yyyy, HH:mm')}
      </Text>
      {/* <Countdown date={nextMatchDatetime} /> */}
    </Flex>
  );
}
