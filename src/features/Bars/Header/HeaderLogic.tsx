import React from "react";
import { localUrl } from "../../../routes/routerBlock";

function handleLogin() {
  console.log("navigating to Login screen.. .. ..");
}

function handleHome() {
  window.open(`${localUrl}`, "_self");
}

function handleAbout() {
  window.open(`${localUrl}about`, "_self");
}

function handlePortfolio() {
  window.open(`${localUrl}portfolio`, "_self");
}

function handleServices() {
  window.open(`${localUrl}services`, "_self");
}

function handleScheduleAppointment() {
  window.open(`${localUrl}schedule-appointment`, "_self");
}

function handleContact() {
  window.open(`${localUrl}contact`, "_self");
}

export {
  handleLogin,
  handleHome,
  handleAbout,
  handlePortfolio,
  handleServices,
  handleContact,
  handleScheduleAppointment,
};
