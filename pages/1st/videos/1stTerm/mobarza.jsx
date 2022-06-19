export default function mobarza() {
  let pageContent = require("./videosAPI_T1.json");
  return (
    <div className=" mt-4">
      <h1 className=" mb-4 text-center text-mainColor w-full text-4xl font-semibold relative">
        المهارات الاساسية لرياضة {pageContent[0].subject}
      </h1>
      {pageContent
        .filter((x) => x.subject == "المبارزة")
        .map((item) => {
          return (
            <div
              key={Math.random()}
              className="mx-5 mb-5 flex-col flex justify-center"
            >
              <div className=" bg-gray-100 py-3  my-2 px-4">
                <h1 className="text-xl font-semibold text-mainColor1">
                  {item.skill}
                </h1>
              </div>
              <iframe
                height="635"
                src={item.videoLink}
                allow="accelerometer; clipboard-write; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
    </div>
  );
}
