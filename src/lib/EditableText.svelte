<script lang="ts">
  import { editMode, getSaved, save } from './editStore';

  export let storageKey: string;
  export let fallback: string = '';
  export let tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div' = 'span';

  let el: HTMLElement;
  let current = getSaved(storageKey, fallback);

  $: if (el && $editMode) {
    el.innerText = current;
  }

  function handleBlur() {
    const val = el.innerText.trim();
    if (val !== current) {
      current = val;
      save(storageKey, val);
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && tag !== 'div') {
      e.preventDefault();
      el.blur();
    }
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<svelte:element
  this={tag}
  bind:this={el}
  class="editable"
  class:editing={$editMode}
  contenteditable={$editMode || undefined}
  on:blur={handleBlur}
  on:keydown={handleKeydown}
>{current}</svelte:element>

<style>
  .editable {
    outline: none;
    border-radius: 4px;
    transition: box-shadow 0.15s ease, background 0.15s ease;
  }

  .editable.editing {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.4);
    background: rgba(99, 102, 241, 0.05);
    cursor: text;
    padding: 2px 6px;
    margin: -2px -6px;
  }

  .editable.editing:hover {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
  }

  :global(.editable:focus.editing) {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.6);
  }
</style>
