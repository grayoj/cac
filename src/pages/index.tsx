import Navbar from "@suburban/components/Navbar";
import ProfileHeader from "@suburban/components/ProfileHeader";
import Sidebar from "@suburban/components/Sidebar";

export default function Home() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="md:pl-64 flex flex-col flex-1">
          <Navbar />
          <main>
            <ProfileHeader />
          </main>
        </div>
      </div>
    </>
  );
}
