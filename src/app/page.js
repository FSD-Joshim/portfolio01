import Agency from "@/components/Agency";
import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Layout from "@/components/Layout/Layout";
import Project from "@/components/Project";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Clients />
        <Agency />
        <Project />
        <Work />
      </Layout>
    </>
  );
}
