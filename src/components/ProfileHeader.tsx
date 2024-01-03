import React from "react";

export default function ProfileHeader() {
  return (
    <div>
      <div className="my-6 m-10">
        <div className="relative my-4 bg-white rounded-sm">
          <div
            className="h-40 bg-cover bg-center relative rounded-md"
            style={{ backgroundImage: "url('/bg.png')" }}
          >
            <div className="absolute inset-0 bg-legend-primary"></div>
          </div>

          <div className="relative mt-[-40px] flex items-center p-4">
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="/Profile.png" alt="Profile" />
            </div>

            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-black">
                Sadeeq Hamzaa
              </h2>
              <p className="text-legend-gray">Consular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
