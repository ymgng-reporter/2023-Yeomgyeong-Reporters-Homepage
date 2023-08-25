import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  let newReports = [
    {
      title: "염경중학교 학생기자단(구 소식지반), 동아리 개편",
      hashtags: ["#염경중학교", "#2023년", "#학생기자단"],
      date: "2023. 05. 03",
      reporter: "이은교",
      thumbnail:
        "https://storage.doopedia.co.kr/upload/_upload/comm/travelkorea/200910/24/400_125637517833670.jpg",
    },
    {
      title: "test",
      hashtags: ["#테스트", "#아", "#일하기싫다"],
      date: "2023. 05. 09",
      reporter: "이은교",
      thumbnail:
        "https://storage.doopedia.co.kr/upload/_upload/comm/travelkorea/200910/24/400_125637517840472.jpg",
    },
    {
      title: "Hello, Yeomgyeong Middle School!",
      hashtags: ["#테스트2", "#아2", "#일하기싫다2"],
      date: "2023. 05. 10",
      reporter: "이은교",
      thumbnail:
        "https://storage.doopedia.co.kr/upload/_upload/comm/travelkorea/200910/24/400_1256375178519710.jpg",
    },
  ];
  return (
    <main>
      <div className="container">
		  <h1>2023년의 염경중학교 (임시 텍스트)</h1>
      </div>
    </main>
  );
}
