import Header from "../_components/Header";
import Footer from "../_components/Footer";
const authLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <html>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default authLayout;
