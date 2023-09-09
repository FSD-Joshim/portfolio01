import AboutUs from "@/components/About";
import Agency from "@/components/Agency";
import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Layout from "@/components/Layout/Layout";
import Partners from "@/components/Partners";
import Project from "@/components/Project";
import Subscribe from "@/components/Subscribe";
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
        <Partners />
        <AboutUs />
        <Subscribe />
      </Layout>
    </>
  );
}
