import React from "react";

import { EmptyLayout, Container } from "./../../../components";

import { HeaderAuth } from "../../../__components/Pages/HeaderAuth";

const ComingSoon = () => (
  <Container>
    <EmptyLayout.Section center>
      <HeaderAuth title="Coming Soon" icon="clock-o" text="..." />
    </EmptyLayout.Section>
  </Container>
);

export default ComingSoon;
