import Quote from "./Quote";
const Footer = () => (
  <div className="footerStyle">
    <Quote />
    <div className="adamFoot"> Made by Adam Rajchwald</div>
    <style jsx>{`
      .footerStyle {
        text-align: center;
        font-weight: bold;
        left: 0;
        bottom: 0;
        position: fixed;
        padding: 16px;
        width: 100%;
        font-size: 12px;
      }
      .adamFoot {
        margin-top: 36px;
        font-size: 10px;
      }
    `}</style>
  </div>
);

export default Footer;
