import Head from "next/head";

const Header = () => (
  <div>
    <Head>
      <title>Aurelius</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Cinzel&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <style global jsx>
      {`
        html,
        body {
          height: 100%;
        }
      `}
    </style>
  </div>
);

export default Header;
