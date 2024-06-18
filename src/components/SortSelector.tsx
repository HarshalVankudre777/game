import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSort: (sort: string) => void;
    sortOrder: string
    }

const SortSelector = ({onSelectSort, sortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-date", label: "Relased date" },
    { value: "-metacritic", label: "popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {sortOrders.find((sort) => sort.value === sortOrder)?.label || "Sort"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem key={sortOrder.value} value={sortOrder.value} onClick={() => onSelectSort(sortOrder.value)}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
