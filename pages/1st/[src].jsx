import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
        document: `/1st/oldExams/${src}.pdf`,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
                 <div>
      <button className="z-50 btn outline-2 hover:border-mainColor border-mainColor hover:bg-mainColor outline-mainColor hover:outline-mainColor bg-mainColor text-white fixed top-[78px] right-0">
               
                <i className="fa-solid fa-arrow-down-to-bracket text-7xl"></i>


      </button>
      <div ref={containerRef} style={{ height: "100vh" }} />
    </div>


  );
}
