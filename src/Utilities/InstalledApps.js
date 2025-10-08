export const getInstalledApps = () => {
    const existingApps = localStorage.getItem('installed');
    return existingApps ? JSON.parse(existingApps) : [];
}

export const addApps = (id) => {
    const storedApps = getInstalledApps();

    if (storedApps.includes(id)) {
        alert("The App is already installed");
        return;
    }

    storedApps.push(id);
    localStorage.setItem('installed', JSON.stringify(storedApps));
}

export const appsUninstall = (id) => {
    const storedApps = getInstalledApps()

    const updatedApps = storedApps.filter(item => item !== id)
    localStorage.setItem('installed', JSON.stringify(updatedApps));
    return updatedApps;
}