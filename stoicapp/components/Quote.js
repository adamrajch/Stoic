import { Typography } from "antd";
// import fetch from "isomorphic-unfetch";
import Link from "next/link";
const { Title, Text } = Typography;
console.log("hello");

const Quote = () => {
  const [todaysQuote, setQuote] = React.useState(null);
  const [todaysAuthor, setAuthor] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      const yeet = await fetch(`http://quotes.rest/qod.json?category=inspire`);
      const data = await yeet.json();
      console.log(data.contents.quotes[0].quote);

      setQuote(data.contents.quotes[0].quote);
      setAuthor(data.contents.quotes[0].author);
    }
    fetchData();
  }, []);

  return (
    <div className="quotesStyle">
      <Title level={2} underline>
        {" "}
        Daily Quote{" "}
      </Title>
      <Title level={4}> {todaysQuote} </Title>
      <Title level={4}> {todaysAuthor} </Title>
      <style jsx>
        {`
          .quotesStyle {
            margin-top: 64px;
          }
        `}
      </style>
    </div>
  );
};

export default Quote;
