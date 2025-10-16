<script>
    import Extensions from "./lib/components/Extensions.svelte";
    import Logo from "./lib/components/Logo.svelte";

    let activeFilter = $state("All");
    let isDark = $state(true);
    const filters = ["All", "Active", "Inactive"];

    function toggleFilter(filter) {
        activeFilter = filter;
    }

    $effect(() => {
        const elToChange = document.querySelectorAll("body, header, .toggle-theme, path, .extension")

        elToChange.forEach((element) => {
            if (isDark) {
                element.classList.add("dark-theme");
                element.classList.remove("light-theme");
            } else {
                element.classList.add("light-theme");
                element.classList.remove("dark-theme");
            }
        });
    });

    function toggleTheme() {
        isDark = !isDark;
    }
</script>

<header>
    <div class="logo">
        <Logo />
    </div>
    <button
        onclick={() => toggleTheme()}
        class="toggle-theme dark-theme"
        aria-label="Change mode"
    ></button>
</header>

<main>
    <div class="header">
        <h1>Extensions List</h1>
        <div class="filter-wrapper">
            {#each filters as f}
                <button
                    class={f === activeFilter ? "active" : ""}
                    onclick={() => toggleFilter(f)}
                >
                    {f}
                </button>
            {/each}
        </div>
    </div>
    <Extensions {activeFilter} />
</main>
