import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image boxSize={'32px'} src = { getCroppedImageUrl(genre.image_background)} alt={genre.name} />
              <Button onClick={() => onSelectGenre(genre)} size={'lg'} variant={'link'}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
