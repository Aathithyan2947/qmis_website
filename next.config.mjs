/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const admissionProxy = [
      {
        source: "/client/enquiry-form",
        destination: "https://qmis-admission.vercel.app/",
      },
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "referer",
            value: "(?:https?://[^/]+)?/client/enquiry-form(?:\\?.*)?$",
          },
        ],
        destination: "https://qmis-admission.vercel.app/:path*",
      },
    ];

    return { beforeFiles: admissionProxy };
  },
};

export default nextConfig;
