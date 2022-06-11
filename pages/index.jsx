import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-bgColor flex items-center flex-col text-mainColor1 ">
      <div className="flex items-center flex-col py-48 border-b-2">
        <h1 className="text-center w-full text-4xl font-semibold  ">
          مرحباً بكم في موقع ElCaptain
        </h1>
        <p className=" mt-10 w-9/12 text-center text-2xl tracking-wide leading-9">
          موقع ElCaptain هو موقع تعليمي يخص طلاب كلية التربية الرياضية بالأخص
          جامعة أسيوط للتسهيل على الطلاب الوصول الى ما يحتاجونه.
        </p>
      </div>
      <div className="w-full mt-4 pb-4 items-center flex flex-col border-b-2 ">
        <h1 className="text-center w-full text-4xl font-semibold relative">
          عن الكلية
        </h1>
        <p className=" mt-3 w-9/12 text-center text-2xl tracking-wide leading-9">
          <span className=" font-semibold">
            كلية التربيةالرياضية جامعة أسيوط
          </span>{" "}
          أنشأت كلية التربية الرياضية عام 1980م كأول كلية للتربية الرياضية في
          صعيد مصر لإعداد الخريجين المزودين بأصول المعرفة العلمية المتخصصة في
          مجالات التعليم والإدارة والتدريب والصحة الرياضية والنفسية والمدربين
          تدريبا عاليا على مهارات رعاية المواطنين بالمؤسسات التربوية والثقافية
          في مجالات التربية البدنية العصرية واستخدام مواردها وإمكاناتها في حل
          مشكلات البيئة وخدمة القطاعات المختلفة من أجل التنمية البشرية. ويتم ذلك
          من خلال تقديم برامج دراسية متميزة في ضوء معايير عالمية وإجراء البحث
          العلمي والتطبيق والتفعيل الايجابي لدور الكلية في خدمة المجتمع وتنمية
          البيئة
        </p>
      </div>
      <div className="w-full mt-2">
        <h1 className="text-center w-full text-4xl font-semibold relative">
          المحتويات
        </h1>
        <div className="mt-8 mb-16 flex flex-wrap justify-center">
          <div className=" card w-[20%] m-4 py-8 flex items-center">
            <i className="fa-solid fa-file-pen text-7xl"></i>
            <p className=" font-semibold text-2xl mt-4">
              امتحانات الأعوام السابقة
            </p>
          </div>
          <div className=" card w-[20%] m-4 py-8 flex items-center">
            <i className="fa-solid fa-video text-7xl"></i>
            <p className=" font-semibold text-2xl mt-4">فيديوهات توضيحية </p>
          </div>
          <div className=" card w-[20%] m-4 py-8 flex items-center">
            <i className="fa-solid fa-file-circle-question text-7xl"></i>
            <p className=" font-semibold text-2xl mt-4">بنوك الأسئلة</p>
          </div>
          <div className=" card w-[20%] m-4 py-8 flex items-center">
            <i className="fa-solid fa-file-circle-exclamation text-7xl"></i>
            <p className=" font-semibold text-2xl mt-4">
              نتائج امتحانات الميدتيرم
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
