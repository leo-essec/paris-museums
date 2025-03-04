<script>
    import { onMount } from 'svelte';
    import "../app.css";
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    
    // Pour le FontAwesome
    onMount(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(link);
    });
</script>

<div class="app">
    <slot name="header">
        <Header />
    </slot>
    
    <main>
        <slot />
    </main>
    
    <Footer />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    main {
        flex: 1;
    }
</style>