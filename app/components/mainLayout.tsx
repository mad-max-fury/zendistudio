import FloatingNav from "./FloatingNav";
import Footer from "./footer";

type MainLayoutProps = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-col items-center">
      <FloatingNav />
      {children}
      <Footer />
    </main>
  );
}
