export const APP_STORE_URL = "https://apps.apple.com/app/idSEU_APP_ID";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nydralabs.preciko";

export const YOUTUBE_TUTORIAL = "https://youtube.com/watch?v=SEU_VIDEO_ID";

export function openYoutubeTutorial() {
  window.open(YOUTUBE_TUTORIAL, "_blank");
}

export function openAppStore() {
  window.open(APP_STORE_URL, "_blank");
}

export function openPlayStore() {
  window.open(PLAY_STORE_URL, "_blank");
}
