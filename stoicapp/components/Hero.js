import { Typography } from "antd";
import Container from "@material-ui/core/Container";
import Quote from "./Quote";
const { Title, Text } = Typography;
const Hero = () => {
  return (
    <Container>
      <div className="hero">
        <Title underline> Aurelius </Title>
        <Title level={3}>Simple Stoic App</Title>
        {/* <Quote /> */}
      </div>
      <style jsx>
        {`
          .hero {
            text-align: center;
          }
        `}
      </style>
    </Container>
  );
};
export default Hero;
