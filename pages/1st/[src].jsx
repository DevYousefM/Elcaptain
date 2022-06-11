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
    <div className="pt-[72px]">
      <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
        <Link href={`/1st/oldExams/${src}.pdf`}>
          <a className=" hover:text-white">لتحميل الملف اضغط هنا</a>
        </Link>
      </button>
      <div ref={containerRef} style={{ height: "100vh" }} />
    </div>
  );
}
