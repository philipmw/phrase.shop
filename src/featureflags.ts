export const getUrlSearchParams = (from?: string) =>
  new URLSearchParams(from !== undefined ? from : window.location.search);

export const isAnimationDisabled = (urlSearchParams: URLSearchParams) =>
  urlSearchParams.get("animation") === "n";
