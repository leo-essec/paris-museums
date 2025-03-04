<script>
    import Header from '$lib/components/Header.svelte';
    
    const teamMembers = [
        {
            name: "Clémence",
            role: "Art and History Specialist",
            description: "Clémence is passionate about art and history. She is responsible for curating the best museums and cultural spots in Paris.",
            image: "/images/clemence.jpg"
        },
        {
            name: "Léo",
            role: "Tech Developer",
            description: "Léo is our tech guru, ensuring the website runs smoothly and efficiently. He loves coding and exploring new technologies.",
            image: "/images/leo.jpg"
        },
        {
            name: "Bruno",
            role: "Marketing Specialist",
            description: "Bruno is in charge of marketing and outreach. He works tirelessly to spread the word about our mission and engage with the community.",
            image: "/images/bruno.jpg"
        },
        {
            name: "Thibault",
            role: "Partnerships Manager",
            description: "Thibault handles partnerships and collaborations. He connects with museums and cultural institutions to bring exclusive content to our users.",
            image: "/images/thibault.jpg"
        }
    ];
</script>

<svelte:head>
    <title>About Us - Paris Museums Guide</title>
    <meta name="description" content="Learn about the ESSEC student team behind the Paris Museums Guide.">
</svelte:head>

<div slot="header">
    <Header title="About Us" subtitle="" />
</div>

<div class="about-us">
    <h1>Our Mission</h1>
    <p>We are a group of ESSEC students dedicated to democratizing and easing access to cultural locations for other students. Our goal is to make it easier for everyone to explore and enjoy the rich cultural heritage of Paris.</p>
    
    <div class="team-section">
        <h2>Meet the Team</h2>
        
        {#each teamMembers as member}
            <div class="team-member">
                <img src={member.image} alt={member.name}>
                <div class="team-member-info">
                    <h3>{member.name}</h3>
                    <p class="role">{member.role}</p>
                    <p>{member.description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .about-us {
        max-width: 1000px;
        margin: 2rem auto;
        padding: 2rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .about-us h1 {
        color: #2c3e50;
        margin-bottom: 1rem;
        text-align: center;
    }
    
    .about-us p {
        color: #666;
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .team-section {
        margin-top: 2rem;
    }
    
    .team-member {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
    }
    
    .team-member img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 1rem;
    }
    
    .team-member-info {
        color: #2c3e50;
    }
    
    .team-member-info h3 {
        margin-bottom: 0.5rem;
    }
    
    .role {
        font-weight: bold;
        color: #3498db;
        margin-bottom: 0.5rem;
    }
    
    .team-member-info p {
        color: #666;
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    @media (max-width: 600px) {
        .team-member {
            flex-direction: column;
            align-items: flex-start;
        }
        
        .team-member img {
            margin-bottom: 1rem;
        }
    }
    
    @media (prefers-color-scheme: dark) {
        .about-us {
            background: #1e1e1e;
        }
        
        .about-us h1, .team-member-info h3 {
            color: #f0f0f0;
        }
        
        .about-us p, .team-member-info p {
            color: #cccccc;
        }
    }
</style>