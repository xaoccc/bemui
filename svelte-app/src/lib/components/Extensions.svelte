<script>
    import fetchData from "../api.js";
    import Extension from "./Extension.svelte";
    let data = $state(null);
    window.addEventListener("DOMContentLoaded", () => {
        readData();
    });

    async function readData() {
        data = await fetchData();        
        
        
    }
</script>
<div>

    {#each data as element, i}
        <Extension 
            logo={element.logo}
        />
        
    {/each}
</div>
