import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function oldExamsPdf() {
  const router = useRouter();
  const { src } = router.query;

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;
    (async function () {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      await PSPDFKit.load({
        container,
        document: `/docs/${src}.pdf`,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <div>
      <button className="z-50 btn outline-2 hover:bg-mainColor1 bg-mainColor1 text-white fixed top-[80px] right-1">
        <a
          className="hover:text-white"
          href={`/docs/${src}.pdf`}
          download
        >
          <i className="fa-solid fa-download"></i>
        </a>
      </button>
      <div ref={containerRef} style={{ height: "100vh" }} />
    </div>
  );
}
export async function getStaticPaths() {
  const btnsObjsArr = require("./1stApi.json");
  const paramsPaths = btnsObjsArr
    .map((obj) => obj.id)
    .map((id) => ({ params: { src: id } }));
  return {
    paths: paramsPaths,
    fallback: false,
  };
}
export async function getStaticProps(ctx) {
  return {
    props: {
      source: ctx.params.src,
    },
  };
}
