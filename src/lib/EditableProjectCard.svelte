<script lang="ts">
    import { editMode, getSaved, save } from './editStore';
    import EditableText from './EditableText.svelte';

    export let index: number;
    export let sectionKey: string;
    export let title: string = "";
    export let description: string = "";
    export let image: string = "";
    export let link: string = "#";

    function remove() {
        const event = new CustomEvent('removeproject', { detail: { sectionKey, index } });
        window.dispatchEvent(event);
    }
</script>

<article class="card">
    {#if $editMode}
        <button class="remove-btn" on:click={remove} title="Remove project">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        </button>
    {/if}
    <div class="image-container">
        <img src={image} alt={title} />
    </div>
    <div class="content">
        <h3>
            <EditableText
                storageKey="{sectionKey}_{index}_title"
                fallback={title}
                tag="span"
            />
        </h3>
        <p>
            <EditableText
                storageKey="{sectionKey}_{index}_desc"
                fallback={description}
                tag="span"
            />
        </p>
        {#if link && link !== '#'}
            <a href={link} class="btn" target="_blank" rel="noopener noreferrer">View Project</a>
        {/if}
    </div>
</article>

<style>
    .card {
        background: #ffffff;
        border: 1px solid #e0e0e0;
        overflow: hidden;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .card:hover {
        border-color: #999;
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .remove-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 10;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: none;
        background: rgba(239, 68, 68, 0.9);
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.15s;
    }

    .card:hover .remove-btn {
        opacity: 1;
    }

    .remove-btn:hover {
        background: #dc2626;
    }

    .image-container {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: #f0f0f0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .card:hover img {
        transform: scale(1.05);
    }

    .content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    h3 {
        font-family: "Mozilla Headline", sans-serif;
        font-weight: 600;
        font-size: 1.25rem;
        margin: 0 0 0.75rem 0;
        color: #222;
    }

    p {
        font-family: "Mozilla Headline", sans-serif;
        font-weight: 400;
        font-size: 0.95rem;
        color: #666;
        margin: 0 0 1.5rem 0;
        line-height: 1.6;
        flex: 1;
    }

    .btn {
        align-self: flex-start;
        padding: 0.75rem 1.5rem;
        background: #222;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: background 0.2s ease;
    }

    .btn:hover {
        background: #000;
    }

    @media (prefers-color-scheme: dark) {
        .card {
            background: #1a1a1a;
            border-color: #333;
        }

        .card:hover {
            border-color: #666;
            box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
        }

        h3 {
            color: #fff;
        }

        p {
            color: #bbb;
        }

        .image-container {
            background: #2a2a2a;
        }

        .btn {
            background: #fff;
            color: #000;
        }

        .btn:hover {
            background: #f0f0f0;
        }

        .remove-btn {
            background: rgba(239, 68, 68, 0.8);
        }

        .remove-btn:hover {
            background: #dc2626;
        }
    }
</style>
