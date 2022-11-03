import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@orgName/master-nav",
  () => System.import("@orgName/master-nav"),
  isActive.nav,
  { domElement: document.getElementById("containerNav") }
);

registerApplication(
  "@orgName/demo-micro-frontends-app-team-1",
  () => System.import("@orgName/demo-micro-frontends-app-team-1"),
  isActive.appTeam1,
  { domElement: document.getElementById("containerAppTeam1") }
);

registerApplication(
  "@orgName/demo-micro-frontends-app-team-2",
  () => System.import("@orgName/demo-micro-frontends-app-team-2"),
  isActive.appTeam2,
  { domElement: document.getElementById("containerAppTeam2") }
);

start();
