<script>
    import { page } from '$app/stores';
    export let title = "Paris Museums Guide";
    export let subtitle = "Discover all museums in Paris by district";
</script>

<header>
    <nav>
        <div class="logo">
            <a href="/">🖼️ Paris Museums Guide</a>
        </div>
        <div class="nav-links">
            <a href="/" class:active={$page.url.pathname === '/'}>Accueil</a>
            <a href="/about" class:active={$page.url.pathname === '/about'}>À propos</a>
            <a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
        </div>
    </nav>
    
    {#if title}
        <h1>{title}</h1>
    {/if}
    
    {#if subtitle}
        <p>{subtitle}</p>
    {/if}
    
    <slot></slot>
</header>

<style>
    header {
        background-color: #2c3e50;
        color: white;
        text-align: center;
        padding: 2rem;
        margin-bottom: 2rem;
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    
    .logo a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .nav-links {
        display: flex;
        gap: 1.5rem;
    }
    
    .nav-links a {
        color: white;
        text-decoration: none;
        padding: 0.5rem;
        transition: all 0.3s;
    }
    
    .nav-links a:hover, .nav-links a.active {
        color: #3498db;
    }
    
    @media (max-width: 600px) {
        nav {
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>