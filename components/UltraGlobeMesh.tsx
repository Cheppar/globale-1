"use client"; // This is a client component 👈🏽

import { useFrame, useThree } from "@react-three/fiber";
// @ts-ignore
import { Map } from "@jdultra/ultra-globe/src/Map";
// @ts-ignore
import { GoogleMap3DTileLayer } from "@jdultra/ultra-globe/src/layers/GoogleMap3DTileLayer";
import { forwardRef, useEffect, useRef } from "react";
import { useGlobaleStore } from "@/app/store";

export const UltraGlobeMesh = forwardRef<Map>(({}, ref) => {
  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);
  const glRenderer = useThree((state) => state.gl);

  const googleTilesAPIKey = useGlobaleStore((state) => state.googleTilesAPIKey);

  const ultraglobeMapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!googleTilesAPIKey) return;

    let map = new Map({ renderer: glRenderer, scene, camera });
    var googleMaps3DTiles = new GoogleMap3DTileLayer({
      id: 0,
      name: "Google Maps 3D Tiles",
      visible: true,
      apiKey: googleTilesAPIKey,
      loadOutsideView: true,
      displayCopyright: true,
      geometricErrorMultiplier: 3,
    });
    map.setLayer(googleMaps3DTiles, 0);

    if (ref) {
      if (typeof ref === "function") {
        ref(map);
      } else {
        ref.current = map;
      }
    }

    ultraglobeMapRef.current = map;

    console.log("Setup");
  }, [camera, glRenderer, googleTilesAPIKey, ref, scene]);

  useFrame(() => {
    const ultraglobeMap = ultraglobeMapRef.current;
    if (!ultraglobeMap) return;

    ultraglobeMap.update();
  });

  return null;
});

UltraGlobeMesh.displayName = "UltraGlobeMesh";
// if (firstIntersection) {
