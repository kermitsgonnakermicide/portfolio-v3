<script lang="ts">
    import ProjectImage from './ProjectImage.svelte'

    export let title: string = "";
    export let description: string = "";
    export let image: string = "";
    export let imageAlt: string = "";
    export let imagePosition = '50% 50%';
    export let link: string = "#";
    export let writeupLink: string = "";

</script>

<article class="card">
    {#if image}<div class="image-container">
        <ProjectImage src={image} alt={imageAlt || title} fit="cover" position={imagePosition} />
    </div>{/if}
    <div class="content">
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
        {#if link && link !== '#'}
            <a href={writeupLink || link} class="btn" target={writeupLink ? undefined : '_blank'} rel={writeupLink ? undefined : 'noopener noreferrer'}>View Project</a>
        {/if}
    </div>
</article>

<style>
    .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .card:hover {
        transform: translateY(-4px);

    }




    .image-container {
        width: 100%;
        aspect-ratio: 4 / 3;
        border-radius: 0;
        overflow: hidden;
        background: transparent;
    }

    .image-container :global(img) { width: 100%; height: 100%; }

    .content {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    h3 {
        font-family: inherit;
        font-weight: 600;
        font-size: 1.25rem;
        margin: 0 0 0.75rem 0;
        color: var(--heading);
    }

    p {
        font-family: inherit;
        font-weight: 400;
        font-size: 0.95rem;
        color: var(--body);
        margin: 0 0 1.5rem 0;
        line-height: 1.6;
        flex: 1;
    }

    .btn {
        align-self: flex-start;
        padding: 0.75rem 1.5rem;
        background: var(--heading);
        color: var(--bg);
        text-decoration: none;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: background 0.2s ease;
    }

    .btn:hover {
        background: var(--text);
    }

</style>
