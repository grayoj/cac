const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
];

export default function AppointmentsTable() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 my-10'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-xl font-semibold text-gray-900'>
            All Applications
          </h1>
          <p className='mt-2 text-sm text-gray-700'>
            Add to enable a hover state on table rows
          </p>
        </div>
      </div>
      <div className='mt-8 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden rounded-sm'>
              <table className='min-w-full border divide-y'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 border'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border'
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 border'>
                        {person.name}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 border'>
                        {person.title}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 border'>
                        {person.email}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 border'>
                        {person.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
