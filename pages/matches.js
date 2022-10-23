import { Container, Flex, Text } from '@chakra-ui/react';
import TeamMatchThumbnail from '../components/TeamMatchThumbnail';

function Matches({ data }) {
  return (
    <Container>
      {data.map((match) => (
        <Flex
          key={match.id}
          direction="column"
          align="center"
          justify="center"
          mb={20}
        >
          <Text>{match.local_date}</Text>
          <Flex align="center" justify="space-between">
            <TeamMatchThumbnail
              name={match.home_team_en}
              flagUrl={match.home_flag}
            />
            <span>VS</span>
            <TeamMatchThumbnail
              name={match.away_team_en}
              flagUrl={match.away_flag}
            />
          </Flex>
        </Flex>
      ))}
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://api.cup2022.ir/api/v1/match', {
    headers: {
      Authorization: `Bearer ${process.env.WC22_API_TOKEN}`
    }
  });
  const matches = await res.json();

  return {
    props: {
      data: matches.data
    }
  };
}

export default Matches;
