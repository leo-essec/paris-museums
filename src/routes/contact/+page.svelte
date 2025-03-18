<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    // Variables liées aux champs pour le confort d'écriture
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
</script>

<svelte:head>
    <title>Contact Us - Paris Museums Guide</title>
</svelte:head>

<Header title="Contact Us" subtitle="" />

<main>
    <section class="contact-section">
        <div class="contact-form">
            <h2>Contact Form</h2>
            <!-- On retire l'appel JS côté client et on utilise method="POST" -->
            <form method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" bind:value={name} required />
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" bind:value={email} required />
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" bind:value={subject} required />
                </div>
                
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" bind:value={message} rows="5" required></textarea>
                </div>
                
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
</main>

<Footer
    copyright="(c) 2025 Paris Museums Guide. All rights reserved."
    showSocials={false}
/>