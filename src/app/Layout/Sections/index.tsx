import React from "react";
import List from "@material-ui/core/List";
import { Orders } from "./Orders";
import { Users } from "./Users";

const Sections: React.FC = () => {
  return (
    <List>
      <Orders />
      <Users />
    </List>
  );
};

export default Sections;
