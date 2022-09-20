import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Offers from "../components/hero/Offers";
import Center from "../components/middleSection/Center";
import Right from "../components/middleSection/Right";
import Left from "../components/middleSection/Left";
import { addItems, removeItems } from "../redux/stateSlice";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [scrollPositionOfEachSection, setScrollPositionOfEachSection] = useState(
  //   []
  // );

  const items = useSelector((state) => state.counter.allItems);
  const dispatch = useDispatch();

  function handleScroll(e, index) {
    if (e.target.scrollTop > 0) {
      setCurrentIndex(index);
    }
    console.log(e.target.scrollTop);
  }

  function AddToCart(i, j) {
    dispatch(addItems(data.categories[i].products[j]));
    console.log(items);
    // console.log(data.categories[i].products[j])
  }

  const [refOfEachSection, setRefOfEachSection] = useState([]);

  useEffect(() => {
    fetch("https://myqa.fleksa.com/pyapi/26/menu")
      .then((res) => {
        return res.json();
      })
      .then((dat) => {
        // console.log(dat);
        setData(dat);
        // set the ref of each section
        setRefOfEachSection(
          dat.categories.map((category) => React.createRef())
        );
        refOfEachSection.map((ref) => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // console.log(entry.target);
                setCurrentIndex(parseInt(entry.target.id.split("-")[1]));
                console.log(currentIndex);
              }
            });
          });
          observer.observe(ref.current);
        });
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className="content">
          <div className="top-part h-[70vh] text-white">
            <div
              className="flex justify-evenly items-center h-full"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_960_720.jpg')`,
              }}
            >
              <div className="left-text">
                <div>
                  <div className=" text-5xl font-semibold">Good Taste</div>
                  Food And Drink1
                </div>
              </div>
              <div className="right-text">
                <div className=" font-bold underline uppercase  pl-4">
                  offer
                </div>
                {
                  <Offers
                    leftText="ABHOLUNG"
                    rightText="Discount of 10% on orders above 10 €"
                    thirdText="ABHOLUNG RABATT"
                  />
                }
                {
                  <Offers
                    leftText="günstig"
                    rightText="Discount of 10% on orders above 10  "
                  />
                }
                {
                  <Offers
                    leftText="Pizza"
                    rightText="Discount of 90% on orders above 0 €"
                    thirdText="90 % off on Cheeze "
                  />
                }
                {
                  <Offers
                    leftText="PIZZA50"
                    rightText="Discount of 20% on orders above 20 € 20%  "
                  />
                }
              </div>
            </div>
          </div>
          <div className="bottom-part h-screen">
            <div className=" grid md:grid-cols-3 h-full max-h-screen">
              <Left
                currentIndex={currentIndex}
                data={data}
                refOfEachSection={refOfEachSection}
              />
              <Center
                data={data}
                AddToCart={AddToCart}
                refOfEachSection={refOfEachSection}
                items={items}
              />
              <Right items={items} AddToCart={AddToCart} />
            </div>
          </div>
        </div>
      </main>

      <footer className=" bg-slate-800 text-white p-3">
        <div className="flex justify-between items-center">
          <div className="contact">
            <p>Gelastraße 92</p>
            <p>60388 Frankfurt am Main</p>
            <p>hello@fleksa.com</p>
            <p>+49 69120063308</p>
          </div>
          <div className="middle flex flex-col items-center">
            <a href="#">Online Ordering System</a>
            <p>Powered by</p>
            <a href="#">Fleksa</a>
          </div>
          <div className="logos">
            <div className="top flex justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />{" "}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-apple"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />{" "}
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />{" "}
              </svg>
            </div>
            <p>©️2021 Fleksa | Terms & Conditions | Privacy Policy | Imprint</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

