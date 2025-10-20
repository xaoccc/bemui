<script>
    import updateBin from "../crud.js";

    let { id, element, onUpdate, isDark } = $props();

    function updateData() {
        element.isActive ? element.isActive = false : element.isActive = true;        
        updateBin(Object.assign({}, element), id);
        onUpdate(id, Object.assign({}, element));
    }

    function removeExtension(id) {
        updateBin(null, id);
        onUpdate(id, null);
    }
</script>

<section class={`extension ${(isDark ? 'dark-theme' : 'light-theme')}`} id="extension-{id}">
    <div>
        <img src={element.logo} alt={element.description} class="ext-logo" />
        <div class={`ext-text ${(isDark ? 'dark-theme' : 'light-theme')}`}>
            <h2>{element.name}</h2>
            <p class="ext-description">{element.description}</p>
        </div>
    </div>
    <div>
        <button onclick={() => removeExtension( id)} class={(isDark ? 'dark-theme' : 'light-theme')}>Remove</button>
        <div tabIndex={0} class="toggle" >
            <input 
                type="checkbox" 
                id={`switch-${id}`}
                checked={element.isActive}
                onclick={() => updateData()}
            />
            <label for={`switch-${id}`}></label>
        </div>
    </div>
</section>
