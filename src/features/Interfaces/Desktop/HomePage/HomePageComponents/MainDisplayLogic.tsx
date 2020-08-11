import React from "react";
import { localUrl } from "../../../../../routes/routerBlock";

function scheduleAppointment(e: { preventDefault: () => void }) {
  e.preventDefault();
  window.open(`${localUrl}schedule-appointment`, "_self");
}

function aboutPageLink(e: { preventDefault: () => void }) {
  e.preventDefault();
  window.open(`${localUrl}about`, "_self");
}

function writersBadgeLink(e: { preventDefault: () => void }) {
  e.preventDefault();
  window.open(
    "https://www.awai.com/verified/?writer=222166&auth=0a0caf",
    "_blank"
  );
}

export { scheduleAppointment, aboutPageLink, writersBadgeLink };
