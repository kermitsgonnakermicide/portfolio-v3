<script lang="ts">
  export let src: string
  export let alt = ''
  export let fit: 'cover' | 'contain' = 'contain'
</script>
{#if src === '/projects/arrhythmix-device.jpeg'}
  <svg viewBox="11 540 1108 398" role="img" aria-label={alt} preserveAspectRatio="xMidYMid meet"><image href={src} width="1131" height="1600" /></svg>
{:else}<img {src} {alt} style:object-fit={fit} loading="lazy" />{/if}
<style>img,svg { display: block; width: 100%; height: 100%; }</style>
