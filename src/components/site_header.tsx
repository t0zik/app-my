"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {Bars3Icon,XMarkIcon,} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/../public/images/header_logo.svg'
const projects = [
    { name: 'Lemon Garden Residence & SPA',href:'/lemon_garden_residence'},
    { name: 'Batumi Garden Inn',href: '/batumi_garden_inn'},
    { name: 'Grand Botanico Residence',href: '/grand_botanico_residence'},
    { name: 'Royal Residence Botanico',href: '/royal_residence_botanico'},
    { name: 'Luxury Villas',href: '/luxury_villas'}
  ]
  
  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }


export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div className='h-24'>
    <header className="bg-white h-24 fixed z-10 w-screen"   >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-12 w-auto" 
            src={logo}
            alt="" 
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none">
            Projects
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400 " aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-5 top-full z-100 mt-3  min-w-max   overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 border-t-4 border-yellow-500">
                <div >
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center  gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="about_us" className="text-sm font-semibold leading-6 text-gray-900">
          About us
          </Link>
          <Link href="gallery" className="text-sm font-semibold leading-6 text-gray-900">
          Gallery
          </Link>
          <Link href="useful_information" className="text-sm font-semibold leading-6 text-gray-900">
          Useful information
          </Link>
          <Link href="contacts" className="text-sm font-semibold leading-6 text-gray-900">
          Contacts
          </Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image 
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Projects
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...projects].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="about_us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </Link>
                <Link
                  href="gallery"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Gallery
                </Link>
                <Link
                  href="useful_information"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Useful information
                </Link>
                <Link
                  href="contacts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </div>
  )
}
