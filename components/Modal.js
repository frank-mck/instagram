import { useRecoilState } from "recoil"
import { modalState } from "../atoms/ModalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from 'react';

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-t-auto"
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-[800px]
          sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'> 
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom='opacity-0'
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />   
          </Transition.Child>  

            {/* This element is to trick the browser ito centering the model contents */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
              >
                &#8203;
              </span>

              
        </div>
        </Dialog>
      </Transition.Root>
  )
}

export default Modal
