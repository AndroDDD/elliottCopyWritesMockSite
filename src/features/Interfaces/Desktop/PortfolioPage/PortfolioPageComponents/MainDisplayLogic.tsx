import React from "react";
import { localUrl } from "../../../../../routes/routerBlock";

function navigateToProject({ url }: { url: string }) {
  window.open(url, "_blank", "noopener noreferrer");
}

export { navigateToProject };
