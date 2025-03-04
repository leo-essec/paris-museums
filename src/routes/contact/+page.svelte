<script>
    import Header from '$lib/components/Header.svelte';
    
    let formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    
    let submitted = false;
    let error = false;
    
    function handleSubmit() {
        // Simuler envoi de formulaire
        // Dans une vraie application, vous utiliseriez des API endpoints
        if (formData.name && formData.email && formData.message) {
            submitted = true;
            error = false;
            
            // Réinitialiser le formulaire
            formData = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        } else {
            error = true;
        }
    }
</script>

<svelte:head>
    <title>Contact Us - Paris Museums Guide</title>
    <meta name="description" content="Get in touch with the Paris Museums Guide team.">
</svelte:head>

<div slot="header">
    <Header title="Contactez-Nous" subtitle="" />
</div>

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
            
            {#if submitted}
                <div class="success-message">
                    <p>Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</p>
                </div>
            {:else}
                <form on:submit|preventDefault={handleSubmit}>
                    <div class="form-group">
                        <label for="name">Nom :</label>
                        <input type="text" id="name" bind:value={formData.name} required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" id="email" bind:value={formData.email} required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Sujet :</label>
                        <input type="text" id="subject" bind:value={formData.subject} required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message :</label>
                        <textarea id="message" bind:value={formData.message} rows="5" required></textarea>
                    </div>
                    
                    {#if error}
                        <p class="error-message">Veuillez remplir tous les champs obligatoires.</p>
                    {/if}
                    
                    <button type="submit">Envoyer</button>
                </form>
            {/if}
        </div>
    </section>
</main>

<style>
    .contact-section {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1rem;
    }
    
    .contact-info, .contact-form {
        margin-bottom: 2rem;
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .contact-info ul {
        list-style: none;
        padding: 0;
    }
    
    .contact-info ul li {
        margin-bottom: 0.5rem;
    }
    
    .contact-info ul a {
        color: #2c3e50;
        text-decoration: none;
    }
    
    .success-message {
        padding: 1rem;
        background-color: #d4edda;
        color: #155724;
        border-radius: 4px;
        margin-bottom: 1rem;
    }
    
    .error-message {
        color: #721c24;
        background-color: #f8d7da;
        padding: 0.5rem;
        border-radius: 4px;
        margin-bottom: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
        .contact-info, .contact-form {
            background: #1e1e1e;
        }
        
        .contact-info ul a {
            color: #3498db;
        }
        
        .success-message {
            background-color: #1e4620;
            color: #d4edda;
        }
        
        .error-message {
            background-color: #4c191e;
            color: #f8d7da;
        }
    }
</style>