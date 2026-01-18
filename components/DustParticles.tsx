"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { dustParticlesConfig } from "./dust-particles-config";

export default function DustParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="dust"
        options={dustParticlesConfig}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
