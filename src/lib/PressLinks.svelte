<script lang="ts">
  export let all = false
  const publications = [
    { name: 'Moneycontrol', url: 'https://www.moneycontrol.com/education/world-health-day-2026-gurgaon-teen-innovators-build-rs-3-500-wearable-ecg-prototype-for-heart-monitoring-article-13881735.html' },
    { name: 'Newspik', url: 'https://newspik.in/world-health-day-2026/' },
    { name: 'IndustryWired', url: 'https://industrywired.com/healthcare/world-health-day-2026-gurgaon-students-create-low-cost-ecg-device-for-continuous-heart-tracking-11469495' },
  ]
</script>
<p class="press"><span>Press:</span>{#each all ? publications : publications.slice(0, 1) as publication}<a href={publication.url} target="_blank" rel="noopener noreferrer">{publication.name}</a>{/each}</p>
<style>
  .press { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px; color: var(--muted); font-size: 14px; line-height: 1.7; }
  a { color: var(--text); text-underline-offset: 4px; }
  a:hover { color: var(--heading); }
</style>
