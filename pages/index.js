import { groupBy } from 'lodash';
import { parse } from 'date-fns';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Flex, Text, Heading } from '@chakra-ui/react';
import NextMatch from '../components/NextMatch';
import { getWC22AllMatches, getWC22AllTeams } from '../utils/WC22Data';

function Home({ nextMatch, groups }) {
  return (
    <Container>
      <Head>
        <title>WC22 Sidekick</title>
        <meta name="description" content="Your sidekick for World Cup 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NextMatch match={nextMatch} />
        <Flex wrap="wrap" gap="50px 30px">
          {groups.map(([group, teams]) => (
            <Flex direction="column" key={group}>
              <Heading size="sm">Group {group}</Heading>
              <Flex direction="column">
                {teams.map((team) => (
                  <Flex key={team.id} mb={4}>
                    <Image
                      src={team.flag}
                      alt={`${team.name} flag`}
                      width={42}
                      height={28}
                    />
                    <Text ml={4}>{team.name_en}</Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </main>

      <footer></footer>
    </Container>
  );
}

export async function getStaticProps() {
  const teams = await getWC22AllTeams();
  const groups = Object.entries(groupBy(teams, 'groups')).sort(
    (groupA, groupB) => (groupA[0] < groupB[0] ? -1 : 1)
  );

  const matches = await getWC22AllMatches();
  const unfinishedMatches = matches
    .filter((match) => match.finished === 'FALSE')
    .sort((matchA, matchB) => {
      return (
        parse(matchA.local_date, 'MM/dd/yyyy kk:mm', new Date()) -
        parse(matchB.local_date, 'MM/dd/yyyy kk:mm', new Date())
      );
    });

  return {
    props: {
      nextMatch: unfinishedMatches[0],
      groups
    }
  };
}

export default Home;
