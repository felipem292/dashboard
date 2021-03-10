import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export const EmptyCard = ({ title, children }) => {
  return (
    <Card body>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{children}</CardText>
    </Card>
  );
};
