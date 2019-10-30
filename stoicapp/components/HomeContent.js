import { Row, Col } from 'antd';
const HomeContent = () => {
  return (
    <div className="homeStyle">
      <p>
        Test your willpower by building stronger habits, rejecting hedonistic
        pursuits, and finding peace in your life
      </p>
      <style jsx>
        {`
          .homeStyle {
            text-align: center;
            margin-top: 64px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default HomeContent;
