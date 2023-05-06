import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <Image
          src="/ymgng.PNG"
          alt="염경중학교 학생기자단"
          width={71}
          height={79}
          className="logoImage"
        />
        <h1 className="headerTitle">2023 of Yeomgyeong</h1>
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </header>
      <div className="container">
        <h1 className="reportsCategory">새 기사</h1>
        <div className="reports">
          <div className="report">
            <h2 className="reportTitle">
              염경중학교, 새로운 2023년을 맞이하다
            </h2>
            <div className="reportInfo">
              <span className="reportDate">2023. 05. 03</span>
              <span className="reporter">이은교</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
