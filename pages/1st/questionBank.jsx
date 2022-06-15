import Link from "next/link";

export default function questionBanks() {
  const btnsObjsArr = require("./1stApi.json");

  return (
    <div className="w-full mt-4 pb-4 items-center flex flex-col border-b-2 ">
      <h1 className="text-center text-mainColor1 w-full text-4xl font-semibold relative">
        أختر المادة الدراسية
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="mt-4 text-mainColor1">مواد الفصل الدراسي الأول</h3>
        <div className="mt-3 w-3/5 gap-2 flex flex-wrap justify-center">
          {btnsObjsArr
            .filter((y) => y.part == "One" && y.type == "sheet")
            .map((btn) => {
              return (
                <button
                  key={Math.random()}
                  className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor"
                >
                  <Link href={`/1st/${btn.id}`}>
                    <a className="hover:text-white">{btn.content}</a>
                  </Link>
                </button>
              );
            })}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="mt-4 text-mainColor1">مواد الفصل الدراسي الثاني</h3>
        <div className="mt-3 w-3/5 gap-2 flex flex-wrap justify-center">
          {btnsObjsArr
            .filter((y) => y.part == "Two" && y.type == "sheet")
            .map((btn) => {
              return (
                <button
                  key={Math.random()}
                  className="btn outline-2 hover:border-mainColor hover:text-white border-mainColor outline-mainColor hover:outline-mainColor hover:bg-mainColor text-mainColor"
                >
                  <Link href={`/1st/${btn.id}`}>
                    <a className="hover:text-white">{btn.content}</a>
                  </Link>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
