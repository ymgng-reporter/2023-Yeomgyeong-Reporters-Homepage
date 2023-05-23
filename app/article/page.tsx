import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        <span className="reportHashtags">
          <span className="reportHashtag">#테스트2</span>
          <span className="reportHashtag">#아2</span>
          <span className="reportHashtag">#일하기싫다2</span>
        </span>
        <h1 className="reportTitle">Test Article</h1>
        <div className="reportInfo">
          <span className="reportDate">2023. 05. 09</span>
          <span className="reporter">이은교</span>
        </div>
        <div className="reportContent">
          <p>
            Fugiat ullamco et consequat velit aliqua ex amet ullamco sint aute.
            Aute reprehenderit consequat anim minim tempor tempor qui est nisi
            id non. Non officia incididunt qui ut reprehenderit quis occaecat.
            Id labore fugiat ad minim dolore culpa dolore. Duis excepteur
            nostrud velit deserunt duis quis. Id consequat fugiat mollit nostrud
            eu. Irure consequat qui enim aliqua nulla sunt. Sit aliqua do labore
            incididunt aute velit. Laborum officia sunt occaecat sit irure
            ullamco consectetur. Aliqua irure pariatur aliqua aliquip veniam.
            Anim minim ullamco sunt aute occaecat in velit eiusmod eu sit amet.
            Dolore in quis pariatur eu laborum quis aliquip ipsum amet. Nulla
            esse mollit id minim sit nostrud ipsum est aliqua proident. Deserunt
            fugiat anim pariatur irure officia non commodo. Lorem laborum non
            adipisicing tempor Lorem officia pariatur. Cillum magna occaecat
            aute cillum reprehenderit. Dolor excepteur nostrud non aute enim
            velit labore cillum magna excepteur. Ut dolore exercitation commodo
            fugiat laborum aliqua ut exercitation quis. Mollit ullamco velit
            excepteur voluptate incididunt duis labore aliquip consequat commodo
            ullamco est consequat. Laboris enim incididunt pariatur dolor
            occaecat sint veniam. Sit nisi pariatur voluptate do. Esse occaecat
            eu eiusmod sint. Qui nisi ea minim cillum veniam culpa et
            reprehenderit exercitation do nostrud non et. Magna proident sunt
            fugiat culpa incididunt excepteur culpa laboris excepteur deserunt.
          </p>
        </div>
      </div>
    </main>
  );
}
