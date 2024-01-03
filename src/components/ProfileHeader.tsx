import React from "react";

export default function ProfileHeader() {
  return (
    <div>
      <div className="my-6">
        <div className="relative my-4 bg-white rounded-sm">
          <div
            className="h-40 bg-cover bg-center relative rounded-md"
            style={{ backgroundImage: "url('../assets/bg.png')" }}
          >
            <div className="absolute inset-0 bg-legend-primary"></div>
          </div>

          <div className="relative mt-[-40px] flex items-center p-4">
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="../assets/Profile.png" alt="Profile" />
            </div>

            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-black">
                Sadeeq Hamzaa
              </h2>
              <p className="text-legend-gray">Legend Internet</p>
            </div>
            <div className="flex ml-[620px] space-x-2">
              <button className="p-1.5 px-8 rounded-sm bg-[#E5E5EA] flex">
                <p className="mt-1">Settings</p>
              </button>
              <button className="bg-transparent border p-2 px-8 text-legend-primary border-legend-primary rounded-sm">
                Add New Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
