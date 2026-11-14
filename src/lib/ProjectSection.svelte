<script lang="ts">
    import EditableProjectCard from './EditableProjectCard.svelte';
    import EditableText from './EditableText.svelte';

    export let title: string = "";
    export let sectionKey: string = "";
    export let projects: Array<{
        title: string;
        description: string;
        image: string;
        imageAlt?: string;
        imageFit?: 'cover' | 'contain';
        link: string;
        slug?: string;
    }> = [];

    $: localProjects = projects;

    function writeupFor(project: { slug?: string; link: string }) {
        const slug = project.slug || projects.find(original => original.link === project.link)?.slug;
        return slug ? `#/projects/${slug}` : '';
    }

    function originalFor(project: { slug?: string; link: string }) {
        return projects.find(original => (project.slug && original.slug === project.slug) || original.link === project.link);
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
            {#each localProjects as project}
                <EditableProjectCard
                    title={project.title}
                    description={project.description}
                    image={originalFor(project)?.image || project.image}
                    imageAlt={originalFor(project)?.imageAlt || project.title}
                    imagePosition={project.slug === 'catbot-jet' ? '50% 35%' : project.slug === 'arrhythmix' ? '52% 50%' : '50% 50%'}
                    link={project.link}
                    writeupLink={writeupFor(project)}
                />
            {/each}
        </div>
    </div>
</section>

<style>
    .section {
        padding: 0.75rem 2rem;
        background: var(--bg);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
        color: var(--heading);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
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

</style>
