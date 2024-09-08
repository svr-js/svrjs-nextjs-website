"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
const MATOMO_URL = `${process.env.NEXT_PUBLIC_MATOMO_URL}`;
const MATOMO_SITE_ID = `${process.env.NEXT_PUBLIC_MATOMO_SITE_ID}`;
let firstUseEffect = true;
let firstUseEffect2 = true;
let secondUseEffect2 = true;

export default function AuthProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (firstUseEffect2) {
      firstUseEffect2 = false;
      return;
    }
    if (secondUseEffect2) {
      secondUseEffect2 = false;
      return;
    }

    // Track page view
    const _paq = ((window as any)._paq = (window as any)._paq || []);
    _paq.push(["setDocumentTitle", document.title]);
    _paq.push(["trackPageView"]);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (firstUseEffect) {
      firstUseEffect = false;
    } else {
      return;
    }

    // Matomo tracking code
    const _paq = ((window as any)._paq = (window as any)._paq || []);
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["disableCookies"]);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    (function () {
      const u = MATOMO_URL + "/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", MATOMO_SITE_ID]);
      const d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = u + "matomo.js";
      (s.parentNode as ParentNode).insertBefore(g, s);
    })();
  }, []);

  return null;
}
