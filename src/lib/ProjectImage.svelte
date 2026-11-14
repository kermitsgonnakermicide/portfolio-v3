<script lang="ts">
  export let src: string
  export let alt = ''
  export let position = '50% 50%'
  export let fit: 'cover' | 'contain' = 'contain'
</script>
<img {src} {alt} style:object-fit={fit} style:object-position={position} loading="lazy" />
<style>img { display: block; width: 100%; height: auto; min-width: 0; min-height: 0; }</style>
