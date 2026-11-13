<script lang="ts">
    import EditableProjectCard from './EditableProjectCard.svelte';
    import EditableText from './EditableText.svelte';
    import { editMode, getSavedJSON, saveJSON } from './editStore';

    export let title: string = "";
    export let sectionKey: string = "";
    export let projects: Array<{
        title: string;
        description: string;
        image: string;
        link: string;
    }> = [];

    let localProjects = getSavedJSON(`section_${sectionKey}`, projects);

    $: if (projects !== localProjects) {
        localProjects = getSavedJSON(`section_${sectionKey}`, projects);
    }

    function addProject() {
        localProjects = [...localProjects, {
            title: "New Project",
            description: "Project description...",
            image: "",
            link: "#"
        }];
        saveJSON(`section_${sectionKey}`, localProjects);
    }

    function handleRemove(e: CustomEvent<{ sectionKey: string; index: number }>) {
        if (e.detail.sectionKey !== sectionKey) return;
        localProjects = localProjects.filter((_: unknown, i: number) => i !== e.detail.index);
        saveJSON(`section_${sectionKey}`, localProjects);
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('removeproject', handleRemove as EventListener);
    }
</script>

<section class="section">
    <div class="container">
        <h2>
            <EditableText
                storageKey="heading_{sectionKey}"
                fallback={title}
                tag="span"
            />
        </h2>
        <div class="grid">
            {#each localProjects as project, i}
                <EditableProjectCard
                    index={i}
                    sectionKey={sectionKey}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            {/each}
            {#if $editMode}
                <button class="add-card" on:click={addProject}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    <span>Add Project</span>
                </button>
            {/if}
        </div>
    </div>
</section>

<style>
    .section {
        padding: 0.75rem 2rem;
        background: #ffffff;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
        color: #222;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .add-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        min-height: 280px;
        border: 2px dashed #ccc;
        border-radius: 8px;
        background: transparent;
        color: #999;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: "Mozilla Headline", sans-serif;
        font-size: 0.9rem;
    }

    .add-card:hover {
        border-color: #6366f1;
        color: #6366f1;
        background: rgba(99, 102, 241, 0.04);
    }

    @media (max-width: 1024px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .section {
            padding: 0.5rem 1.5rem;
        }

        h2 {
            font-size: 1.5rem;
            margin-bottom: 0.25rem;
        }

        .grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }

    @media (prefers-color-scheme: dark) {
        .section {
            background: #0a0a0a;
        }

        h2 {
            color: #fff;
        }

        .add-card {
            border-color: #444;
            color: #666;
        }

        .add-card:hover {
            border-color: #818cf8;
            color: #818cf8;
            background: rgba(129, 140, 248, 0.06);
        }
    }
</style>
