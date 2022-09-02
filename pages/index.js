import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../component/Layout";
import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  SelectNum = (e) => {
    var cardNum = e.currentTarget.value;
    router.push({
      pathname: "/Spread",
      query: {
        choose: cardNum,
      },
    });
  };

  render() {
    return (
      // <div>
        <Layout>123</Layout>
      //  </div>
    );
  }
}
export default Home;
