import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import HomeScreen from "../screens/HomeScreen";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
