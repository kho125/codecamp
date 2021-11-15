import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
