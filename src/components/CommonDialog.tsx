import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: boolean,
    setIsOpen: any,
    data: any,
}

export default function CommonDialog({ isOpen, setIsOpen, data }: Props) {

    const { t } = useTranslation();

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Transition appear show={(isOpen)} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    {isOpen && <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-md bg-black text-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"

                                        className="text-lg flex items-center font-bold leading-6 text-amber-500"
                                    >
                                        <div className='flex-1 text-center'>AI scoring: {data.Avg.toFixed(2)}</div>
                                        {/* <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                     */}
                                    </Dialog.Title>
                                    <div className="mt-4 font-semibold">
                                        <div>Sharpness: {data.Sharpness.toFixed(2)}</div>
                                        <div>Contrast: {data.Contrast.toFixed(2)}</div>
                                        <div>Brightness: {data.Brightness.toFixed(2)}</div>
                                        <div>Saturation: {data.Saturation.toFixed(2)}</div>
                                        <div>Noise: {data.Noise.toFixed(2)}</div>
                                        <div>Color Balance: {data["Color Balance"].toFixed(2)}</div>
                                        <div>Dynamic Range: {data["Dynamic Range"].toFixed(2)}</div>
                                        <div>Compression Artifacts: {data["Compression Artifacts"].toFixed(2)}</div>
                                    </div>

                                    <div className="mt-4 flex justify-center">
                                        <div onClick={() => {
                                            closeModal()
                                        }} className="h-14 w-full rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5">
                                            <div className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center" >
                                                Ok
                                            </div>
                                        </div>


                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>}
                </Dialog>
            </Transition>
        </>
    )
}
