const bossPets = ["Abyssal Sire", "Alchemical Hydra", "Callisto", "Cerberus", "Chambers of Xeric", "Chaos Elemental", "Commander Zilyana", "Corporeal Beast", "Dagannoth Prime", "Dagannoth Rex", "Dagannoth Supreme", "General Graardor", "Giant Mole", "Grotesque Guardians", "Kalphite Queen", "King Black Dragon", "Kraken", "Kree'Arra", "K'ril Tsutsaroth", "Nightmare", "Sarachnis", "Scorpia", "Skotizo", "Tempoross", "The Gauntlet", "Theatre of Blood", "Thermonuclear Smoke Devil", "TzKal-Zuk", "TzTok-Jad", "Venenatis", "Vet'ion", "Vorkath", "Wintertodt", "Zalcano", "Zulrah"];
const skillPets = ["Hunter", "Woodcutting", "Agility", "Fishing", "Runecraft", "Mining", "Thieving", "Farming"];
const miscPets = ["Bloodhound", "Chompy chick", "Soul Wars", "Barbarian Assault", "Gotr"];
const allPets = bossPets.concat(skillPets, miscPets).sort();


window.onload = function() {
    populateBosses();
  }
  
  function populateBosses() { //This function is used to populate the bosses within the sidebar
    const petTypeSelector = document.getElementById("pet-type-selector");
    const allPetsDiv = document.getElementById("allPets");
    const bossPetsDiv = document.getElementById("bossPets");
    const skillingPetsDiv = document.getElementById("skillingPets");
    const miscPetsDiv = document.getElementById("miscPets");
  
    // Display all pets by default
    allPets.forEach(name => {
      const option = document.createElement("a");
      option.href = "#";
      option.id = "pet-name";
      option.textContent = name;
      allPetsDiv.appendChild(option);
    });
  
    // Update pet list based on pet type selection
    petTypeSelector.addEventListener("change", function() {
      const selectedPetType = petTypeSelector.value;
  
      // Remove all existing pets from pet divs
      allPetsDiv.innerHTML = "";
      bossPetsDiv.innerHTML = "";
      skillingPetsDiv.innerHTML = "";
      miscPetsDiv.innerHTML = "";
  
      if (selectedPetType === "allPets") {
        // Show all pets
        allPetsDiv.style.display = "block";
        allPetsDiv.innerHTML = ""; // clear the content before updating
        allPets.forEach(name => {
          const option = document.createElement("a");
          option.href = "#";
          option.id = "pet-name";
          option.textContent = name;
          allPetsDiv.appendChild(option);
        });
      } else if (selectedPetType === "bossPets") {
        // Show boss pets
        bossPets.forEach(name => {
          const option = document.createElement("a");
          option.href = "#";
          option.textContent = name;
          option.id = "pet-name";
          bossPetsDiv.appendChild(option);
        });
        bossPetsDiv.style.display = "block";
      } else if (selectedPetType === "skillingPets") {
        // Show skilling pets
        skillPets.sort().forEach(name => {
          const option = document.createElement("a");
          option.href = "#";
          option.textContent = name;
          option.id = "pet-name";
          skillingPetsDiv.appendChild(option);
        });
        skillingPetsDiv.style.display = "block";
      } else if (selectedPetType === "miscPets") {
        // Show misc pets
        miscPets.sort().forEach(name => {
          const option = document.createElement("a");
          option.href = "#";
          option.textContent = name;
  
          miscPetsDiv.appendChild(option);
        });
        miscPetsDiv.style.display = "block";
      }
    });
  }
   
function toggleNav()
{
    let status = document.getElementById("openbtn");
    if (status.innerHTML=="☰ Open Sidebar"){
        status.innerHTML = " ☰ Close Sidebar"
        document.getElementById("mySidebar").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";
    }
    else if (status.innerHTML== " ☰ Close Sidebar")
    { 
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        status.innerHTML= "☰ Open Sidebar"
    }
}

function filterPets() {
    const searchInput = document.getElementById("searchbar");
    const selectedPetType = document.getElementById("pet-type-selector").value;
    const allPetsDiv = document.getElementById("allPets");
    const bossPetsDiv = document.getElementById("bossPets");
    const skillingPetsDiv = document.getElementById("skillingPets");
    const miscPetsDiv = document.getElementById("miscPets");
  
    // hide all divs
    allPetsDiv.style.display = "none";
    bossPetsDiv.style.display = "none";
    skillingPetsDiv.style.display = "none";
    miscPetsDiv.style.display = "none";
  
    // show selected div
    let selectedDiv;
    if (selectedPetType === "allPets") {
      selectedDiv = allPetsDiv;
    } else if (selectedPetType === "bossPets") {
      selectedDiv = bossPetsDiv;
    } else if (selectedPetType === "skillingPets") {
      selectedDiv = skillingPetsDiv;
    } else if (selectedPetType === "miscPets") {
      selectedDiv = miscPetsDiv;
    }
  
    // filter the pets
    const searchTerm = searchInput.value.toLowerCase();
    const matchingPets = Array.from(selectedDiv.children).filter(option => {
      return option.textContent.toLowerCase().includes(searchTerm);
    });
  
    // hide all options and show only matching ones
    selectedDiv.querySelectorAll("a").forEach(option => {
      option.style.display = "none";
    });
    matchingPets.forEach(option => {
      option.style.display = "block";
    });
  
    // show the selected div
    selectedDiv.style.display = "block";
  }

  