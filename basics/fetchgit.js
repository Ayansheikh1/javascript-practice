// 🟠 5. Fetch GitHub data and print GitHub name


async function fetchGitHubName(){
    try{
        const response = await fetch("https://api.github.com/users/Ayansheikh1");
        const data = await response.json();
        console.log("GitHub name: ",data.name);
    } catch(error){
        console.error("gitHub Fetch error: ", error);
    }
}

fetchGitHubName();

