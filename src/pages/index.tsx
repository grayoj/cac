import Navbar from '@suburban/components/Navbar';
import Sidebar from '@suburban/components/Sidebar';
import ApplicationsTable from '@suburban/components/Tables/ApplicationsTable';
import AppointmentsTable from '@suburban/components/Tables/AppointmentsTable';

export default function Home() {
  return (
    <>
      <div>
        <Sidebar />
        <div className='md:pl-64 flex flex-col flex-1'>
          <Navbar />
          <main>
            <AppointmentsTable />
          </main>
        </div>
      </div>
    </>
  );
}
