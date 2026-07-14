import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/content";

export const runtime = "nodejs";
export const alt = site.seo.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const png = await readFile(join(process.cwd(), "public/brand/logo-mark.png"));
  const logoDataUri = `data:image/png;base64,${png.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#08080a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 35%, rgba(232,184,75,0.22), transparent 60%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} width={105} height={149} alt="" />
        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: 12,
              color: "#f5f5f2",
            }}
          >
            HIVE
          </span>
          <span
            style={{
              marginTop: 8,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: 14,
              color: "#e8b84b",
            }}
          >
            METRIC
          </span>
        </div>
        <span
          style={{
            marginTop: 36,
            fontSize: 26,
            color: "#9b9ba5",
          }}
        >
          {site.tagline}
        </span>
      </div>
    ),
    { ...size }
  );
}
