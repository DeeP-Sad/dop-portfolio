import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import About from './About'
import { Link } from 'react-router-dom';


const navigation = [
  { name: 'About', href: '#About', current: true },
  { name: 'Research', href: '#Research', current: false },
  { name: 'Funding', href: '#Funding', current: false },
  { name: 'Group', href: '#Group', current: false },
  { name: 'Openings', href: '#Openings', current: false },
  { name: 'Others', href: '#Others', current: false },
  { name: 'Publications', href: '#Publications', current: false },
  { name: 'Seminars', href: '#Seminars', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function currentItem(item){
  console.log(item.name)
  console.log(item.current)
  item.current = !item.current
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4"> 
                    {navigation.map((item) => (
                      <div onClick={()=>{currentItem(item)}}>
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-white hover:text-gray-300',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )
                      }
                        aria-current={item.current ? 'page' : undefined}
                      >

                        {/* 
                        Useless code
                        <div>
                          <Link to={item.href} >
                
                        </Link>
                          </div> */}
                        
                        {item.name}
                      </a>
                      </div>
                    ))}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-gray-300' : 'text-white hover:text-gray-300',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}