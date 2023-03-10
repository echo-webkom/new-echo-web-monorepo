import {type ReactNode, useEffect, useState} from "react";
import {WebsiteBanner} from "./Banner";
import {Header, Footer} from "@/components";
import {fetchBanner} from "@/api/banner";

interface Props {
  children: ReactNode;
}

export const Layout = ({children}: Props) => {
  const [banner, setBanner] = useState<Awaited<ReturnType<typeof fetchBanner>>>(null);

  useEffect(() => {
    const setBannerMessage = async () => {
      const banner = await fetchBanner();
      setBanner(banner);
    };

    void setBannerMessage();
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        <WebsiteBanner banner={banner} />
        <Header />
        <main className="my-10">{children}</main>
        <Footer className="mt-auto" />
      </div>
    </>
  );
};
