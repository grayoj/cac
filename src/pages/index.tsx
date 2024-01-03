import Navbar from '@suburban/components/Navbar';
import Sidebar from '@suburban/components/Sidebar';
import ApplicationsTable from '@suburban/components/Tables/ApplicationsTable';

export default function Home() {
  return (
    <>
      <div>
        <Sidebar />
        <div className='md:pl-64 flex flex-col flex-1'>
          <Navbar />
          <main>
            <ApplicationsTable />
          </main>
        </div>
      </div>
    </>
  );
}
