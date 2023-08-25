"use client"

import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Home() {
  let newReports = [
    {
      title: "염경중학교 학생기자단(구 소식지반), 동아리 개편",
      hashtags: ["#염경중학교", "#2023년", "#학생기자단"],
      date: "2023. 05. 03",
      reporter: "이은교",
      thumbnail:
        "https://storage.doopedia.co.kr/upload/_upload/comm/travelkorea/200910/24/400_125637517833670.jpg",
    }
  ];
	useEffect(() => {
		const reportCategories = window.location.search.slice('=')[1]
  console.log(reportCategories);
	});
  return (
    <main>
      <div className="container">
        <h1 className="newReports"></h1>
        <div className="reports">
          {newReports.map((report, i) => {
            return (
              <div className="report" key={i}>
                <div className="reportThumbnail">
                  <img
                    src={report.thumbnail}
                    alt="기사 썸네일"
                    className="reportThumbnailImage"
                  />
                </div>
                <div className="reportHashtags">
                  {report.hashtags.map((hashtag) => {
                    return <span className="reportHashtag">{hashtag}</span>;
                  })}
                </div>
                <h2 className="reportTitle">{report.title}</h2>
                <div className="reportInfo">
                  <span className="reportDate">{report.date}</span>
                  <span className="reporter">{report.reporter}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
