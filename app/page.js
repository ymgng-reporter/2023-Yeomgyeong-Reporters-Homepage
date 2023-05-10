import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const date = new Date();
  const today = `${date.getFullYear()}. ${
    date.getMonth() + 1
  }. ${date.getDate()}`;
  const dayOfWeek = date.getDay();
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <main>
      <header className="navbar">
        <Image
          src="/images/ymgng.jpg"
          alt="염경중학교 학생기자단"
          width={71}
          height={79}
          className="logoImage"
        />
        <h1 className="headerTitle">2023 of Yeomgyeong</h1>
        <div className="headerRight">
          <span className="todayDate">
            {today} ({day[dayOfWeek]})
          </span>
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        </div>
      </header>
      <hr className="headerDivider" />
      <div className="container">
        <h1 className="reportsCategory">새 기사</h1>
        <div className="reports">
          <div className="report">
            <span className="reportHashtags">
              <span className="reportHashtag">#염경중학교</span>
              <span className="reportHashtag">#2023년</span>
              <span className="reportHashtag">#학생기자단</span>
            </span>
            <h2 className="reportTitle">
              염경중학교 학생기자단(구 소식지반), 동아리 개편
            </h2>
            <div className="reportInfo">
              <span className="reportDate">2023. 05. 03</span>
              <span className="reporter">이은교</span>
            </div>
          </div>
          <div className="report">
            <span className="reportHashtags">
              <span className="reportHashtag">#테스트</span>
              <span className="reportHashtag">#아</span>
              <span className="reportHashtag">#일하기싫다</span>
            </span>
            <h2 className="reportTitle">test</h2>
            <div className="reportInfo">
              <span className="reportDate">2023. 05. 09</span>
              <span className="reporter">이은교</span>
            </div>
          </div>
		<div className="report">
		<span className="reportHashtags">
		  <span className="reportHashtag">#테스트2</span>
		  <span className="reportHashtag">#아2</span>
		  <span className="reportHashtag">#일하기싫다2</span>
		</span>
		<h2 className="reportTitle">Hello, Yeomgyeong Middle School!</h2>
		<div className="reportInfo">
		  <span className="reportDate">2023. 05. 10</span>
		  <span className="reporter">이은교</span>
		</div>
	  </div>
        </div>
      </div>
      <div className="footer">
        <hr className="footerDivider" />
        <p className="copyright">
          Developed by{" "}
          <b>
            <a href="https://github.com/eungyolee">30718 이은교</a>
          </b>
          .<br />© 2023 염경중학교 학생기자단. All rights reserved.
        </p>
      </div>
    </main>
  );
}
