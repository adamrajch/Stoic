import Nav from "./nav";
import Hero from "./Hero";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
const Layout = Page => {
  return () => (
    <div className="layoutStyle">
      <Container>
        <Nav />
        <Hero />
        <Page />
        <Footer />
      </Container>
      <style jsx>
        {`
          .layoutStyle {
            background-color: tan;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
