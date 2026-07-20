import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Samuel Baldasso — Backend Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0f1a",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#5eead4", fontSize: 28, marginBottom: 16 }}>
          {"~ backend · java · cloud-native"}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700 }}>Samuel Baldasso</div>
        <div style={{ fontSize: 36, color: "#94a3b8", marginTop: 16 }}>
          Backend Software Engineer — Java & Cloud-Native Systems
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 26, color: "#5eead4" }}>
          github.com/samuelbaldasso
        </div>
      </div>
    ),
    size
  );
}
