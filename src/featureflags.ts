export const getUrlSearchParams = (from?: string) =>
  new URLSearchParams(from !== undefined ? from : window.location.search);

export const isAnimationEnabled = (urlSearchParams: URLSearchParams) =>
  urlSearchParams.get("animation") === "y";
