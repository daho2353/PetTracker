const bossPets = ["Abyssal Sire", "Alchemical Hydra", "Callisto", "Cerberus", "Chambers of Xeric", "Chaos Elemental", "Commander Zilyana", "Corporeal Beast", "Dagannoth Kings", "Gauntlet", "General Graardor", "Giant Mole", "Grotesque Guardians", "Kalphite Queen", "King Black Dragon", "Kraken", "Kree'Arra", "K'ril Tsutsaroth", "Muspah", "Nex", "Nightmare", "Sarachnis", "Scorpia", "Skotizo", "Tempoross",  "Theater of Blood", "Thermonuclear Smoke Devil", "Tombs of Amascut", "Zuk", "Jad", "Venenatis", "Vet'ion", "Vorkath", "Wintertodt", "Zalcano", "Zulrah"];
const skillPets = ["Hunter", "Woodcutting", "Agility", "Fishing", "Runecraft", "Mining", "Thieving", "Farming"];
const miscPets = ["Bloodhound", "Chompy Chick", "Soul Wars", "Penance Queen", "Gotr"];
const allPets = bossPets.concat(skillPets, miscPets).sort();
let currentBoss = "Alchemical Hydra";
const bossInformation = {
  "Chaos Elemental":
   {
    "imageName": "chaosele.png",
    "dropRate": "1/300",
   },
  "Dagannoth Kings":{ // add a case to displayBosses
    "Dagannoth Supreme": 
    {
      "imageName": "dagsupreme.png",
      "dropRate": "1/5000",
     },
    "Dagannoth Prime": 
    {
      "imageName": "dagprime.png",
      "dropRate": "1/5000",
     },
    "Dagannoth Rex": 
    {
      "imageName": "dagrex.png",
      "dropRate": "1/5000",
     },
  },
  "Penance Queen": 
  {
    "imageName": "penance.png",
    "dropRate": "1/1000",
   },
  "Kree'Arra": 
  {
    "imageName": "kree.png",
    "dropRate": "1/5000",
   },
  "General Graardor": 
  {
    "imageName": "bandos.png",
    "dropRate": "1/5000",
   },
  "Commander Zilyana": 
  {
    "imageName": "zilyana.png",
    "dropRate": "1/5000",
   },
  "K'ril Tsutsaroth":
  {
    "imageName": "kril.png",
    "dropRate": "1/5000",
   },
  "Giant Mole": 
  {
    "imageName": "mole.png",
    "dropRate": "1/3000",
   },
  "King Black Dragon": 
  {
    "imageName": "kbd.png",
    "dropRate": "1/3000",
   },
  "Kalphite Queen": 
  {
    "imageName": "kq.png",
    "dropRate": "1/3000",
   },
  "Thermonuclear Smoke Devil": //add a case to DisplayBosses() for alt
  {
    "imageName": "thermy.png",
    "dropRate": "1/3000",
   },
  "Kraken": 
  {
    "imageName": "kraken.png",
    "dropRate": "1/3000",
   },
  "Corporeal Beast":  //add a case to DisplayBosses() for alt
  {
    "imageName": "corp.png",
    "dropRate": "1/5000",
   },
  "Zulrah":   //add a case to DisplayBosses() for alt
  {
    "imageName": "snakeling.png",
    "dropRate": "1/4000",
   },
  "Chompy Chick": 
  {
    "imageName": "chompy.png",
    "dropRate": "1/500",
   },
  "Venenatis":  //add a case to DisplayBosses() for alt and drop rates
  {
    "imageName": "venenatisnew.png", //need to make a special case for the wildy bosses since multi and singles have different drop rates
   },
  "Callisto":  //add a case to DisplayBosses() for alt and drop rates
  {
    "imageName": "callistonew.png",
   },
  "Vet'ion":  //add a case to DisplayBosses() for alt and drop rates
  {
    "imageName": "vetionpurplenew.png",
   },
  "Scorpia": 
  {
    "imageName": "scorpia.png",
    "dropRate": "1/2000",
   },
  "Jad": //add a case to DisplayBosses() for alt and drop rates
  {
    "imageName": "jadregular.png", //add case for on task kills, off task kills, and cape gambles
   },
  "Cerberus": 
  {
    "imageName": "cerb.png",
    "dropRate": "1/3000",
   },
  "Abyssal Sire": 
  {
    "imageName": "sire.png",
    "dropRate": "1/2560", //also add a case for how many unsireds to get pet
   },
  "Fishing": //add a case to DisplayBosses() for alt
  {
    "imageName": "fishingwhite.png",
   },
  "Mining": //add a case to DisplayBosses() for alt
  {
    "imageName": "miningdefault.png",
   },
  "Woodcutting": 
  {
    "imageName": "wc.png",
   },
  "Hunter":{ //add a case to DisplayBosses() for proper display
    "Chinchompa": 
    {
      "imageName": "chinblack.png",
     },
    "Herbiboar": 
    {
      "imageName": "herbi.png",
      "dropRate": "1/6500", //add a calculation for xp -> kc 
     },
  },
  "Bloodhound": 
  {
    "imageName": "bloodhound.png",
    "dropRate": "1/1000",
   },
  "Agility": //add a case to DisplayBosses() for alt
  {
    "imageName": "agilityregular.png",
   },
  "Farming": //add a case to DisplayBosses() for alt
  {
    "imageName": "farmingdefault.png",
   },
  "Runecraft": //add a case to DisplayBosses() for alt
  {
    "imageName": "runecraftdefault.png",
   },
  "Thieving": //add a case to DisplayBosses() for alt
  {
    "imageName": "rockydefault.png",
   },
  "Wintertodt": //add a case to DisplayBosses() for alt
  {
    "imageName": "phoenixred.png",
    "dropRate": "1/5000",
   },
  "Chambers of Xeric": //add a case to DisplayBosses() for alt
  {
    "imageName": "raids1olm.png",
    "dropRate": "1/1576", // also add a case for number of purples obtained without pet
   },
  "Skotizo": 
  {
    "imageName": "skotos.png",
    "dropRate": "1/65",
   },
  "Zuk": //add a case to DisplayBosses() for alt
  {
    "imageName": "zuk.png",
    "dropRate": "1/43", // add case for on task kill and cape gambles
   },
  "Grotesque Guardians": //add a case to DisplayBosses() for alt
  {
    "imageName": "noon.png",
    "dropRate": "1/3000",
   },
  "Vorkath": 
  {
    "imageName": "vorkath.png",
    "dropRate": "1/3000",
   },
  "Theater of Blood": //add a case to DisplayBosses() for alt
  {
    "imageName": "raids2verzik.png",
    "dropRate": "1/650",
   },
  "Alchemical Hydra": //add a case to DisplayBosses() for alt
  {
    "imageName": "hydragreen.png",
    "dropRate": "1/3000",
   },
  "Sarachnis": //add a case to DisplayBosses() for alt
  {
    "imageName": "srarachadefault.png",
    "dropRate": "1/3000",
   },
  "Gauntlet": //add a case to DisplayBosses() for alt
  {
    "imageName": "gauntletblue.png", // add case for gauntlet and corrupted
   },
  "Zalcano": 
  {
    "imageName": "zalcano.png",
    "dropRate": "1/2250",
   },
  "Nightmare": //add a case to DisplayBosses() for alt
  {
    "imageName": "nightmaredefault.png", // add case for normal and phosani
   },
  "Soul Wars": //add a case to DisplayBosses() for alt
  {
    "imageName":  "soulwarscreator.png",
    "dropRate": "1/400",
   },
  "Tempoross": 
  {
    "imageName": "tempoross.png",
    "dropRate": "1/8000",
   },
  "Nex": 
  {
    "imageName":  "nex.png",
    "dropRate": "1/500",
   },
  "Gotr": 
  {
    "imageName":  "gotr.png",
    "dropRate": "1/4000",
   },
  "Tombs of Amascut": //add a case to DisplayBosses() for alt
  {
    "imageName":  "raids3tumeken.png",
    "dropRate": "1/2000", //maybe add a slider for average invocation and calculate a more accurate drop rate based on that
   },
  "Muspah": //add a case to DisplayBosses() for alt
  {
    "imageName":  "muphinrange.png",
    "dropRate": "1/2500",
   },
};

window.onload = function() {
    populateBosses();
    displayBoss(currentBoss);
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
      option.addEventListener('click',function(event){ //calls the displayBoss function on click which takes the option selected by the user and uses the object bossInformation to fill out information on the web page.
        event.preventDefault();
        currentBoss = option.textContent;
        displayBoss(option.textContent);
      });
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


  function displayBoss(boss) //create a switch statement which sets the proper image and drop rate, most can be covered by a default case but some bosses like wilderness and sire have special calculations. 
  {
    let hasAlt = false; //use this in the switch case for each boss if it has an alt skin set it to true, at the end of the function check if this is true and call a function to add buttons for each alternative skin based on the boss. 
    let currentBossImage = document.getElementById("petimage");
    let currentBossDropRate = document.getElementById("droprate");
    switch(boss){
      //case "Dagganoth Kings":
      //case "Zulrah":
      //  hasAlt = True;
      //break;
      default:
        currentBossImage.src = "files/img/" + bossInformation[boss].imageName;
        currentBossDropRate.innerHTML = bossInformation[boss].dropRate;
    }

  }