import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing='10px'>
        {games.map((game) => (
          <GameCards key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
