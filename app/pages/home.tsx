"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="mb-2">Hi, my name is </h2>
      <h1 className="mb-8 custom-heading">Joseph Rana</h1>
      <p className="mb-4">
        {`I am a full stack developer with experience building scalable web applications and CI/CD pipelines.
            Currently I am a developer at `}
        <Link href={"https://sireto.io"} target="_blank">
          <span className="link">Sireto Technology</span>
        </Link>
        {` working on different projects related to the Cardano Blockchain .`}
      </p>
    </>
  );
}
