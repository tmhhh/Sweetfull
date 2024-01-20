import Image from "next/image";
import { Flex, Carousel } from "antd";
import { products } from "../data/mock";

import styles from "../page.module.css";

function Body({ onOpenModal }) {
  if (Object.keys(products).length % 2 !== 0) {
    products["Empty"] = [];
  }
  return (
    <Flex wrap="wrap" gap="large" justify="center">
      {Object.keys(products).map((product, i) => {
        return (
          <div className={styles.carouselWrapper} key={i}>
            <Carousel
              className={styles.carousel}
              style={i % 2 && { transform: "translateY(50%)" }}
              dots={false}
              autoplay={true}
              draggable
            >
              {products[product].map(
                ({ coverSrc, nutrientSrc }, productCate) => (
                  <div className={styles.productWrapper} key={productCate}>
                    <Image
                      src={coverSrc}
                      fill
                      alt={coverSrc}
                      onClick={() => onOpenModal(nutrientSrc)}
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>
        );
      })}
    </Flex>
  );
}

export default Body;
