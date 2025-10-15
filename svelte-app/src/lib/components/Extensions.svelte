<script lang="ts">
    import fetchData from "../api.js";
    import Extension from "./Extension.svelte";

    let data = $state([]);
    let { activeFilter } = $props();

    // Fetch data
    window.addEventListener("DOMContentLoaded", () => {
        readData();
    });
    async function readData() {
        data = await fetchData();
    }
</script>

<div class="wrapper">
    {#each data?.filter((el) => activeFilter === "All" || (activeFilter === "Active" && el.isActive) || (activeFilter === "Inactive" && !el.isActive)) as element, i}
        <Extension
            logo={element.logo}
            name={element.name}
            description={element.description}
            isActive={element.isActive}
            id={i}
        />
    {/each}
</div>
