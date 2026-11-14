<script lang="ts">
  import PressLinks from './PressLinks.svelte'
  import ProjectImage from './ProjectImage.svelte'
  import { writeups } from './writeups'
  import { projects } from './projects'
  export let slug: string
  export let projectTitle: string
  $: writeup = { title: projectTitle, body: writeups[slug] || '' }
  $: project = projects.find(item => item.slug === slug)
  $: paragraphs = writeup.body.split('\n\n').filter(Boolean)
  const withBOM = ['arrhythmix', 'lattice', 'spooderbot', 'robodog', '3dprinter', 'andytracker']
</script>

<section class="writeup" aria-label="Project writeup">
  {#if writeup.body}
    {#if project?.image.startsWith('/projects/')}
      <figure>
        <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image for ${projectTitle}`}>
          <div class="lead-image"><ProjectImage src={project.image} alt={project.imageAlt || projectTitle} /></div>
        </a>
        {#if slug === 'catbot-jet'}<figcaption>Robot Inventors Legacy — team poster. Open to read at full size.</figcaption>
        {:else if slug === 'usb-2fa-key'}<figcaption>Rendered from the project’s KiCad PCB. Some component models are unavailable.</figcaption>{/if}
      </figure>
    {/if}
    {#if slug === 'arrhythmix'}<div class="press-links"><PressLinks all /></div>{/if}
    <div class="article-body">
      {#each paragraphs as paragraph}<p>{paragraph}</p>{/each}
    </div>

    {#if project}
      <nav class="references" aria-label="Project documentation">
        {#if slug === 'catbot-jet'}<a href="/projects/rcj-poster.png" target="_blank" rel="noopener noreferrer">Team poster ↗</a>
        {:else if slug === 'usb-2fa-key'}<a href="https://blueprint.hackclub.com/projects/276" target="_blank" rel="noopener noreferrer">Build journal ↗</a>
        {:else if withBOM.includes(slug)}<a href={`${project.link}#readme`} target="_blank" rel="noopener noreferrer">README &amp; bill of materials ↗</a>{/if}
        <a href={project.link} target="_blank" rel="noopener noreferrer">{slug === 'catbot-jet' ? 'Earlier CatBot JET repository' : 'Source files'} ↗</a>
      </nav>
    {/if}
  {:else}<p class="empty">our magical wizard<s>s</s> will put something here soon™️</p>{/if}
</section>

<style>
  .writeup { border-top: 1px solid var(--border); padding-top: 23px; }
  .press-links { margin-bottom: 24px; }
  .article-body { max-width: 72ch; color: var(--body); font-size: 16px; line-height: 1.85; overflow-wrap: anywhere; }
  .article-body p + p { margin-top: 1.4em; }
  figure { margin: 0 0 32px; }
  .lead-image { width: 100%; background: transparent; overflow: hidden; }
  figcaption { margin-top: 10px; color: var(--muted); font-size: 12px; line-height: 1.6; }

  .references { display: flex; flex-wrap: wrap; gap: 16px 24px; margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border); }
  .references a { color: var(--text); font-size: 14px; line-height: 1.7; padding-block: 10px; text-underline-offset: 4px; }
  .empty { color: var(--muted); font-size: 13px; padding: 5px 0 25px; }
  @media(max-width:650px) { .article-body { font-size: 15px; }figure { margin-bottom: 24px; }.references { flex-direction: column; gap: 0; } }
</style>
