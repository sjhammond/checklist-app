export const renderMainMenu = () => {
    const menu = document.getElementById('menu'); 
    menu.innerHTML = `
        <a href="#">My Deployments</a>
        <a href="create-deployment.html">Create New Deployment</a>
        <a href="#">Settings</a>
        <a href="#">About</a>
    `
}

export const renderChecklistMenu = () => {
    const menu = document.getElementById('menu');
    menu.innerHTML = `
        <a href="deployment-list.html">Return to List</a>
        <div id="deployment-menu" class="menu">
            <span class="title">Title goes here</span>
            <a href="#">Edit Deployment</a>
            <span class="header-progress-count">0/X</span>
            <span class="title-progress-border"></span>
            <span class="title-progress-bar"></span>
        </div>
        <div id="phase-menu">
        </div>
        <a href="#">Settings</a>
    `
}