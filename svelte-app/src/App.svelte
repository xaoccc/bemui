<script>
    import { onMount, tick } from "svelte";
    import Extensions from "./lib/components/Extensions.svelte";
    import Logo from "./lib/components/Logo.svelte";
    import resetData from "./lib/reset-api";
    import updateBin from "./lib/crud.js";

    let activeFilter = $state("All");
    let isDark = $state(true);
    let data = $state([]);
    const filters = ["All", "Active", "Inactive"];

    function toggleFilter(filter) {
        activeFilter = filter;
    }

    function toggleTheme() {
        isDark = !isDark;
        updateTheme();
    }

    async function updateTheme() {
        await tick();

        const elToChange = document.querySelectorAll(
            "body, header, .toggle-theme, path, .extension, .filter-wrapper button, .extension button, .ext-description, .additional-buttons button",
        );

        elToChange.forEach((element) => {
            if (isDark) {
                element.classList.add("dark-theme");
                element.classList.remove("light-theme");
            } else {
                element.classList.add("light-theme");
                element.classList.remove("dark-theme");
            }
        });
    }

    onMount(async () => {
        updateTheme();
    });

    async function handleExtensionsLoaded() {
        await tick();
        updateTheme();
    }

    async function resetExtensions() {
        data = await resetData();
        updateBin(data, -1);
        await tick();
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
                    class={f === activeFilter
                        ? isDark
                            ? "active dark-theme"
                            : "active light-theme"
                        : isDark
                          ? "dark-theme"
                          : "light-theme"}
                    onclick={() => toggleFilter(f)}
                >
                    {f}
                </button>
            {/each}
        </div>
    </div>
    <Extensions {activeFilter} onLoaded={handleExtensionsLoaded} {isDark} {data} />
    <section class="additional-buttons">
        <button
            onclick={() => resetExtensions()}
        >
            Reset
        </button>
    </section>
</main>
