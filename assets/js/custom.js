let toggleDebugInfoButton = document.getElementById("toggle-debug-info");
toggleDebugInfoButton.addEventListener("click", toggleDebugInfo);

function toggleDebugInfo() {
  const HIDDEN = "hidden";
  let debugInfoDiv = document.getElementById("debug-info");
  if (debugInfoDiv.hasAttribute(HIDDEN)) {
    debugInfoDiv.removeAttribute(HIDDEN);
  } else {
    debugInfoDiv.setAttribute(HIDDEN, "");
  }
}