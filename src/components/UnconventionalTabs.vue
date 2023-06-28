<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot } from '@headlessui/vue'

interface Tab {
  title: string
  img: string
  tag: string
  excerpt: string
  link: string
}

const props = defineProps<{
  tabs: Tab[]
}>()

const tabs = props.tabs
</script>

<template>
  <TabGroup v-slot="{ selectedIndex }">

    <!-- Buttons -->
    <div class="flex justify-center">
      <TabList class="max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-slate-200 rounded-[20px] p-1 mb-8 min-[480px]:mb-12">      
        <Tab :key="index" v-for="(tab, index) in tabs" as="template">
          <button
            class="flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out"
            :class="selectedIndex === index ? 'bg-white text-slate-900' : 'text-slate-600 hover:text-slate-900'"
          >{{ tab.title }}</button>          
        </Tab>
      </TabList>
    </div>

    <!-- Tab panels -->
    <TabPanels class="max-w-[640px] mx-auto">
      <div class="relative flex flex-col">

        <TabPanel
          :key="index"
          v-for="(tab, index) in tabs"
          :static="true"
          class="focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
          :class="selectedIndex !== index ? 'order-first' : ''"
        >
          <TransitionRoot
            as="article"
            :show="selectedIndex === index"
            class="w-full bg-white rounded-2xl shadow-xl min-[480px]:flex items-stretch"
            enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform"
            enterFrom="opacity-0 -translate-y-8"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-12"
          >        
            <figure class="min-[480px]:w-1/2 p-2">
              <img class="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg" width="304" height="214" :src="tab.img" :alt="tab.img" />
            </figure>
            <div class="min-[480px]:w-1/2 flex flex-col justify-center p-5 pl-3">
              <div class="flex justify-between mb-1">
                <header>
                  <div class="font-caveat text-xl font-medium text-sky-500">{{ tab.tag }}</div>
                  <h1 class="text-xl font-bold text-slate-900">{{ tab.title }}</h1>
                </header>
                <button class="shrink-0 h-[30px] w-[30px] border border-slate-200 hover:border-slate-300 rounded-full shadow inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out" aria-label="Like">
                  <svg class="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                    <path d="M6.985 1.635C5.361.132 2.797.162 1.21 1.7A3.948 3.948 0 0 0 0 4.541a3.948 3.948 0 0 0 1.218 2.836l5.156 4.88a.893.893 0 0 0 1.223 0l5.165-4.886a3.925 3.925 0 0 0 .061-5.663C11.231.126 8.62.094 6.985 1.635Zm4.548 4.53-4.548 4.303-4.54-4.294a2.267 2.267 0 0 1 0-3.275 2.44 2.44 0 0 1 3.376 0c.16.161.293.343.398.541a.915.915 0 0 0 .766.409c.311 0 .6-.154.767-.409.517-.93 1.62-1.401 2.677-1.142 1.057.259 1.797 1.181 1.796 2.238a2.253 2.253 0 0 1-.692 1.63Z" />
                  </svg>
                </button>
              </div>
              <div class="text-slate-500 text-sm line-clamp-3 mb-2">{{ tab.excerpt }}</div>
              <div class="text-right">
                <a class="text-sm font-medium text-indigo-500 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-out" :href="tab.link">Read more -&gt;</a>
              </div>
            </div>
          </TransitionRoot>        
        </TabPanel>

      </div>
    </TabPanels>

  </TabGroup>
</template>
