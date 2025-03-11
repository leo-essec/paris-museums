<script>
  import { museums } from '$lib/data/museums';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import MuseumCard from '$lib/components/MuseumCard.svelte';

  let filteredMuseums = [...museums];
  let searchTerm = '';
  let selectedDistrict = '';

  // Generate district options (moved out of onMount for SSR compatibility)
  function getOrdinalSuffix(n) {
      const j = n % 10, k = n % 100;
      if (j === 1 && k !== 11) return 'st';
      if (j === 2 && k !== 12) return 'nd';
      if (j === 3 && k !== 13) return 'rd';
      return 'th';
  }

  let districtOptions = [];
  for (let i = 1; i <= 20; i++) {
      const suffix = getOrdinalSuffix(i);
      districtOptions.push({
          value: `${i}${suffix}`,
          label: `${i}${suffix} district`
      });
  }

  // Filter museums based on search and district
  $: {
      filteredMuseums = museums.filter(museum => {
          const nameMatch = museum.name.toLowerCase().includes(searchTerm.toLowerCase());
          const districtMatch = selectedDistrict ? museum.district === selectedDistrict : true;
          return nameMatch && districtMatch;
      });
  }
</script>

<svelte:head>
  <title>Paris Museums Guide</title>
</svelte:head>

<Header />

<main>
  <section class="filters">
      <input  
          type="text"  
          id="search"  
          placeholder="Search museum..."  
          bind:value={searchTerm}
      >
      
      <select id="district-filter" bind:value={selectedDistrict}>
          <option value="">All districts</option>
          {#each districtOptions as option}
              <option value={option.value}>{option.label}</option>
          {/each}
      </select>
  </section>
  
  <div class="museum-grid">
      {#each filteredMuseums as museum (museum.id)}
          <MuseumCard {museum} />
      {/each}
  </div>
</main>

<Footer>
  <div>
      <p>Contact us: <a href="/contact">Contact Page</a> | <a href="/about">About Us</a></p>
  </div>
</Footer>
