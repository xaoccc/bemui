<script>
    import Extensions from "./lib/components/Extensions.svelte";
    import Logo from "./lib/components/Logo.svelte";

    let activeFilter = $state("All");
    const filters = ["All", "Active", "Inactive"];

    function toggle(filter) {
        activeFilter = filter;
    }
</script>

<header>
    <div class="logo">
        <Logo />
    </div>
    <div class="toggle-mode">
        <img src="icon-sun.svg" alt="icon sun" />
    </div>
</header>

<main>
    <div class="header">
        <h1>Extensions List</h1>
        <div class="filter-wrapper">
            {#each filters as f}
                <button
                    class={f === activeFilter ? "active" : ""}
                    onclick={() => toggle(f)}
                >
                    {f}
                </button>
            {/each}
        </div>
    </div>
    <Extensions {activeFilter} />
</main>
