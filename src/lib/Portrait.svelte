<script lang="ts">
  import { getSaved } from './editStore'
  const photo = getSaved('portrait', '')
</script>
<div class="portrait-frame">
  {#if photo}<img src={photo} alt="Daksh Vohra" />{:else}<div class="placeholder"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="17" r="8"/><path d="M9 42c0-10 6-16 15-16s15 6 15 16"/></svg><span>Photo</span></div>{/if}
</div>
<style>
  .portrait-frame { width: 100%; aspect-ratio: 1/1.15; overflow: hidden; border: 1px solid #333; border-radius: 10px; position: relative; background: #171717; }img { width: 100%; height: 100%; display: block; object-fit: cover; filter: grayscale(1); }.placeholder { height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 10px; color: #777; font-size: 10px; }.placeholder svg { width: 42px; height: 42px; stroke: #5d5d5d; stroke-width: 1; }
</style>
