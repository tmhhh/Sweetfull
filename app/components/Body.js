import Image from "next/image";
import { Flex, Carousel } from "antd";
import { products } from "../data/mock";

import styles from "../page.module.css";

function Body({ onOpenModal }) {
  return (
    <Flex className={styles.carouselContainer}>
      {Object.keys(products).map((product, i) => {
        return (
          <div className={styles.carouselWrapper} key={i}>
            <Carousel
              key={i}
              className={styles.carousel}
              autoplay={true}
              draggable
            >
              {products[product].map(
                ({ coverSrc, nutrientSrc }, productCate) => (
                  <div className={styles.productWrapper} key={productCate}>
                    <Image
                      priority
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
