<script>
    import { goto } from '$app/navigation';
    
    export let museum;
    
    function viewDetails() {
        goto(`/museum/${museum.id}`);
    }
</script>

<div class="museum-card">
    <img src={museum.image} class="museum-image" alt={museum.name}>
    <div class="museum-info">
        <h3>{museum.name}</h3>
        <div class="district">District {museum.district}</div>
        <p>{museum.description}</p>
        <button class="view-more-btn" on:click={viewDetails}>View Details</button>
    </div>
</div>
