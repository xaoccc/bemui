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
        <Extension
            id={i}
            element={element}
            onUpdate={handleUpdate}
        />
    {/each}
</div>
