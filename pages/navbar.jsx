import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed w-full z-50" style={{ direction: "ltr" }}>
      <nav className=" relative w-full shadow text-lg font-semibold navbar navbar-expand-lg navbar-dark py-3 bg-mainColor">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ direction: "rtl" }}
            >
              <li className="nav-item cursor-pointer">
                <Link href={"/"}>
                  <a className="nav-link active">الصفحة الرئيسية</a>
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle active"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الامتحانات السابقة
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href={"/1st/oldExams"}>
                      <a className="dropdown-item cursor-pointer">
                        الفرقة الأولى
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/2st/oldExams"}>
                      <a className="dropdown-item cursor-pointer">
                        الفرقة الثانية
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/3st/oldExams"}>
                      <a className="dropdown-item cursor-pointer">
                        الفرقة الثالثة
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الرابعة
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle active"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  بنوك الأسئلة
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link href={"/1st/questionBank"}>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الأولى
                    </a>
                  </Link>
                  <li>
                    <Link href={"/2st/questionBank"}>
                      <a className="dropdown-item cursor-pointer">
                        الفرقة الثانية
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الثالثة
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الرابعة
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle active"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  نتائج امتحانات الميدتيرم
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href={"/1st/examsResult"}>
                      <a className="dropdown-item cursor-pointer">
                        الفرقة الأولى
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الثانية
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الثالثة
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الرابعة
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle active"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  فيديوهات توضيحية
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href={"/1st/videos"}>
                      <a className="dropdown-item cursor-pointer">
                        الفرقة الأولى
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الثانية
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الثالثة
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item cursor-pointer">
                      الفرقة الرابعة
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <Link href={"/"}>
          <a className="navbar-brand">ElCaptain</a>
        </Link>
      </nav>
    </div>
  );
}
