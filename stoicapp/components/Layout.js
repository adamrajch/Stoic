import Nav from "./nav";
import Hero from "./Hero";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
const Layout = Page => {
  return () => (
    <Container>
      <Nav />
      <Hero />
      <Page />
      <Footer />
    </Container>
  );
};

export default Layout;
