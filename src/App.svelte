<script lang="ts">
  import PressLinks from './lib/PressLinks.svelte'
  import ProjectImage from './lib/ProjectImage.svelte'
  import { onMount } from 'svelte'
  import { projects, projectGroups } from './lib/projects'
  import Writeup from './lib/Writeup.svelte'
  import ProjectSection from './lib/ProjectSection.svelte'

  let lightMode = document.documentElement.dataset.theme === 'light'
  function toggleTheme() {
    lightMode = !lightMode
    const theme = lightMode ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Theme still works without storage. */ }
  }

  let route = window.location.hash.slice(1) || '/'
  $: selected = projects.find(project => route === `/projects/${project.slug}`)
  $: document.title = selected ? `${selected.title} · Daksh Vohra` : route === '/projects' ? 'Projects · Daksh Vohra' : 'Daksh Vohra'
  onMount(() => {
    const navigate = () => { route = window.location.hash.slice(1) || '/'; window.scrollTo(0, 0) }
    window.addEventListener('hashchange', navigate)
    return () => window.removeEventListener('hashchange', navigate)
  })
</script>

<header>
  <div class="header-inner">
    <nav aria-label="Main navigation"><a class:active={route === '/'} href="#/" aria-current={route === '/' ? 'page' : undefined}>Home</a><a class:active={route.startsWith('/projects')} href="#/projects" aria-current={route.startsWith('/projects') ? 'page' : undefined}>Projects</a></nav>
    <button class="theme-toggle" onclick={toggleTheme} aria-label={lightMode ? 'Switch to dark mode' : 'Switch to light mode'} title={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        {#if lightMode}<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />{:else}<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />{/if}
      </svg>
    </button>
  </div>
</header>
<div class="shell" class:home={route === '/'} class:catalog={route === '/projects'}>
  <div class="frame">
    <main>
      {#if route === '/'}
        <div class="landing">
        <section class="intro" aria-labelledby="name">
          <div class="identity"><h1 id="name">Daksh Vohra</h1></div>
          <div class="bio"><p>Student and robotics enthusiast. I build &amp; research robots and am currently working on <a href="https://www.modubotics.in" target="_blank" rel="noopener noreferrer">Modubotics</a>. I am a <a href="https://www.lodhageniusprogramme.com/" target="_blank" rel="noopener noreferrer">Lodha Genius</a> scholar, a <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">Hack Clubber</a> and an <a href="https://www.gradcapital.in/" target="_blank" rel="noopener noreferrer">Atomic Grant</a> recipient. If you want to get in touch, feel free to email me at daksh[at]modubotics[dot]in</p></div>
          <nav class="socials" aria-label="Social links">
            <a href="https://github.com/kermitsgonnakermicide" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.5 5.5 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.6 16 2.5a13 13 0 0 0-8 0C5.3.6 4.1 1 4.1 1A5.1 5.1 0 0 0 4 4.8a5.5 5.5 0 0 0-1.5 3.8c0 5.5 3.3 6.6 6.4 7A3.4 3.4 0 0 0 8 18.2V22"/></svg></a>
            <a href="https://www.linkedin.com/in/daksh-vohra" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="mailto:dakshvohra@proton.me" aria-label="Email" title="Email"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7.5L22 6"/></svg></a>
          </nav>
          <PressLinks />
        </section>
        <section class="selected" aria-label="Featured projects">
          <div class="cards">
            {#each projects.filter(project => project.featured) as project}
              <a class="card" href={`#/projects/${project.slug}`}>
                <div class="card-image"><ProjectImage src={project.image} alt={project.imageAlt || project.title} fit="cover" position={project.slug === 'catbot-jet' ? '50% 35%' : project.slug === 'arrhythmix' ? '52% 50%' : '50% 50%'} /></div>
                <div class="card-copy"><h3>{project.title.split(' — ')[0]}</h3><p>{project.description}</p><span class="writeup-link">Read writeup ↗</span></div>
              </a>
            {/each}
          </div>
        </section>
        </div>
      {:else if route === '/projects'}
        <div class="projects-page">
          {#each projectGroups as group}
            <ProjectSection title={group.title} sectionKey={group.title === 'Competitive Robotics' ? 'competitive' : group.title.toLowerCase()} projects={group.projects} />
          {/each}
        </div>
      {:else if selected}
        {#key selected.slug}
          <article class="detail-page">
            <a class="back" href="#/projects">← All projects</a>
            <div class="detail-intro">{#if selected.slug !== 'catbot-jet'}<h1>{selected.title}</h1>{/if}<p>{selected.description}</p><a class="repository" href={selected.link} target="_blank" rel="noreferrer">View on GitHub ↗</a></div>
            <Writeup slug={selected.slug} projectTitle={selected.title} />
          </article>
        {/key}
      {:else}<section class="index-page"><h1>Page not found.</h1><a class="back" href="#/">← Home</a></section>{/if}
    </main>

  </div>
</div>

<style>
  header { width: 100%; border-bottom: 1px solid var(--border); background: var(--bg); }
  .header-inner { max-width: 1100px; margin: 0 auto; padding: 0 32px; min-height: 70px; display: flex; justify-content: space-between; align-items: center; }
  header nav { display: flex; gap: 30px; }header a { color: var(--muted); text-decoration: none; font-size: 14px; padding: 14px 0; }header a.active,header a:hover { color: var(--heading); }
  .theme-toggle { display: grid; place-items: center; width: 48px; height: 48px; border: 0; border-radius: 6px; background: transparent; color: var(--muted); cursor: pointer; }.theme-toggle:hover { color: var(--heading); background: var(--surface); }.theme-toggle svg { width: 21px; height: 21px; }
  .shell { width: 100%; padding: 40px 32px; }.shell.home { min-height: calc(100svh - 71px); display: flex; align-items: center; }
  .frame { width: 100%; max-width: 1036px; margin: 0 auto; }
  .landing { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); align-items: center; gap: 40px; padding: 36px; border: 1px solid var(--border); border-radius: 26px; background: var(--surface); }
  .intro { display: grid; gap: 23px; }
  h1 { font-size: 36px; line-height: 1.16; font-weight: 600; letter-spacing: -.025em; color: var(--heading); }
  .bio { grid-column: 1/-1; color: var(--body); font-size: 16px; line-height: 1.75; font-weight: 300; }
  .bio a { color: var(--text); text-decoration: underline; text-decoration-color: var(--muted); text-underline-offset: 3px; overflow-wrap: anywhere; }.bio a:hover { color: var(--heading); text-decoration-color: currentColor; }
  .socials { grid-column: 1/-1; display: flex; gap: 12px; }.socials a { width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; color: var(--muted); border-radius: 6px; }.socials a:hover { color: var(--heading); background: var(--surface); }.socials svg { width: 28px; height: 28px; stroke: currentColor; stroke-width: 1.6; stroke-linejoin: round; stroke-linecap: round; }
  .cards { display: flex; flex-direction: column; gap: 28px; }
  .card { display: grid; grid-template-columns: minmax(0, 42%) minmax(0, 1fr); align-items: center; gap: 18px; color: inherit; text-decoration: none; border-radius: 8px; }
  .card-image { min-width: 0; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 8px; }
  .card-image :global(img) { width: 100%; height: 100%; }
  .card-copy { padding: 0; }.card h3 { color: var(--text); font-weight: 600; font-size: 18px; line-height: 1.25; }.card p { margin-top: 7px; color: var(--muted); font-size: 12px; line-height: 1.55; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-clamp: 2; overflow: hidden; }.writeup-link { display: inline-block; margin-top: 10px; color: var(--body); font-size: 11px; }.card:hover .writeup-link { color: var(--heading); }
  .index-page,.detail-page { max-width: 900px; margin: 0 auto; }
  .shell.catalog { padding: 12px 0 32px; }.catalog .frame { max-width: none; }
  .back { color: var(--muted); font-size: 13px; text-decoration: none; }.back:hover { color: var(--heading); }.detail-intro { padding: 30px 0; }.detail-intro h1 { max-width: 750px; font-size: 34px; }.detail-intro p { max-width: 720px; color: var(--body); font-size: 15px; line-height: 1.75; margin-top: 15px; }.repository { display: inline-block; margin-top: 18px; color: var(--body); text-decoration: none; font-size: 12px; }
  .intro,.selected,.card-copy { min-width: 0; }
  @media(max-width: 850px) { .landing { gap: 28px; padding: 28px; }.intro { gap: 20px; }h1 { font-size: 31px; }.bio { font-size: 14px; }.card { gap: 14px; }.card h3 { font-size: 17px; } }
  @media(max-width: 650px) {
    .header-inner { min-height: 62px; padding: 0 22px; }header nav { gap: 25px; }header a { font-size: 13px; }
    .shell { padding: 20px 14px; }.shell.home { display: block; min-height: calc(100svh - 63px); }.landing { grid-template-columns: 1fr; gap: 28px; padding: 20px; border-radius: 22px; }.intro { gap: 17px; }h1 { font-size: 32px; }.bio { font-size: 14px; line-height: 1.7; }.socials { gap: 12px; margin-left: -9px; }.socials a { width: 56px; height: 56px; flex: 0 0 56px; }
    .cards { gap: 30px; }.card { grid-template-columns: minmax(0,1fr); gap: 14px; }.card-image { width: 100%; }.card-copy { padding: 0; }.card h3 { font-size: 19px; }.card p { font-size: 14px; line-height: 1.6; }.writeup-link { font-size: 13px; margin-top: 14px; }
    .detail-intro h1 { font-size: 29px; }
  }
  @media(max-width: 360px) { .header-inner { padding-inline: 18px; }.shell { padding: 16px 12px; }.landing { padding: 16px; }.intro { gap: 17px; }h1 { font-size: 29px; } }

</style>
