<script lang="ts">
    import { onMount, tick } from "svelte";
    import fetchData from "../api.js";
    import Extension from "./Extension.svelte";

    // The current component using onLoaded notifies the parent that all data is loaded
    let { activeFilter, onLoaded, isDark, data } = $props();

    // readData is async so we can first read the data from fetchData(), then we make sure the data is in the DOM, using tick and after that we notify the parent, using onLoaded as props that the data is fetched and the DOM is updated
    async function readData() {
        if (data = []) {
        data = await fetchData();
        }
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
        <Extension id={i} {element} onUpdate={handleUpdate} {isDark} />
    {/each}
</div>
