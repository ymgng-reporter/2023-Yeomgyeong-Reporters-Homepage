import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import logoImage from "/public/images/ymgng.jpg";

export default function Header() {
  const date = new Date();
  const today = `${date.getFullYear()}. ${
    date.getMonth() + 1
  }. ${date.getDate()}`;
  const dayOfWeek = date.getDay();
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <main className="headerMain">
      <header className="navbar">
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src={logoImage}
            alt="염경중학교 학생기자단"
            className="logoImage"
          />
          <h1 className="headerTitle">2023 of Yeomgyeong</h1>
        </Link>
        <div className="headerRight">
          <span className="todayDate">
            {today} ({day[dayOfWeek]})
          </span>
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        </div>
      </header>
      <header className="navbar">
        <div className="headerLeft">
          <span className="reportsIntro">기사</span>
        </div>
        <div className="reportsCategories">
          <span id="interviewsWithTeachers" className="reportsCategory">
            선생님 인터뷰
          </span>
          <span id="educationalTravel" className="reportsCategory">
            2, 3학년 교육여행
          </span>
        </div>
      </header>
      <hr className="headerDivider" />
    </main>
  );
}
