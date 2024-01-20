import Image from "next/image";
import { Flex, Typography } from "antd";
const { Link } = Typography;

import styles from "../page.module.css";

function Footer() {
  return (
    <>
      <Flex className={styles.footer} justify="center">
        <Link
          className={styles.socialInfo}
          href="https://www.facebook.com/sweetfull23"
          target="_blank"
        >
          <Image width={47} height={47} src={"/fb-icon.png"} alt="fb" />
        </Link>
        <Link
          className={styles.socialInfo}
          href="https://www.instagram.com/_sweetfull_/"
          target="_blank"
        >
          <Image width={55} height={55} src={"/insta-icon.png"} alt="insta" />
        </Link>
        <Link
          className={styles.socialInfo}
          href="https://www.tiktok.com/@_sweetfull"
          target="_blank"
        >
          <Image width={55} height={55} src={"/tiktok-icon.png"} alt="tiktok" />
        </Link>
      </Flex>
    </>
  );
}

export default Footer;
