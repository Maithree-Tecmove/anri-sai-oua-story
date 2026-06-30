import Image from "next/image";
import type { ImageRef } from "@/lib/content";
import { PlaceholderScene, type SceneKind } from "./PlaceholderScene";

/* Renders a real photo via next/image (fill + sizes) when `image.src` is set;
   otherwise falls back to an on-brand cinematic placeholder scene. Never a
   broken <img>. The wrapper must be positioned (relative) with a defined size. */
export function SmartImage({
  image,
  scene,
  sizes,
  priority = false,
  showCaption = true,
}: {
  image: ImageRef;
  scene: SceneKind;
  sizes: string;
  priority?: boolean;
  showCaption?: boolean;
}) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }
  return (
    <PlaceholderScene
      scene={scene}
      caption={showCaption ? image.placeholder : undefined}
      showCaption={showCaption}
    />
  );
}
