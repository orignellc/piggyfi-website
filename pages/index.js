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
        <div className="bg-black relative">
          {/*<RedialGradient className="right-2/3 left-0 top-9/20 bottom-9/20" />*/}
          <DashboardCaseStudy />
          <DashboardFAQ />
        </div>
      </main>
    </Layout>
  );
}
