
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'



interface Props {
  list: any
}

export default function FilterSelect({ list }: Props) {

  const [selected, setSelected] = useState(list[0].key)
  const [value, setValue] = useState(list[0].value)

  const onChangeItem = (e: any) => {
    console.log("onChangeItem=", e);
    setSelected(e)
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element.key == e) {
        setValue(element.value)
      }

    }

  }

  return <Listbox value={selected} onChange={onChangeItem}>
    <div className="relative mt-1 border-white">
      <Listbox.Button className="relative w-full cursor-pointer rounded-full bg-transparent border-gray-600 border border-solid py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">

        <span className="block text-white pl-2 truncate font-bold">{value}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>

      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black text-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {list.map((item: any, index: number) => (
            <Listbox.Option
              key={index}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? ' text-sky-400' : 'text-white'
                }`
              }
              value={item.key}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                      }`}
                  >
                    {item.value}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>


}