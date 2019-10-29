import Nav from "./nav";
import Container from "@material-ui/core/Container";

const Layout = Page => {
  return () => (
    <Container>
      <Nav />
      <div>Aurelius</div>
      <Page />
    </Container>
  );
};

export default Layout;
