import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { ItemCard } from "../ItemCard";
import { ClientShippingFragment, useDeletePhoneMutation, ClientFragment } from "../../../generated/graphql";
import { clientVar } from "../../../app/cache";
import { useSnackbar } from "notistack";
import { ShippingCardForm } from "./ShippingCardForm";

interface ShippingCardProps {
  shipping: ClientShippingFragment;
  client: ClientFragment;
}

export const ShippingCard: React.FC<ShippingCardProps> = ({ shipping, client }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [deleteShipping] = useDeletePhoneMutation({
    onCompleted: (res) => {
      clientVar({ ...client, phones: client.phones.filter((x) => x.id !== res.deletePhone.data.id) });
      enqueueSnackbar(res.deletePhone.message, { variant: "success" });
    },
    onError: (error) => console.log(error),
  });

  return (
    <ItemCard
      isEditing={isEditing}
      editItem={() => setIsEditing(true)}
      title={shipping.name}
      deleteItem={() => deleteShipping({ variables: { id: shipping.id } })}
    >
      {isEditing ? (
        <ShippingCardForm shipping={shipping} client={client} closeCard={() => setIsEditing(false)} />
      ) : (
        <Typography variant="subtitle1">{/* ({shipping.area_code}) - {shipping.phone} */}</Typography>
      )}
    </ItemCard>
  );
};
