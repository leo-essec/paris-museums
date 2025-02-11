const museums = [
    {
        id: 1,
        name: "Louvre Museum",
        district: "1st",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Cour_Napol%C3%A9on_at_night_-_Louvre.jpg/640px-Cour_Napol%C3%A9on_at_night_-_Louvre.jpg",
        description: "World's largest art museum and historic monument",
        address: "Rue de Rivoli, 75001 Paris",
        hours: "Mercredi à lundi, de 9h à 18h. Fermé le mardi.",
        price: "17€",
        collections: [
            "Antiquités égyptiennes",
            "Antiquités grecques",
            "Peintures",
            "Arts de l'Islam",
            "Sculptures",
            "Objets d'art"
        ],
        fullDescription: "Le musée du Louvre est le plus grand musée d'art et d'antiquités au monde. Situé au cœur de Paris, cet ancien palais royal abrite certaines des œuvres d'art les plus célèbres, dont la Joconde de Léonard de Vinci. Actuellement, le musée présente l'exposition 'Revoir Cimabue' du 22 janvier au 12 mai 2025, mettant en lumière l'un des artistes les plus importants du 13e siècle.",
        website: "https://www.louvre.fr"
    },
    {
        id: 2,
        name: "Musée d'Orsay",
        district: "7th",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Musee_d%27Orsay_and_Pont_Royal%2C_North-West_view_140402_1.jpg/640px-Musee_d%27Orsay_and_Pont_Royal%2C_North-West_view_140402_1.jpg",
        description: "Housed in a former railway station, famous for Impressionist art",
        address: "1 Rue de la Légion d'Honneur, 75007 Paris",
        hours: "Mardi à dimanche, de 9h30 à 18h. Fermé le lundi.",
        price: "16€",
        collections: [
            "Art impressionniste",
            "Art post-impressionniste",
            "Art nouveau",
            "Photographie",
            "Sculptures"
        ],
        fullDescription: "Installé dans l'ancienne gare d'Orsay, ce musée est mondialement connu pour sa collection exceptionnelle d'art impressionniste et post-impressionniste. Le bâtiment lui-même est une œuvre d'art, avec sa magnifique architecture Beaux-Arts et son imposante horloge.",
        website: "https://www.musee-orsay.fr"
    },
    {
        id: 3,
        name: "Centre Pompidou",
        district: "4th",
        image: "https://www.centrepompidou.fr/fileadmin/_processed_/2/4/csm_collection-notrebatiment-photofacaderuerambuteau2021_1920x750_af5ca8a213.jpg",
        description: "Modern art museum with innovative architecture",
        address: "Place Georges-Pompidou, 75004 Paris",
        hours: "Tous les jours sauf le mardi, de 11h à 21h",
        price: "14€",
        collections: [
            "Art moderne",
            "Art contemporain",
            "Design",
            "Architecture",
            "Nouveaux médias"
        ],
        fullDescription: "Le Centre Pompidou est un centre d'art et de culture unique en son genre, reconnaissable à son architecture révolutionnaire. Il abrite le Musée National d'Art Moderne, qui possède la plus importante collection d'art moderne et contemporain d'Europe.",
        website: "https://www.centrepompidou.fr"
    },
    {
        id: 4,
        name: "Musée Rodin",
        district: "7th",
        image: "https://www.musee-rodin.fr/sites/default/files/styles/885x495/public/2020-11/2020_06_23_jardin_jm006.jpg?itok=JHOZrVmz",
        description: "Sculptures by Auguste Rodin in a historic mansion",
        address: "77 Rue de Varenne, 75007 Paris",
        hours: "Mardi à dimanche, de 10h à 18h30. Fermé le lundi.",
        price: "13€",
        collections: [
            "Sculptures",
            "Dessins",
            "Photographies",
            "Archives",
            "Objets d'art"
        ],
        fullDescription: "Situé dans l'élégant Hôtel Biron, le musée Rodin présente les œuvres majeures du sculpteur Auguste Rodin dans un cadre exceptionnel. Le musée comprend un magnifique jardin de sculptures où l'on peut admirer 'Le Penseur' et 'Les Bourgeois de Calais'.",
        website: "https://www.musee-rodin.fr"
    },
    {
        id: 5,
        name: "Musée Picasso",
        district: "3rd",
        image: "https://paris.kidiklik.fr/sites/default/files/styles/crop_image/public/2022-11/Kidiklik-3.jpg?itok=nvLNoViM",
        description: "Extensive collection of Picasso's works",
        address: "5 Rue de Thorigny, 75003 Paris",
        hours: "Mardi à vendredi de 10h30 à 18h, Weekend de 9h30 à 18h",
        price: "14€",
        collections: [
            "Peintures",
            "Sculptures",
            "Dessins",
            "Céramiques",
            "Archives personnelles"
        ],
        fullDescription: "Le Musée Picasso Paris, situé dans le magnifique Hôtel Salé, présente une collection unique des œuvres de Pablo Picasso. Le musée retrace l'évolution artistique du maître à travers plus de 5000 œuvres et des dizaines de milliers de pièces d'archives.",
        website: "https://www.museepicassoparis.fr"
    },
    {
        id: 6,
        name: "Musée de l'Orangerie",
        district: "1er",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mus%C3%A9e_de_l%27Orangerie_2011.jpg/640px-Mus%C3%A9e_de_l%27Orangerie_2011.jpg",
        description: "Célèbre pour les Nymphéas de Monet",
        address: "Jardin des Tuileries, 75001 Paris",
        hours: "Mercredi à lundi, de 9h à 18h. Fermé le mardi.",
        price: "12,50€",
        collections: [
            "Peintures impressionnistes",
            "Peintures post-impressionnistes"
        ],
        fullDescription: "Le Musée de l'Orangerie est surtout connu pour abriter les célèbres Nymphéas de Claude Monet, présentés dans deux salles ovales spécialement conçues pour ces œuvres monumentales. Le musée propose également la collection Walter-Guillaume, qui comprend des œuvres de Renoir, Cézanne, Matisse et Picasso.",
        website: "https://www.musee-orangerie.fr"
    },
    {
        id: 7,
        name: "Musée de l'Armée",
        district: "7e",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Les_Invalides_north.jpg/640px-Les_Invalides_north.jpg",
        description: "Musée militaire situé aux Invalides",
        address: "129 Rue de Grenelle, 75007 Paris",
        hours: "Tous les jours, de 10h à 18h. Fermé le premier lundi de chaque mois.",
        price: "14€",
        collections: [
            "Armes et armures",
            "Uniformes",
            "Objets militaires",
            "Peintures",
            "Sculptures"
        ],
        fullDescription: "Le Musée de l'Armée, situé dans l'Hôtel des Invalides, offre une vaste collection d'objets militaires, retraçant l'histoire de l'armée française du Moyen Âge à nos jours. Le site abrite également le tombeau de Napoléon Bonaparte.",
        website: "https://www.musee-armee.fr"
    },
    {
        id: 8,
        name: "Musée du Quai Branly – Jacques Chirac",
        district: "7e",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mus%C3%A9e_du_quai_Branly.jpg/640px-Mus%C3%A9e_du_quai_Branly.jpg",
        description: "Arts et civilisations d'Afrique, d'Asie, d'Océanie et des Amériques",
        address: "37 Quai Branly, 75007 Paris",
        hours: "Mardi à dimanche, de 10h30 à 19h. Nocturne le jeudi jusqu'à 22h. Fermé le lundi.",
        price: "12€",
        collections: [
            "Objets ethnographiques",
            "Arts premiers",
            "Photographies",
            "Textiles",
            "Instruments de musique"
        ],
        fullDescription: "Le Musée du Quai Branly – Jacques Chirac présente une riche collection d'objets d'art et d'artisanat provenant des civilisations non occidentales. Son architecture unique et son jardin luxuriant en font un lieu incontournable pour les amateurs de cultures du monde.",
        website: "https://www.quaibranly.fr"
    },
    {
        id: 9,
        name: "Musée Marmottan Monet",
        district: "16e",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mus%C3%A9e_Marmottan_Monet.jpg/640px-Mus%C3%A9e_Marmottan_Monet.jpg",
        description: "Collection impressionniste, notamment des œuvres de Monet",
        address: "2 Rue Louis Boilly, 75016 Paris",
        hours: "Mardi à dimanche, de 10h à 18h. Fermé le lundi.",
        price: "12€",
        collections: [
            "Peintures impressionnistes",
            "Peintures post-impressionnistes",
            "Manuscrits enluminés",
            "Arts décoratifs"
        ],
        fullDescription: "Le Musée Marmottan Monet possède la plus grande collection mondiale d'œuvres de Claude Monet, y compris le célèbre tableau 'Impression, soleil levant'. Le musée abrite également des œuvres d'autres artistes impressionnistes et post-impressionnistes.",
        website: "https://www.marmottan.fr"
    },
    {
        id: 10,
        name: "Musée Jacquemart-André",
        district: "8e",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Mus%C3%A9e_Jacquemart-Andr%C3%A9.jpg/640px-Mus%C3%A9e_Jacquemart-Andr%C3%A9.jpg",
        description: "Hôtel particulier avec une collection d'art privée",
        address: "158 Boulevard Haussmann, 75008 Paris",
        hours: "Tous les jours, de 10h à 18h. Nocturne le lundi jusqu'à 20h30.",
        price: "15€",
        collections: [
            "Peintures",
            "Sculptures",
            "Meubles",
            "Objets d'art",
            "Tapisseries"
        ],
        fullDescription: "Le Musée Jacquemart-André est un somptueux hôtel particulier du XIXe siècle qui abrite une impressionnante collection d'art, rassemblée par le couple de collectionneurs Édouard André et Nélie Jacquemart. Le musée offre un aperçu de la vie aristocratique parisienne de l'époque.",
        website: "https://www.musee-jacquemart-andre.com"
    },
    {
        id: 11,
        name: "Musée Carnavalet",
        district: "3rd",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Mus%C3%A9e_Carnavalet_-_entr%C3%A9e.jpg",
        description: "Dedicated to the history of Paris",
        address: "16 Rue des Francs Bourgeois, 75003 Paris",
        hours: "Tuesday to Sunday, 10 AM to 6 PM. Closed on Mondays.",
        price: "Free",
        collections: [
            "Historical Artifacts",
            "Paintings",
            "Sculptures"
        ],
        fullDescription: "The Musée Carnavalet offers a deep dive into the fascinating history of Paris, from its ancient roots to the modern era, with beautifully restored interiors.",
        website: "https://www.carnavalet.paris.fr"
    },
    {
        id: 12,
        name: "Petit Palais",
        district: "8th",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Petit_Palais_-_Paris.jpg",
        description: "Museum of Fine Arts",
        address: "Avenue Winston Churchill, 75008 Paris",
        hours: "Tuesday to Sunday, 10 AM to 6 PM. Closed on Mondays.",
        price: "Free",
        collections: [
            "Fine Arts",
            "Decorative Arts",
            "Sculptures"
        ],
        fullDescription: "The Petit Palais houses a rich collection of fine arts, including works from the Renaissance to the early 20th century, and features a charming garden café.",
        website: "https://www.petitpalais.paris.fr"
    },
    {
        id: 13,
        name: "Muséum National d'Histoire Naturelle",
        district: "5th",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Mus%C3%A9um_national_d%27histoire_naturelle.jpg",
        description: "Dedicated to natural history",
        address: "57 Rue Cuvier, 75005 Paris",
        hours: "Monday to Sunday, 10 AM to 6 PM.",
        price: "€10",
        collections: [
            "Paleontology",
            "Botany",
            "Zoology",
            "Mineralogy"
        ],
        fullDescription: "The Muséum National d'Histoire Naturelle offers a fascinating exploration of the natural world, with highlights including its Grand Gallery of Evolution and a historic botanical garden.",
        website: "https://www.mnhn.fr"
    },
    {
        id: 14,
        name: "Cité des Sciences et de l'Industrie",
        district: "19th",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cit%C3%A9_des_Sciences_et_de_l%27Industrie_%28Paris%29_%28October_2011%29.jpg",
        description: "Science and technology museum",
        address: "30 Avenue Corentin Cariou, 75019 Paris",
        hours: "Tuesday to Sunday, 10 AM to 6 PM. Closed on Mondays.",
        price: "€12",
        collections: [
            "Interactive Exhibits",
            "Astronomy",
            "Physics",
            "Engineering"
        ],
        fullDescription: "The Cité des Sciences et de l'Industrie is an interactive science museum offering exhibits on various topics, from astronomy to cutting-edge technology.",
        website: "https://www.cite-sciences.fr"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Générer les options d'arrondissement
    function populateDistrictFilter() {
        const districtFilter = document.getElementById('district-filter');
        
        // Fonction pour obtenir le suffixe ordinal anglais
        const getOrdinalSuffix = (n) => {
            const j = n % 10, k = n % 100;
            if (j === 1 && k !== 11) return 'st';
            if (j === 2 && k !== 12) return 'nd';
            if (j === 3 && k !== 13) return 'rd';
            return 'th';
        };

        // Générer les 20 options
        for (let i = 1; i <= 20; i++) {
            const option = document.createElement('option');
            const suffix = getOrdinalSuffix(i);
            option.value = `${i}${suffix}`;
            option.textContent = `${i}${suffix} arrondissement`;
            districtFilter.appendChild(option);
        }
    }

    // Afficher les musées
    function renderMuseums(filteredMuseums) {
        const container = document.getElementById('museum-container');
        if (!container) {
            console.error('Error: Container element not found!');
            return;
        }
        
        container.innerHTML = '';
        
        filteredMuseums.forEach(museum => {
            const cardHTML = `
                <div class="museum-card" data-museum-id="${museum.id}">
                    <img src="${museum.image}" class="museum-image" alt="${museum.name}">
                    <div class="museum-info">
                        <h3>${museum.name}</h3>
                        <div class="district">${museum.district} arrondissement</div>
                        <p>${museum.description}</p>
                        <button class="view-more-btn">View Details</button>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', cardHTML);
        });

        document.querySelectorAll('.museum-card').forEach(card => {
            card.addEventListener('click', () => {
                const museumId = card.dataset.museumId;
                const museum = museums.find(m => m.id === parseInt(museumId));
                showMuseumDetails(museum);
            });
        });
    }

    // Afficher les détails du musée
    function showMuseumDetails(museum) {
        sessionStorage.setItem('currentMuseum', JSON.stringify(museum));
        window.location.href = 'museum-details.html';
    }

    // Mettre à jour les filtres
    function updateFilters() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const district = document.getElementById('district-filter').value;
        
        const filtered = museums.filter(museum => {
            const nameMatch = museum.name.toLowerCase().includes(searchTerm);
            const districtMatch = district ? museum.district === district : true;
            return nameMatch && districtMatch;
        });
        
        renderMuseums(filtered);
    }

    // Initialisation
    populateDistrictFilter();
    renderMuseums(museums);

    // Écouteurs d'événements
    document.getElementById('search').addEventListener('input', updateFilters);
    document.getElementById('district-filter').addEventListener('change', updateFilters);

    // Ajouter le footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div style="text-align: center; margin-top: 2rem; padding: 1rem; background-color: #f8f9fa;">
            <p>Contact us: <a href="contact.html">Contact Page</a></p>
            <p>Follow us on: 
                <a href="https://facebook.com" target="_blank" style="margin: 0 5px;"><img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" style="width: 24px;"></a>
                <a href="https://twitter.com" target="_blank" style="margin: 0 5px;"><img src="https://img.icons8.com/color/48/twitter--v1.png" alt="Twitter" style="width: 24px;"></a>
                <a href="https://instagram.com" target="_blank" style="margin: 0 5px;"><img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="Instagram" style="width: 24px;"></a>
            </p>
        </div>
    `;
    document.body.appendChild(footer);
});