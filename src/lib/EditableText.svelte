<script lang="ts">
  import { getSaved } from './editStore'
  export let storageKey: string
  export let fallback = ''
  export let tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div' = 'span'
  $: current = getSaved(storageKey, fallback)
</script>

<svelte:element this={tag}>{current}</svelte:element>
