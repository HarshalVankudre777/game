import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export const GenreList = () => {
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
              <Text size={'lg'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
