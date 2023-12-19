import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { SiDatabricks } from "react-icons/si";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <GameAttributes game={data} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={data.id} />
        <GameScreenshots gameId={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
