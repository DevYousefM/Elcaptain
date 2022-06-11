import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function oldExamsPdf() {
  const router = useRouter();
  const { src } = router.query;
  const containerRef = useRef(null);

  console.log(router.query.src);
  useEffect(() => {
        if (typeof window !== "undefined") {

    const container = containerRef.current;
    let PSPDFKit;
  console.log(router.query.src);
    (async function () {
        console.log(router.query.src);
      PSPDFKit = await import("pspdfkit");
      
      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }
        console.log(router.query.src);
      await PSPDFKit.load({
        container,
      document: `/1st/oldExams/${src}.pdf`,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
        }
    console.log(router.query.src);
  }, []);
  return (
    <div>
      <button className="z-50 btn outline-2 hover:bg-mainColor1 bg-mainColor1 text-white fixed top-[80px] right-1">
        <a
          className="hover:text-white"
          href={`/1st/oldExams/${src}.pdf`}
          download
        >
          <i className="fa-solid fa-download"></i>{" "}
        </a>
      </button>
      <div ref={containerRef} style={{ height: "100vh" }} />
    </div>
  );
}
