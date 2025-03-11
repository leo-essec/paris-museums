<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>About Us - Paris Museums Guide</title>
</svelte:head>

<Header title="About Us" subtitle="" />

<div class="about-us">
    <h1>Our Mission</h1>
    <p>We are a group of ESSEC students dedicated to democratizing and easing access to cultural locations for others. Our goal is to make it easier for everyone to explore and enjoy the rich cultural heritage of Paris.</p>
    
    <div class="team-section">
        <h2>Meet the Team</h2>
        
        <div class="team-member">
            <img src="/images/clemence.jpg" alt="Clémence">
            <div class="team-member-info">
                <h3>Clémence</h3>
                <p>Clémence is passionate about art and history. She is responsible for curating the best museums and cultural spots in Paris.</p>
            </div>
        </div>
        
        <div class="team-member">
            <img src="/images/leo.JPG" alt="Léo">
            <div class="team-member-info">
                <h3>Léo</h3>
                <p>Léo is our tech guru, ensuring the website runs smoothly and efficiently. He loves coding and exploring new technologies.</p>
            </div>
        </div>
        
        <div class="team-member">
            <img src="/images/bruno.jpg" alt="Bruno">
            <div class="team-member-info">
                <h3>Bruno</h3>
                <p>Bruno is in charge of marketing and outreach. He works tirelessly to spread the word about our mission and engage with the community.</p>
            </div>
        </div>
        
        <div class="team-member">
            <img src="/images/thibault.jpg" alt="Thibault">
            <div class="team-member-info">
                <h3>Thibault</h3>
                <p>Thibault handles partnerships and collaborations. He connects with museums and cultural institutions to bring exclusive content to our users.</p>
            </div>
        </div>
    </div>
</div>

<Footer copyright="(c) 2025 ESSEC Students. All rights reserved." showSocials={false} />
