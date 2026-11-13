<script lang="ts">
    import EditableText from './EditableText.svelte';
    export let bio: string = "";
</script>

<section class="about">
    <div class="container">
        <div class="bio-text">
            <EditableText
                storageKey="bio"
                fallback={bio}
                tag="p"
            />
        </div>
    </div>
</section>

<style>
    .about {
        padding: 3rem 2rem;
        background: #ffffff;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .bio-text {
        max-width: 800px;
    }

    :global(.bio-text p) {
        font-family: "Mozilla Headline", sans-serif;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6;
        color: #555;
        margin: 0;
    }

    @media (max-width: 768px) {
        .about {
            padding: 2rem 1.5rem;
        }

        :global(.bio-text p) {
            font-size: 0.95rem;
        }
    }

    @media (prefers-color-scheme: dark) {
        .about {
            background: #0a0a0a;
        }

        :global(.bio-text p) {
            color: #ccc;
        }
    }
</style>
