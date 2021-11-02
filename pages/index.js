import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  DashboardHero,
  DashboardFeatures,
  DashboardHow,
  Layout,
  DashboardCaseStudy,
  DashboardFAQ,
  RedialGradient,
} from "../src/components";

export default function Home() {
  return (
    <Layout>
      <main>
        <DashboardHero />
        <DashboardFeatures />
        <DashboardHow />
        <DashboardCaseStudy />
        <DashboardFAQ />
      </main>
    </Layout>
  );
}
