import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./container";

export default function Page(props) {
  const [framed, setFramed] = useState(false);

  useEffect(() => {
    setFramed(window.frameElement ? true : false);
  }, []);

  const head = (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Halant:wght@300;400;500;600;700&family=Josefin+Sans:ital,wght@0,300;0,500;1,300;1,500&display=swap"
        rel="stylesheet"
      />
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <title>Joshua Tazman Reinier: {props.title}</title>
      <link href="/img/favicon.png" rel="icon"></link>
    </Head>
  );

  return (
    <>
      {framed ? (
        <>
          {head}
          {props.children[0]}
          <Container>{props.children.slice(1)}</Container>
        </>
      ) : (
        <>
          {head}
          <div className="fixed bg-semiblack-800 j-shadow-800 border-white h-header flex flex-row w-full items-center pt-2 z-40">
            <Link href="/">
              <div
                style={{ width: "300px", maxWidth: "50%" }}
                className="d-flex items-center h-full"
              >
                <img
                  src="/img/logo.png"
                  className="px-2"
                  width="100%"
                  height="auto"
                />
              </div>
            </Link>
            <p className="hidden sm:inline-block text-xs">
              <i>sound • text • multimedia</i>
            </p>
            {/* <a className="absolute right-4 text-xl font-semibold font-sans">
          about
        </a> */}
          </div>
          <div
            className={`pt-header min-h-screen ${
              props.noPadding ? "" : "px-2"
            }`}
          >
            {props.children[0]}
            <Container>
              {props.children.slice(1)}
              <Link href="/">
                <button className="border border-white rounded font-sans font-semibold w-full bg-semiblack-500 z-10 max-w-xl mx-auto block accent">
                  home
                </button>
              </Link>
            </Container>
          </div>
        </>
      )}
    </>
  );
}
