<script setup lang="ts">
interface TimelineItem {
  date: string
  label: string
  title: string
  content: string
}

const props = defineProps<{
  items: TimelineItem[]
}>()

const items = props.items
</script>

<template>
  <div class="-my-6">
    <template v-for="item in items">
        <div class="relative pl-8 sm:pl-32 py-6 group">
          <!-- Purple label -->
          <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">{{ item.label }}</div>
          <!-- Time + Title -->
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{{ item.date }}</time>
            <div class="text-xl font-bold text-slate-900">{{ item.title }}</div>
          </div>
          <!-- Description -->
          <div class="text-slate-500">{{ item.content }}</div>
        </div>      
    </template>
  </div>
</template>