<script lang="ts">
    import EditableText from './EditableText.svelte';

    const socialLinks = [
        { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/daksh-vohra-5a039136b" },
        { name: "GitHub", icon: "github", url: "https://github.com/kermitsgonnakermicide" },
        { name: "Email", icon: "email", url: "mailto:dakshvohra@proton.me" }
    ];
</script>

<footer>
    <div class="footer-inner">
        <nav class="social-links">
            {#each socialLinks as link}
                <a href={link.url} title={link.name} class="social-icon" target="_blank" rel="noopener noreferrer">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        {#if link.icon === "linkedin"}
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                            <circle cx="4" cy="4" r="2"/>
                        {:else if link.icon === "github"}
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0020 4c0-1-1-2-1-2s-1.5-.5-3.5.5c-1-.5-2.5-1-4-1-1.5 0-3 .5-4 1-2-1-3.5-.5-3.5-.5S2 3 2 4v.5a5.07 5.07 0 00.8 3.3A5.44 5.44 0 002 9.23c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                        {:else if link.icon === "discord"}
                            <path d="M21 16.5c0 .828-.504 1.555-1.344 1.859-.504.172-1.078.09-1.352-.219l-.516-.52a6.115 6.115 0 01-1.92 1.184c-1.195.535-2.537.674-3.868.674-1.331 0-2.673-.139-3.868-.674a6.115 6.115 0 01-1.92-1.184l-.516.52c-.274.309-.848.391-1.352.219C3.504 18.055 3 17.328 3 16.5V5c0-2.344 2.236-4.25 4.992-4.25 1.068 0 2.09.23 3.008.644.918-.414 1.94-.644 3.008-.644 2.756 0 4.992 1.906 4.992 4.25v11.5z"/>
                        {:else if link.icon === "email"}
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                            <path d="M2 6l10 7.5L22 6"/>
                        {/if}
                    </svg>
                </a>
            {/each}
        </nav>
        <p class="copyright">&copy; <EditableText storageKey="copyright" fallback="Daksh Vohra" tag="span" /></p>
    </div>
</footer>

<style>
    footer {
        padding: 2rem;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        background: #ffffff;
    }

    .footer-inner {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .social-links {
        display: flex;
        gap: 1rem;
        list-style: none;
    }

    .social-icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #555;
        transition: all 0.2s ease;
        border-radius: 6px;
        background: transparent;
    }

    .social-icon:hover {
        color: #000;
        background: rgba(0, 0, 0, 0.05);
        transform: translateY(-2px);
    }

    .icon {
        width: 18px;
        height: 18px;
    }

    .copyright {
        font-family: "Mozilla Headline", sans-serif;
        font-weight: 300;
        font-size: 0.85rem;
        color: #999;
    }

    @media (prefers-color-scheme: dark) {
        footer {
            background: #0a0a0a;
            border-top-color: rgba(255, 255, 255, 0.08);
        }

        .social-icon {
            color: #aaa;
        }

        .social-icon:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
        }

        .copyright {
            color: #666;
        }
    }
</style>
