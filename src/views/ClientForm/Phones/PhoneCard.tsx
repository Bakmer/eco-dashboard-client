import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { ItemCard } from "../ItemCard";
import { ClientPhoneFragment, useDeletePhoneMutation, ClientFragment } from "../../../generated/graphql";
import { clientVar } from "../../../app/cache";
import { useSnackbar } from "notistack";
import { PhoneCardForm } from "./PhoneCardForm";

interface PhoneCardProps {
  phone: ClientPhoneFragment;
  client: ClientFragment;
}

export const PhoneCard: React.FC<PhoneCardProps> = ({ phone, client }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [deletePhone] = useDeletePhoneMutation({
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
      title={phone.name}
      deleteItem={() => deletePhone({ variables: { id: phone.id } })}
    >
      {isEditing ? (
        <PhoneCardForm phone={phone} client={client} closeCard={() => setIsEditing(false)} />
      ) : (
        <Typography variant="subtitle1">
          ({phone.area_code}) - {phone.phone}
        </Typography>
      )}
    </ItemCard>
  );
};
