<script>
    export let logo;
    export let name;
    export let description;
    export let isActive;
    export let id;
</script>
<section class='extension' id="extension-{id}">
    <div>
        <img src={logo} alt={description} class="ext-logo">
        <div class="ext-text">
            <h3>{name}</h3>
            <p class="ext-description">{description}</p>            
        </div>       
    </div>
    <div>
        <button>Remove</button>
        <input type="checkbox" checked={isActive}>
    </div>   
</section>