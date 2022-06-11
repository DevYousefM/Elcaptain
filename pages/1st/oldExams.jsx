import Link from "next/link";
import { useRouter } from "next/router";

export default function OldExams() {
  const router = useRouter();
  return (
    <div className="w-full mt-4 pb-4 items-center flex flex-col border-b-2 ">
      <h1 className="text-center text-mainColor1 w-full text-4xl font-semibold relative">
        أختر المادة الدراسية
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="mt-4 text-mainColor1">مواد الفصل الدراسي الأول</h3>
        <div className="mt-3 w-3/5 gap-2 flex flex-wrap justify-center">
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            اساسيات المبارزة
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            اساسيات المضمار
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            اساسيات كرة القدم
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            الايقاع الحركي
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            مادة التمرينات
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            علم التشريح
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            فلسفة وتاريخ التربية الرياضية
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            مقدمة في الإدارة الرياضية
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="mt-4 text-mainColor1">مواد الفصل الدراسي الثاني</h3>
        <div className="mt-3 w-3/5 gap-2 flex flex-wrap justify-center">
          <button
            onClick={() => {
              router.push("/1st/oldSpaha");
              console.log("done");
            }}
            className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor"
          >
            <Link href={"/1st/oldSpaha"}>
              <a className="hover:text-white">اساسيات السباحة</a>
            </Link>
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            <Link href={"/1st/oldMadrp"}>
              <a className=" hover:text-white">اساسيات العاب المضرب</a>
            </Link>
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            اساسيات المصارعة
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            <Link href={"oldTayra"}>
              <a className="hover:text-white">اساسيات الكرة الطائرة</a>
            </Link>
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            الجمباز الإيقاعي
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            <Link href={"oldPhysiology"}>
              <a className="hover:text-white">فسيولوجيا الإنسان</a>
            </Link>
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            <Link href={"oldElmHaraka"}>
              <a className="hover:text-white">مبادئ علم الحركة</a>
            </Link>
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            <Link href={"oldElmNafs"}>
              <a className="hover:text-white">علم النفس الرياضي</a>
            </Link>
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            <Link href={"oldTadrees"}>
              <a className="hover:text-white">مبادئ التدريس</a>
            </Link>
          </button>
          <button className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor">
            <Link href={"oldEhsa"}>
              <a className="hover:text-white">الاحصاء التطبيقي</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
