import axios from "axios";

async function getProfileData() {
        let data;
        await axios.get(`https://api.github.com/users/m7md0a`)
        .then(res => {
            data = res.data
        });
        return data
}

async function getAbout() {
    let data;
    await axios.get(`https://raw.githubusercontent.com/m7md0a/m7md0a/main/data.json`)
    .then(res => {
        data = res.data;
    });
    return data
}

async function getProjects() {
    let data;
    await axios.get('https://api.github.com/users/m7md0a/repos').then(res => {
        data = res.data.filter(e => e.sortM = e.updated_at.replace(/T|-|:|Z/gi,'')).sort((a,b) => a.sortM - b.sortM).reverse()
    });
    return data
}

async function getOneProject(projectName) {
    let data;
    await axios.get(`https://api.github.com/repos/m7md0a/${projectName}`)
    .then(res => {
        data = res.data
    });
    return data
}


async function getReadme(projectName) {
    try {
        let data;
        await axios.get(`https://raw.githubusercontent.com/m7md0a/${projectName}/main/README.md`)
        .then(res => {
            data = res.data
        });
        return data
    }
    catch (e){
        return false
    }
}

export {getProfileData, getProjects, getOneProject, getReadme, getAbout};