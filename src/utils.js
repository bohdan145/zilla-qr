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

function redirectTo(queryParams) {
  // window.location.href = "https://zilla.page.link/referral";
  // window.location.href = "https://zilla.page.link/referral?id=zcm1Vlddk9asd09";
  window.location.href = `https://zilla.page.link/?link=https://zilla.page.link/referral?${queryParams}&apn=com.gigzilla&isi=1577376464&ibi=gigzilla&efr=1`;

  // setTimeout(() => {
  //   if (isTabActive === false) return;
  //   switch (OS) {
  //     case "iOS":
  //       window.location.href =
  //         "https://apps.apple.com/us/app/zillagigs/id1577376464";
  //       break;
  //     case "Android":
  //       window.location.href =
  //         "https://play.google.com/store/apps/details?id=com.gigzilla";
  //       break;
  //     default:
  //       window.location.href =
  //         "https://apps.apple.com/us/app/zillagigs/id1577376464";
  //   }
  // }, 1000);
}

export const useRedirectToStore = () => {
  async function handleRedirect() {
    const queryParams = new URLSearchParams(window.location.search);
    const linkParams = {};
    queryParams.forEach((value, key) => (linkParams[key] = value));
    try {
      // save data from link params to the device clipboard
      await navigator.clipboard.writeText(JSON.stringify(linkParams));
      redirectTo(queryParams.toString());
    } catch (e) {
      console.log(e);
      redirectTo(queryParams.toString());
    }
  }

  return { handleRedirect };
};
