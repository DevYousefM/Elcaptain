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
      <button className="z-50 btn outline-2 hover:bg-mainColor1 bg-mainColor text-white fixed top-[76px] right-0">
       <Link href={`/1st/oldExams/${src}.pdf`} download>
          <a className="hover:text-white">
            <i class="fa-solid fa-download"></i>{" "}
          </a>
        </Link>
      </button>
      <div ref={containerRef} style={{ height: "100vh" }} />
    </div>


  );
}
