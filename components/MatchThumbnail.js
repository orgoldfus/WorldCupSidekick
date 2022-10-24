import { Flex } from '@chakra-ui/react';
import TeamThumbnail from './TeamThumbnail';

export default function MatchThumbnail({ match }) {
  return (
    <Flex align="center" justify="space-between">
      <TeamThumbnail name={match.home_team_en} flagUrl={match.home_flag} />
      <span>VS</span>
      <TeamThumbnail name={match.away_team_en} flagUrl={match.away_flag} />
    </Flex>
  );
}
