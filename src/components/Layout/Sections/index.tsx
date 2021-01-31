import React from "react";
import { Orders } from "./Orders";
import List from "@material-ui/core/List";

const Sections: React.FC = () => {
  return (
    <List>
      <Orders />
    </List>
  );
};

export default Sections;
