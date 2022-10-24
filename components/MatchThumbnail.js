import { Flex, Text } from '@chakra-ui/react';
import TeamThumbnail from './TeamThumbnail';

export default function MatchThumbnail({ match }) {
  return (
    <Flex align="center" justify="space-between" maxW={600}>
      <TeamThumbnail name={match.home_team_en} flagUrl={match.home_flag} />
      <Text fontSize="2xl" fontWeight={500}>
        VS
      </Text>
      <TeamThumbnail name={match.away_team_en} flagUrl={match.away_flag} />
    </Flex>
  );
}
