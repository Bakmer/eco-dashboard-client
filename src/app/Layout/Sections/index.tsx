import React from "react";
import List from "@material-ui/core/List";
import { Orders } from "./Orders";
import { Users } from "./Users";
import { Clients } from "./Clients";

const Sections: React.FC = () => {
  return (
    <List>
      <Orders />
      <Users />
      <Clients />
    </List>
  );
};

export default Sections;
