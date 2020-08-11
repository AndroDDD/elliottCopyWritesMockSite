import React from "react";

function exampleLetter(e: { preventDefault: () => void }) {
  e.preventDefault();
  console.log("navigating to example letter pdf.. .. ..");
}

function portfolioPage(e: { preventDefault: () => void }) {
  e.preventDefault();
  console.log("navigating to portfolio page.. .. ..");
}

function contactPage(e: { preventDefault: () => void }) {
  e.preventDefault();
  console.log("navigating to contact page.. .. ..");
}

export { exampleLetter, portfolioPage, contactPage };
