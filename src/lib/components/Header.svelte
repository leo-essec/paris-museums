<script>
    export let title = "Paris Museums Guide";
    export let subtitle = "Discover all museums in Paris by district";
    </script>
    
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>
      <h1>{title}</h1>
      {#if subtitle}<p>{subtitle}</p>{/if}
      <slot></slot>
    </header>
    
    <style>
      nav {
        margin-bottom: 1.5rem;
        display: flex;
        gap: 2rem;
        justify-content: center;
      }
    
      nav a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }
    
      nav a:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    
      h1 {
        margin-bottom: 0.5rem;
      }
    </style>