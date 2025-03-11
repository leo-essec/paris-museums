<script>
    export let title = "🖼 Paris Museums Guide";
    export let subtitle = "Discover all museums in Paris by district";
</script>

<header>
    <h1>{title}</h1>
    {#if subtitle}
        <p>{subtitle}</p>
    {/if}
    <slot></slot>
</header>