<script>
    export let museum;
</script>

<div class="museum-card">
    <img src={museum.image} class="museum-image" alt={museum.name}>
    <div class="museum-info">
        <h3>{museum.name}</h3>
        <div class="district">{museum.district} arrondissement</div>
        <p>{museum.description}</p>
        <a href={`/museum/${museum.id}`} class="view-more-btn">View Details</a>
    </div>
</div>

<style>
    .museum-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }
    
    .museum-card:hover {
        transform: translateY(-5px);
    }
    
    .museum-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    
    .museum-info {
        padding: 1rem;
    }
    
    h3 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }
    
    .district {
        color: #e74c3c;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    
    p {
        color: #666;
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    .view-more-btn {
        display: inline-block;
        background-color: #2c3e50;
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        margin-top: 1rem;
        transition: background-color 0.3s;
    }
    
    .view-more-btn:hover {
        background-color: #34495e;
    }
    
    @media (prefers-color-scheme: dark) {
        .museum-card {
            background: #1e1e1e;
        }
        
        h3 {
            color: #f0f0f0;
        }
        
        p {
            color: #cccccc;
        }
    }
</style>