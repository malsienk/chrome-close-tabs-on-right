chrome.action.onClicked.addListener(function (currentTab) {
  chrome.tabs.query({ currentWindow: true }, (tabs) =>
    chrome.tabs.remove(
      tabs
        .slice(currentTab.index + 1, tabs.length)
        .filter((tab) => !tab.pinned)
        .map((tab) => tab.id)
    )
  );
});
