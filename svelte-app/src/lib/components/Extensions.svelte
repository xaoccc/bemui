<script lang="ts">
    import { onMount, tick } from "svelte";
    import fetchData from "../api.js";
    import Extension from "./Extension.svelte";

    let data = $state([]);
    // The current component using onLoaded notifies the parent that all data is loaded
    let { activeFilter, onLoaded } = $props();

    async function readData() {
        data = await fetchData();

        // Wait one tick so Svelte can render the whole data
        await tick();
        onLoaded?.();
    }

    onMount(() => {
        readData();
    });

    function handleUpdate(id, updated) {
        if (updated === null) {
            // Remove item
            data = data.filter((_, i) => i !== id);
        } else {
            // Replace updated item
            data = data.map((el, i) => (i === id ? updated : el));
        }
    }
</script>

<div class="wrapper">
    {#each data?.filter((el) => activeFilter === "All" || (activeFilter === "Active" && el.isActive) || (activeFilter === "Inactive" && !el.isActive)) as element, i}
        <Extension id={i} {element} onUpdate={handleUpdate} />
    {/each}
</div>
