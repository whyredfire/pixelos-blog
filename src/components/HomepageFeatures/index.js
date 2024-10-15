import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Bhaiest security",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        ROM is always up to date with AOSP by including the latest security
        patches the moment they come out.
      </>
    ),
  },
  {
    title: "OTA fr",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        We have our OTA updater app inside the ROM, so you wont ever miss an
        update when it comes out.
      </>
    ),
  },
  {
    title: "Community",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        We have a community group you can always contact us for any questions.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
