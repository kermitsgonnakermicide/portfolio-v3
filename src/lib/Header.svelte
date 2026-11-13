<script lang="ts">
    import { editMode, resetAll } from './editStore';

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://linkedin.com/in/daksh-vohra-5a039136b"
        },
        {
            name: "GitHub",
            icon: "github",
            url: "https://github.com/kermitsgonnakermicide"
        },
        {
            name: "Email",
            icon: "email",
            url: "mailto:dakshvohra@proton.me"
        }
    ];

    function toggleEdit() {
        editMode.update(v => !v);
    }
</script>

<header>
    <div class="header-content">
        <div class="placeholder">
            <div class="profile-placeholder"></div>
            <span class="profile-name"> Daksh Vohra</span>
        </div>
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
            <button class="edit-toggle" class:active={$editMode} on:click={toggleEdit} title={$editMode ? 'Exit edit mode' : 'Edit mode'}>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
            </button>
            {#if $editMode}
                <button class="reset-btn" on:click={resetAll} title="Reset all edits">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="1 4 1 10 7 10"/>
                        <path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
                    </svg>
                </button>
            {/if}
        </nav>
    </div>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 100;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        padding: 1rem 2rem;
    }

    .header-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
    }

    .placeholder {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .profile-placeholder {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        background: #ddd;
        border: 2px solid #ddd;
    }

    .social-links {
        display: flex;
        gap: 0.5rem;
        list-style: none;
        align-items: center;
    }

    .profile-name{
        font-family: "Mozilla Headline", sans-serif;
        font-weight: 700;
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

    .edit-toggle {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #555;
        transition: all 0.2s ease;
        border-radius: 6px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .edit-toggle:hover {
        color: #6366f1;
        background: rgba(99, 102, 241, 0.08);
    }

    .edit-toggle.active {
        color: #6366f1;
        background: rgba(99, 102, 241, 0.12);
    }

    .reset-btn {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        transition: all 0.2s ease;
        border-radius: 6px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .reset-btn:hover {
        color: #ef4444;
        background: rgba(239, 68, 68, 0.08);
    }

    @media (max-width: 640px) {
        header {
            padding: 0.75rem 1.5rem;
        }

        .header-content {
            gap: 1rem;
        }

        .profile-placeholder {
            width: 36px;
            height: 36px;
        }

        .social-icon, .edit-toggle, .reset-btn {
            width: 32px;
            height: 32px;
        }

        .icon {
            width: 16px;
            height: 16px;
        }

        .social-links {
            gap: 0.25rem;
        }
    }

    @media (prefers-color-scheme: dark) {
        header {
            background: rgba(10, 10, 10, 0.95);
            border-bottom-color: rgba(255, 255, 255, 0.08);
        }


        .social-icon, .edit-toggle {
            color: #aaa;
        }

        .social-icon:hover, .edit-toggle:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
        }

        .edit-toggle.active {
            color: #818cf8;
            background: rgba(129, 140, 248, 0.15);
        }

        .reset-btn {
            color: #666;
        }

        .reset-btn:hover {
            color: #f87171;
            background: rgba(248, 113, 113, 0.1);
        }

        .profile-placeholder {
            background: #333;
            border-color: #333;
        }
    }
</style>
