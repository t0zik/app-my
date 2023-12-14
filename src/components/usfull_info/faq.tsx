'use client'
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Faq() {
    const faq = 
    [
        {question:'Do you offer technical support?',answer:' Yes! You can purchase a license that you can share with your entire team.'},
    ]


  return (
    <div className="w-[70%] mx-auto ">
        {faq.map((f) =>
        (
            <Disclosure key={1}>
            {({ open }) => (
              <>
      
                <Disclosure.Button className="mb-3 flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500/75">
                    {f.question}
                  <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} `  }  width={30} />
                </Disclosure.Button>
      
                {/*
                  Use the `Transition` + `open` render prop argument to add transitions.
                */}
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  {/*
                    Don't forget to add `static` to your `Disclosure.Panel`!
                  */}
                  <Disclosure.Panel static>
                    {f.answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure> 
        ))}

    </div>
  )
}
