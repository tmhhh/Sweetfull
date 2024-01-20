import React from "react";
import { Flex, Divider, Typography } from "antd";
const { Title } = Typography;

import styles from "../page.module.css";

function Heading() {
  return (
    <Flex className={styles.headerContainer} vertical align="center">
      <Title className={styles.header}>SWEETFULL</Title>
      <Divider className={styles.divider} />
    </Flex>
  );
}

export default Heading;
