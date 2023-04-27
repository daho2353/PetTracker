const bossNames = ["Abyssal Sire", "Alchemical Hydra", "Barrows Chests", "Bryophyta", "Callisto", "Cerberus", "Chambers of Xeric", "Chaos Elemental", "Chaos Fanatic", "Commander Zilyana", "Corporeal Beast", "Crazy Archaeologist", "Dagannoth Prime", "Dagannoth Rex", "Dagannoth Supreme", "Deranged Archaeologist", "General Graardor", "Giant Mole", "Grotesque Guardians", "Hespori", "Kalphite Queen", "King Black Dragon", "Kraken", "Kree'Arra", "K'ril Tsutsaroth", "Mimic", "Nightmare", "Obor", "Sarachnis", "Scorpia", "Skotizo", "Tempoross", "The Gauntlet", "The Corrupted Gauntlet", "Theatre of Blood", "Thermonuclear Smoke Devil", "TzKal-Zuk", "TzTok-Jad", "Venenatis", "Vet'ion", "Vorkath", "Wintertodt", "Zalcano", "Zulrah"];
const skillPets = ["Hunter", "Woodcutting", "Agility", "Fishing", "Runecraft", "Mining", "Thieving", "Farming"];
const miscPets = ["Bloodhound", "Chompy chick", "Soul Wars", "Barbarian Assault", "Gotr"];

function populateBosses()
{
    bossNames.forEach(name => {
        const option = document.createElement("a");
        option.href= "#"
        option.textContent = name;
        document.getElementById("bossPets").appendChild(option);
    });
    skillPets.forEach(name => {
        const option = document.createElement("a");
        option.href= "#"
        option.textContent = name;
        document.getElementById("skillingPets").appendChild(option);
    });
    miscPets.forEach(name => {
        const option = document.createElement("a");
        option.href= "#"
        option.textContent = name;
        document.getElementById("miscPets").appendChild(option);
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
