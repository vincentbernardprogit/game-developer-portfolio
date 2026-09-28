const profileFileUrl = "./profile.json"
const portfolioFileUrl = "./data.json"
const educationDetail = document.querySelector(".education")
const organizationDetail = document.querySelector(".organization")
const workDetail = document.querySelector(".work")
const skillDetail = document.querySelector(".skill")
const portfolioItem = document.querySelector(".portfolio-item")
const portfolioDetail = document.querySelector(".portfolio-detail")
const contactDetail = document.querySelector(".contact-detail")

document.getElementById("resume-button").addEventListener('click', () => {
    const fileUrl = "./Vincent_Bernard_Resume.pdf"
    const fileName = "Vincent_Bernard_Resume"
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
})

// education
fetch (profileFileUrl)
    .then (res => res.json())
    .then (data => {
        educationDetail.innerHTML = ''
        data.education.forEach(item => {
            educationDetail.innerHTML =
                `<div class="card-body">
                    <p>Period: ${item.start_year} - ${item.finish_year}</p>
                    <p>Location: ${item.location}</p>
                    <p>Major: ${item.major}</p>
                    <p>GPA: ${item.gpa}</p>
                </div>`
        })
    })
    .catch (e => console.log(e))

// organization
fetch (profileFileUrl)
    .then (res => res.json())
    .then (data => {
        organizationDetail.innerHTML = ''
        data.organization.forEach(item => {
            organizationDetail.innerHTML =
                `<div class="card-body">
                    <p>Period: ${item.start_year} - ${item.finish_year}</p>
                    <p>Location: ${item.location}</p>
                    <p>Position: ${item.position}</p>
                    <p>Programming Languages/Frameworks/Tools: ${item.tech}</p>
                    <p>Tasks:</p>
                    <p>1. ${item.desc1}</p>
                    <p>2. ${item.desc2}</p>
                    <p>3. ${item.desc3}</p>
                    <p>4. ${item.desc4}</p>
                </div>`
        })
    })
    .catch (e => console.log(e))

// work
fetch (profileFileUrl)
    .then (res => res.json())
    .then (data => {
        workDetail.innerHTML = ''
        data.work.forEach(item => {
            workDetail.innerHTML =
                `<div class="card-body">
                    <p>Period: ${item.start_year} - ${item.finish_year}</p>
                    <p>Location: ${item.location}</p>
                    <p>Position: ${item.position}</p>
                    <p>Programming Languages/Frameworks/Tools: ${item.tech}</p>
                    <p>Tasks:</p>
                    <p>1. ${item.desc1}</p>
                    <p>2. ${item.desc2}</p>
                    <p>3. ${item.desc3}</p>
                    <p>4. ${item.desc4}</p>
                </div>`
        })
    })
    .catch (e => console.log(e))

// skills and tools
fetch (profileFileUrl)
    .then (res => res.json())
    .then (data => {
        skillDetail.innerHTML = ''
        data.skills.forEach(item => {
            skillDetail.innerHTML +=
                `<div class="card-body">
                    <h5 style="text-align: left; text-decoration: underline;">${item.title}</h5>
                    <p>${item.skill1}</p>
                    <p>${item.skill2}</p>
                    <p>${item.skill3}</p>
                    <p>${item.skill4}</p>
                </div>`
        })
    })
    .catch (e => console.log(e))

// portfolio
fetch (portfolioFileUrl)
    .then (res => res.json())
    .then (data => {
        portfolioItem.innerHTML = ''
        data.games.forEach(item => {
            portfolioItem.innerHTML +=
                `<button type="button" id="btn-pop-effect" class="btn-pop-effect" style="margin: 25px;" onclick="showPortfolioDetail(${item.id})">
                    <div class="card" style="width: 10rem;">
                        <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    </div>
                </button>`
        })
    })
    .catch (e => console.log(e))

async function getDataById(portfolioFileUrl, targetId) {
    try {
        const response = await fetch(portfolioFileUrl)
        const data = await response.json()
        return data.games.find(item => item.id === targetId)
    } catch (error) {
        console.log("Error reading or parsing the JSON file:", error)
    }
}

async function showPortfolioDetail(id) {
    const selectedGame = await getDataById(portfolioFileUrl, id)

    if (!selectedGame) {
        console.error("Game not found!")
        return
    }

    portfolioDetail.innerHTML =
        `<div class="card text-white bg-dark mb-3 portfolio-card-detail" style="max-width: 18rem;">
            <img src="${selectedGame.image}" class="card-img-top" alt="${selectedGame.title}">
            <div class="card-header alert alert-primary"><h3>${selectedGame.title}</h3></div>
            <div class="card-body">
                <h4 class="card-title"><span class="badge badge-pill badge-warning">${selectedGame.project_type}</span> <span class="badge badge-pill badge-warning">${selectedGame.platform}</span></h4>
                <h4 class="card-text"><span class="badge badge-pill badge-light">${selectedGame.genre}</span> <span class="badge badge-pill badge-light">${selectedGame.subgenre}</span></h4>
                <p class="card-text">${selectedGame.technology}</p>
                <p class="card-text">${selectedGame.description}</p>
                <a href="${selectedGame.web_link}" class="btn btn-outline-primary" aria-pressed="true" target="_blank">Play</a>
                <a href="${selectedGame.github_link}" class="btn btn-outline-primary" aria-pressed="true" target="_blank">Documentation</a>
            </div>
        </div>`
}

//contact
fetch (profileFileUrl)
    .then (res => res.json())
    .then (data => {
        contactDetail.innerHTML = ''
        data.contact.forEach(item => {
            contactDetail.innerHTML +=
                `<div class="col m4 s12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-${item.icon}" viewBox="0 0 16 16">
                        ${item.icon_svg_path}
                    </svg>
                    <h4>${item.title}</h4>
                    <h5>${item.url}</h5>
                    <a href="${item.link}" target="_blank"><h5>${item.link}</h5></a>
                </div>`
        })
    })
    .catch (e => console.log(e))