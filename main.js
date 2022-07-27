document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest (){
    const plantName = document.querySelector('input').value
    try{
        const response = await fetch (`https://ccaille-plant-api.herokuapp.com/api/${plantName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('specieName').innerText = data.speciesName
        document.getElementById('speciesHabitat').innerText = data.habitat
        document.getElementById('speciesHeight').innerText = data.height
        document.getElementById('plantPhoto').src = data.plantImage
    } catch(error){
        console.log(error)

    }
}