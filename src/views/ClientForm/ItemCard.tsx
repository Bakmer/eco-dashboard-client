import React from "react";
import Card from "@material-ui/core/Card";
import { Dropdown } from "../../components/Dropdown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { confirmDelete } from "../../utils/confirmDelete";
import { StyledCardHeader, StyledCardContent } from "./styles";

interface ItemCardProps {
  isEditing: Boolean;
  editItem: Function;
  deleteItem: Function;
  title: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({ children, isEditing, editItem, deleteItem, title }) => {
  const menu = [
    {
      icon: <EditIcon fontSize="small" />,
      label: "Editar",
      action: () => editItem(),
    },
    {
      icon: <DeleteIcon fontSize="small" />,
      label: "Eliminar",
      action: () =>
        confirmDelete({
          action: () => deleteItem(),
          confirmText: "Eliminar?",
        }),
    },
  ];

  return (
    <Card elevation={3}>
      {!isEditing && <StyledCardHeader action={<Dropdown items={menu} />} title={title} />}
      <StyledCardContent>{children}</StyledCardContent>
    </Card>
  );
};
