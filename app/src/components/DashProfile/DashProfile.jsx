import React, { useState } from "react";

export default function DashProfile(props) {
  return (
    <div>
      <Card>
        <CardHeader
          title="Allergies"
          titleTypographyProps={{ color: "secondary" }}
        ></CardHeader>
        <List>
          <ListItem button>
            <ListItemText primary="Peanuts"></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Cats"></ListItemText>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
