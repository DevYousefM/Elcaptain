export default function Footer() {
  return (
    <div className="fixed bottom-0 py-2 w-full flex flex-col items-center bg-gray-200">
      <footer className=" text-xl font-semibold d-flex w-4/5 flex-wrap justify-content-between align-items-center my-2">
        <div className="col-md-4 flex items-center">
          <span className="flex " style={{ direction: "ltr" }}>
            <div className="text-center text-black font-semibold flex items-center">
              <span className="text-2xl leading-[0]">© </span>
              <span>2022 Copyright:</span>
              <a className="text-mainColor ml-2" href="/">
                Yousef Mohamed
              </a>
            </div>
          </span>
        </div>
        <ul className="nav text-2xl col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-2">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="ms-2">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="ms-2">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
