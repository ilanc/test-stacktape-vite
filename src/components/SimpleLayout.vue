<template>
<div>
<nav class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="ml-6 flex space-x-8">
          <!-- todo: v-for -->
          <router-link class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" :class="$route.name === 'Home' ? activeClass : inactiveClass" to="/">Home</router-link>
          <router-link class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" :class="$route.name === 'Docs' ? activeClass : inactiveClass" to="/docs">Docs</router-link>
          <router-link class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" :class="$route.name === 'Examples' ? activeClass : inactiveClass" to="/examples">Examples</router-link>
          <router-link class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" :class="$route.name === 'Blog' ? activeClass : inactiveClass" to="/blog">Blog</router-link>
        </div>
      </div>
      <div class="ml-6 flex items-center">
        <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
<div class="p-6">
  <slot />
</div>
</div>
</template>
<script setup>
const activeClass = "border-indigo-500 text-gray-900";
const inactiveClass = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";
</script>