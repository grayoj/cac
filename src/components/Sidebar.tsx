import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Applications', href: '#', icon: UsersIcon, current: false },
  { name: 'Appointments', href: '#', icon: FolderIcon, current: false },
  { name: 'Messages', href: '#', icon: CalendarIcon, current: false },
  { name: 'Consul', href: '#', icon: InboxIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white border-r'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XMarkIcon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 flex items-center px-4'>
                <img className='h-8 w-auto' src='/logo.png' alt='Workflow' />
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2 space-y-1'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-white text-black' : 'text-black',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className='mr-4 flex-shrink-0 h-6 w-6 text-black'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'></div>
        </Dialog>
      </Transition.Root>

      <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
        <div className='flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r'>
          <div className='flex items-center flex-shrink-0 px-4'>
            <img className='h-8 w-auto' src='/logo.png' alt='Workflow' />
          </div>
          <div className='mt-5 flex-1 flex flex-col'>
            <nav className='flex-1 px-2 pb-4 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-white text-black' : 'text-black',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className='mr-3 flex-shrink-0 h-6 w-6 text-black'
                    aria-hidden='true'
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
