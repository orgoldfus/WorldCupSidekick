import { Container, Flex, Text } from '@chakra-ui/react';
import MatchThumbnail from '../components/MatchThumbnail';
import { getWC22AllMatches } from '../utils/WC22Data';

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
          <MatchThumbnail match={match} />
        </Flex>
      ))}
    </Container>
  );
}

export async function getStaticProps() {
  const matches = await getWC22AllMatches();

  return {
    props: {
      data: matches
    }
  };
}

export default Matches;
