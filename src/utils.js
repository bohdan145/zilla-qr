import { useEffect } from "react";

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {'iOS' | 'Android' | 'Windows Phone' | 'unknown'}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

function redirectTo() {
  const OS = getMobileOperatingSystem();

  switch (OS) {
    case "iOS":
      window.location.href =
        "https://apps.apple.com/us/app/zillagigs/id1577376464";
      break;
    case "Android":
      window.location.href =
        "https://apps.apple.com/us/app/zillagigs/id1577376464";
      break;
    default:
      window.location.href =
        "https://apps.apple.com/us/app/zillagigs/id1577376464";
  }
}

export const useRedirectToStore = () => {
  useEffect(() => {
    async function handleRedirect() {
      try {
        await navigator.clipboard.writeText("HELLO FROM ZILLA @@@@@@@");
        // redirectTo();
      } catch (e) {
        alert(e.message);
        console.log(e);
        // redirectTo();
      }
    }

    setTimeout(() => {
      // handleRedirect();
      document
        .getElementById("btn")
        .dispatchEvent(
          new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
          })
        );
    }, 1000);
  }, []);
};
