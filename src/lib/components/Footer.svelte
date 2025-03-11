<script>
    export let copyright = "© 2025 Paris Museums Guide - Data from parismusees.paris.fr";
    export let showSocials = true;
</script>

<footer>
    <p>{copyright}</p>
    
    {#if showSocials}
    <div class="social-links">
        <p>Follow us on:
            <a href="https://facebook.com" target="_blank" class="social-icon">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-icon">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-icon">
                <i class="fab fa-instagram"></i>
            </a>
        </p>
    </div>
    {/if}
</footer>

<style>
    .social-links {
        margin-top: 1rem;
    }
    
    .social-icon {
        margin: 0 5px;
        color: #2c3e50;
    }
</style>