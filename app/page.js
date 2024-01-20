"use client";
import Image from "next/image";
import { useState } from "react";

import { Modal } from "antd";

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
    <main className={styles.main}>
      <Heading />

      <Body onOpenModal={handleOpenProduct} onCloseModal={handleCloseProduct} />

      <Footer />

      <Modal
        onCancel={handleCloseProduct}
        open={chosenProductNutrients !== null}
        closable
        centered
        footer={null}
      >
        <div className={styles.nutrientImageWrapper}>
          <Image
            src={chosenProductNutrients}
            fill
            alt={chosenProductNutrients}
          />
        </div>
      </Modal>
    </main>
  );
}
