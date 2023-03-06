import Image from "next/image";

import {Button, Layout} from "@/components";
import {fetchEventPreviews} from "@/api";

const HomePage = () => {
  return (
    <Layout>
      <section className="container mx-auto flex items-center justify-between px-20">
        <div className="relative h-64 w-64">
          <Image
            height={512}
            width={512}
            alt="logo"
            src="/images/android-chrome-512x512.png"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl">echo - linjeforeningen for informatikk</h2>
          <div>
            <Button>Arrangementer</Button>
            <Button>For bedrifter</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const eventPreviews = await fetchEventPreviews("BEDPRES", 30);

  return {
    props: {
      eventPreviews,
    },
  };
};

export default HomePage;
