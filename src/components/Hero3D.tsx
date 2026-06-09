"use client";

import dynamic from "next/dynamic";

// WebGL only runs in the browser — skip SSR and lazy-load the scene.
const AbstractScene = dynamic(() => import("./three/AbstractScene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

/** Soft gradient placeholder shown while the 3D bundle loads. */
function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-2/3 w-2/3 rounded-full bg-gradient-to-tr from-indigo-300/40 via-violet-300/30 to-blue-300/40 blur-3xl animate-pulse" />
    </div>
  );
}

export default function Hero3D({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <AbstractScene />
    </div>
  );
}
