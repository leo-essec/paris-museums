<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    
    function handleSubmit() {
        // Here you would typically send the form data to a server
        alert('Thanks for your message! We will get back to you soon.');
        name = '';
        email = '';
        subject = '';
        message = '';
    }
</script>

<svelte:head>
    <title>Contact Us - Paris Museums Guide</title>
</svelte:head>

<Header title="Contactez-Nous" subtitle="" />

<main>
    <section class="contact-section">
        <div class="contact-info">
            <h2>Nous Contacter</h2>
            <p>Pour toute question ou demande d'information, n'hésitez pas à nous contacter :</p>
            <ul>
                <li>Email : <a href="mailto:contact@museesparis.com">contact@museesparis.com</a></li>
                <li>Téléphone : <a href="tel:+33123456789">01 23 45 67 89</a></li>
            </ul>
        </div>
        
        <div class="contact-form">
            <h2>Formulaire de Contact</h2>
            <form on:submit|preventDefault={handleSubmit}>
                <div class="form-group">
                    <label for="name">Nom :</label>
                    <input type="text" id="name" bind:value={name} required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email :</label>
                    <input type="email" id="email" bind:value={email} required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Sujet :</label>
                    <input type="text" id="subject" bind:value={subject} required>
                </div>
                
                <div class="form-group">
                    <label for="message">Message :</label>
                    <textarea id="message" bind:value={message} rows="5" required></textarea>
                </div>
                
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </section>
</main>

<Footer copyright="© 2025 Musées de Paris. Tous droits réservés." showSocials={false} />