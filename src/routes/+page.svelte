<script>
  import { onMount } from 'svelte';
  import { museums, getUniqueDistricts } from '$lib/data/museums';
  import MuseumCard from '$lib/components/MuseumCard.svelte';
  import Header from '$lib/components/Header.svelte';
  
  let searchTerm = '';
  let selectedDistrict = '';
  let filteredMuseums = [...museums];
  
  // Générer les options du filtre d'arrondissement
  function getOrdinalSuffix(n) {
      const j = n % 10, k = n % 100;
      if (j === 1 && k !== 11) return 'st';
      if (j === 2 && k !== 12) return 'nd';
      if (j === 3 && k !== 13) return 'rd';
      return 'th';
  }
  
  let districtOptions = [];
  
  onMount(() => {
      // Créer les options du filtre d'arrondissement
      for (let i = 1; i <= 20; i++) {
          const suffix = getOrdinalSuffix(i);
          districtOptions.push(`${i}${suffix}`);
      }
      
      // Initialiser les musées filtrés
      updateFilters();
  });
  
  // Mettre à jour les filtres quand les critères changent
  $: {
      updateFilters();
  }
  
  function updateFilters() {
      filteredMuseums = museums.filter(museum => {
          const nameMatch = museum.name.toLowerCase().includes(searchTerm.toLowerCase());
          const districtMatch = selectedDistrict ? museum.district === selectedDistrict : true;
          return nameMatch && districtMatch;
      });
  }
</script>

<svelte:head>
  <title>Paris Museums Guide - Discover All Museums in Paris</title>
  <meta name="description" content="Explore the rich cultural heritage of Paris through our comprehensive guide to all museums in the city.">
</svelte:head>

<div class="home-page">
  <section class="filters">
      <input 
          type="text" 
          id="search" 
          placeholder="Search museum..." 
          bind:value={searchTerm}
      >
      <select id="district-filter" bind:value={selectedDistrict}>
          <option value="">All districts</option>
          {#each districtOptions as district}
              <option value={district}>{district} arrondissement</option>
          {/each}
      </select>
  </section>
  
  <div class="museum-grid">
      {#each filteredMuseums as museum (museum.id)}
          <MuseumCard {museum} />
      {/each}
      
      {#if filteredMuseums.length === 0}
          <p class="no-results">No museums found matching your criteria.</p>
      {/if}
  </div>
</div>

<style>
  .home-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
  }
  
  .no-results {
      grid-column: 1 / -1;
      text-align: center;
      padding: 2rem;
      font-size: 1.2rem;
      color: #666;
  }
</style>