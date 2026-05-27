import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary redirect: while Anedot is being set up, the new site's
  // Donate button + every /donate link funnels traffic to the existing
  // Squarespace donate page. When the Anedot account is approved, remove
  // this redirect block — the (already-built) /donate page will take
  // over with the proper FEC-compliant embedded form.
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "https://levparnas.org/#donate",
        permanent: false, // 307 — reversible when we cut over to Anedot
      },
    ];
  },
};

export default nextConfig;
