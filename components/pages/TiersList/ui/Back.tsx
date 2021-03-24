import { mdiArrowLeft } from "@mdi/js";
import { useTranslation } from "next-i18next";
import React from "react";
import Svg from "../../../ui/Svg";
import styles from "./Back.module.css";

interface Props {
  [key: string]: never;
}

const Back: React.FC<Props> = () => {
  const { t } = useTranslation("priority-list");

  return (
    <div className={styles.Back}>
      <a href="/tiers-list" className={styles.Link}>
        <Svg d={mdiArrowLeft} />

        {t("label-back")}
      </a>
    </div>
  );
};

export default Back;
