import { parse } from 'date-fns';
import Countdown from 'react-countdown';
import { Flex, Heading, Button } from '@chakra-ui/react';
import MatchThumbnail from './MatchThumbnail.js';

export default function NextMatch({ match }) {
  return (
    <Flex direction="column">
      <Heading>Next match:</Heading>
      <MatchThumbnail match={match} />
      <span>{match.local_date}</span>
      {/* <Countdown
        date={parse(match.local_date, 'MM/dd/yyyy kk:mm', new Date())}
      /> */}
      <Button>All games</Button>
    </Flex>
  );
}
