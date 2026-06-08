import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import sharp from "sharp";

// Favicon circular: círculo negro con el logo de DREVIA en blanco.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const logoPath = join(process.cwd(), "public/imgs/drevialogo.png");
  const original = await readFile(logoPath);

  // Recolorea el logo a blanco usando su canal alfa como máscara de forma.
  const { data, info } = await sharp(original)
    .ensureAlpha()
    .extractChannel(3)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const whiteLogo = await sharp({
    create: {
      width: info.width,
      height: info.height,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .joinChannel(data, {
      raw: { width: info.width, height: info.height, channels: 1 },
    })
    .png()
    .toBuffer();

  const logoSrc = `data:image/png;base64,${whiteLogo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: "50%",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="DREVIA"
          width={62}
          height={62}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
