<script>
    import updateBin from "../crud.js";

    let { id, element, onUpdate } = $props();

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

<section class="extension" id="extension-{id}">
    <div>
        <img src={element.logo} alt={element.description} class="ext-logo" />
        <div class="ext-text">
            <h3>{element.name}</h3>
            <p class="ext-description">{element.description}</p>
        </div>
    </div>
    <div>
        <button onclick={() => removeExtension( id)}>Remove</button>
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
