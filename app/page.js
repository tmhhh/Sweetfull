"use client";
import Image from "next/image";
import { useState } from "react";

import { Modal } from "antd";

import { Body, Footer, Heading } from "./components";
import styles from "./page.module.css";
export default function Home() {
  const [chosenProductNutrients, setChosenProductNutrients] = useState(null);

  const handleOpenProduct = (productNutrientsSrc) => {
    setChosenProductNutrients(productNutrientsSrc);
  };

  const handleCloseProduct = () => {
    setChosenProductNutrients(null);
  };
  return (
    <>
      <main className={styles.main}>
        <Heading />

        <Body
          onOpenModal={handleOpenProduct}
          onCloseModal={handleCloseProduct}
        />

        <Footer />
      </main>
      <Modal
        onCancel={handleCloseProduct}
        open={chosenProductNutrients !== null}
        className={styles.content}
        centered
        footer={null}
        getContainer={false}
      >
        <Image
          key={chosenProductNutrients}
          src={chosenProductNutrients}
          fill
          alt={chosenProductNutrients}
        />
      </Modal>
    </>
  );
}
