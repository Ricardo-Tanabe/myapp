import { SearchBar } from "./components/SearchBar";
import { Html } from "./components/Html";
import { Css } from "./components/Css";
import { JavaScript } from "./components/JavaScript";
import { Npm } from "./components/Npm";
import { Git } from "./components/Git";
import { GitHub } from "./components/GitHub";
import { TailwindCss } from "./components/TailwindCss";
import { React } from "./components/React";
import { Nodejs } from "./components/Nodejs";
import { PostgreSql } from "./components/PostgreSql";
import { RestfulApis } from "./components/RestfulApis";
import { JwtAuth } from "./components/JwtAuth";
import { Redis } from "./components/Redis";
import { Linux } from "./components/Linux";
import { AwsServices } from "./components/AwsServices";
import { Monit } from "./components/Monit";
import { GitHubActions } from "./components/GitHubActions";
import { Ansible } from "./components/Ansible";
import { Terraform } from "./components/Terraform";

export default function Home() {
  return (
    <>
      <main className={`flex justify-center w-full bg-slate-100`}>
        <div className={`homepage-main`}>
          <SearchBar />
          <Html />
          <Css />
          <JavaScript />
          <Npm />
          <Git />
          <GitHub />
          <TailwindCss />
          <React />
          <Nodejs />
          <PostgreSql />
          <RestfulApis />
          <JwtAuth />
          <Redis />
          <Linux />
          <AwsServices />
          <Monit />
          <GitHubActions />
          <Ansible />
          <Terraform />
          {/* <Frontend /> */}
          {/* <Backend /> */}
          {/* <DevOps /> */}
          {/* <AWS /> */}
        </div>
      </main>
    </>
  );
}