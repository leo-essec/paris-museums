<script>
    import { page } from '$app/stores';
    import { museums } from '$lib/data/museums';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    
    // Get the museum ID from the route parameter
    const museumId = parseInt($page.params.id);
    
    // Find the corresponding museum
    const museum = museums.find(m => m.id === museumId);
</script>

<svelte:head>
    <title>{museum ? museum.name : 'Museum'} - Paris Museums Guide</title>
</svelte:head>

<Header>
    <a href="/" class="back-btn">← Back to Museums</a>
</Header>

<main>
    <div class="museum-details">
        {#if museum}
            <div class="museum-hero">
                <img src={museum.image} alt={museum.name}>
            </div>
            <div class="museum-content">
                <h1>{museum.name}</h1>
                <div class="museum-meta">
                    <p><i class="fas fa-map-marker-alt"></i> {museum.address}</p>
                    <p><i class="fas fa-clock"></i> {museum.hours}</p>
                    <p><i class="fas fa-ticket-alt"></i> {museum.price}</p>
                </div>
                <div class="museum-description">
                    <h2>About</h2>
                    <p>{museum.fullDescription}</p>
                </div>
                <div class="museum-collections">
                    <h2>Collections</h2>
                    <ul>
                        {#each museum.collections as collection}
                            <li>{collection}</li>
                        {/each}
                    </ul>
                </div>
                <a href={museum.website} class="website-btn" target="_blank">
                    Visit Official Website
                </a>
            </div>
        {:else}
            <div class="error-message">
                <h2>Museum not found</h2>
                <p>Sorry, we couldn't find the museum you're looking for.</p>
                <a href="/" class="view-more-btn">Back to Home</a>
            </div>
        {/if}
    </div>
</main>

<Footer />