"use client";
import Image from "next/image";
import { useState } from "react";

import { Modal, Col, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import styles from "./page.module.css";
import { Body, Footer, Heading } from "./components";
export default function Home() {
  const [chosenProductNutrients, setChosenProductNutrients] = useState(null);

  const handleOpenProduct = (productNutrientsSrc) => {
    setChosenProductNutrients(productNutrientsSrc);
  };

  const handleCloseProduct = () => {
    setChosenProductNutrients(null);
  };
  return (
    <Row>
      <Col xs={0} sm={4} md={6} lg={8} xl={8} />
      <Col xs={24} sm={16} md={12} lg={8} xl={7}>
        <main className={styles.main}>
          <Heading />

          <Body
            onOpenModal={handleOpenProduct}
            onCloseModal={handleCloseProduct}
          />

          <Footer />

          <Modal
            onCancel={handleCloseProduct}
            open={chosenProductNutrients !== null}
            closeIcon={false}
            centered
            footer={null}
          >
            <>
              <CloseOutlined
                className={styles.closeIcon}
                onClick={handleCloseProduct}
              />
              <div className={styles.nutrientImageWrapper}>
                <Image
                  style={{ objectFit: "scale-down" }}
                  key={chosenProductNutrients}
                  src={chosenProductNutrients}
                  fill
                  alt={chosenProductNutrients}
                />
              </div>
            </>
          </Modal>
        </main>
      </Col>
      <Col xs={0} sm={4} md={6} lg={8} xl={8} />
    </Row>
  );
}
