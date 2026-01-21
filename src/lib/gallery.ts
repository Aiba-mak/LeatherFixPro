import { readdir } from "fs/promises";
import path from "path";

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export type GalleryImage = {
  src: `/images/gallery/${string}`;
  alt: string;
};

const buildAltText = (filename: string) => {
  const nameWithoutExt = filename.replace(/\.[^.]+$/, "");
  const phrase = nameWithoutExt
    .replace(/[-_]/g, " ")
    .replace(/\d+/g, "")
    .trim();

  return phrase ? `${phrase} restored finish` : "Leather restoration highlight";
};

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const entries = await readdir(GALLERY_DIR);
  const images = entries
    .filter((entry) => IMAGE_EXTENSIONS.includes(path.extname(entry).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return images.map((entry) => ({
    src: `/images/gallery/${entry}`,
    alt: buildAltText(entry),
  }));
}

