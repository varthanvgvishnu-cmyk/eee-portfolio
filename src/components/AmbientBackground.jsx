import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#060a14]" aria-hidden="true">
      <div className="ambient-aurora ambient-aurora-one" />
      <div className="ambient-aurora ambient-aurora-two" />
      <div className="ambient-aurora ambient-aurora-three" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(2,6,16,.56)_100%)]" />
    </div>
  );
}
