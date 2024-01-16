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
        "https://play.google.com/store/apps/details?id=com.gigzilla";
      break;
    default:
      window.location.href =
        "https://apps.apple.com/us/app/zillagigs/id1577376464";
  }
}

export const useRedirectToStore = () => {
  async function handleRedirect() {
    try {
      const queryParams = new URLSearchParams(window.location.search);

      const linkParams = {};
      queryParams.forEach((value, key) => (linkParams[key] = value));

      // save data from link params to device clipboard
      await navigator.clipboard.writeText(JSON.stringify(linkParams));
      redirectTo();
    } catch (e) {
      console.log(e);
      redirectTo();
    }
  }

  return { handleRedirect };
};
