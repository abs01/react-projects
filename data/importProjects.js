export function importProjects(setProjects){
    fetch("/data/projectes.json")
        .then(r => r.json())
        .then(data => {
            if(data.length==0) console.log("Unable to load any projects");
            else {
                setProjects(data);
            }
        }).catch(error => {
            console.error(error);
        })
}