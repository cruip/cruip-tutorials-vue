<script setup lang="ts">
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    TransitionRoot,
    TransitionChild,
} from '@headlessui/vue'

const modalOpen = ref(false)
const video = ref(null)

function closeModal() {
    modalOpen.value = false
}
</script>

<template>
    <div>

        <!-- Video thumbnail -->
        <button class="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group" @click="modalOpen = true" aria-controls="modal" aria-label="Watch the video">
            <img class="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out" src="../assets/video-modal-thumb.jpg" width="768" height="432" alt="Video modal thumbnail" />
            <!-- Play icon -->
            <svg class="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                <circle class="fill-white" cx="36" cy="36" r="36" fill-opacity=".8" />
                <path class="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
            </svg>
        </button>
        <!-- End: Video thumbnail -->

        <TransitionRoot :show="modalOpen" as="template">
            <Dialog :initialFocus="video" @close="closeModal">

                <!-- Modal backdrop -->
                <TransitionChild
                    className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                />                
                <!-- End: Modal backdrop -->

                <!-- Modal dialog -->
                <TransitionChild
                    className="fixed inset-0 z-10 flex p-6"
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 scale-75"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-out duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-75"
                >                
                    <div class="max-w-5xl mx-auto h-full flex items-center">
                        <DialogPanel class="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                            <video ref="video" width="1920" height="1080" loop controls>
                                <source src="../assets/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </DialogPanel>
                    </div>
                </TransitionChild>
                <!-- End: Modal dialog -->
                
            </Dialog>
        </TransitionRoot>

    </div>
</template>
