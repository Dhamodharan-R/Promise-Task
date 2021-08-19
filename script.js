const europe = fetch("https://restcountries.eu/rest/v2/region/europe")
.then((data)=>data.json())


const asia = fetch("https://restcountries.eu/rest/v2/region/asia")
.then((data)=>data.json())


const combine = Promise.all([europe,asia])
.then((con)=> con[0].concat(con[1]))
.then((ans)=> console.log(ans))
