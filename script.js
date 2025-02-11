// Tobacco facts
const facts = [
    'Tobacco use is the leading cause of preventable death worldwide.',
    'Smoking can increase your risk of heart disease, stroke, and lung cancer.',
    'Secondhand smoke can cause serious health problems, including lung cancer and heart disease.',
];

// Resources
const resources = [
    'National Cancer Institute: Smoking Quitline (1-877-44U-QUIT)',
    'American Cancer Society: QuitForLife Program',
    'American Lung Association: Freedom From Smoking Program',
];

// Display tobacco facts
const factList = document.getElementById('fact-list');
facts.forEach((fact) => {
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    factList.appendChild(listItem);
});

// Display resources
const resourceList = document.getElementById('resource-list');
resources.forEach((resource) => {
    const listItem = document.createElement('li');
    listItem.textContent = resource;
    resourceList.appendChild(listItem);
});

// Quit smoking button
const quitSmokingButton = document.getElementById('quit-smoking-button');
quitSmokingButton.addEventListener('click', () => {
    alert('Congratulations on taking the first step towards quitting smoking!');
});
