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

<Header title="Contact Us" subtitle="" />

<main>
    <section class="contact-section">
        <div class="contact-info">
            <h2>Contact Us</h2>
            <p>For any questions or information requests, please feel free to contact us:</p>
            <ul>
                <li>Email: <a href="mailto:contact@museesparis.com">contact@museesparis.com</a></li>
                <li>Phone: <a href="tel:+33123456789">01 23 45 67 89</a></li>
            </ul>
        </div>
        
        <div class="contact-form">
            <h2>Contact Form</h2>
            <form on:submit|preventDefault={handleSubmit}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" bind:value={name} required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" bind:value={email} required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" bind:value={subject} required>
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

<Footer copyright="(c) 2025 Paris Museums Guide. All rights reserved." showSocials={false} />
