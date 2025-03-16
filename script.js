let assignedRoles = []; // To keep track of assigned roles

const roles = [
    { name: 'Mr. Wilkins (Strict)', desc: 'Serious and rule-obsessed interviewer.' },
    { name: 'Mr. Patel (Eccentric)', desc: 'Asks bizarre, unexpected questions.' },
    { name: 'Samantha (Buzzword Fanatic)', desc: 'Loves corporate jargon and fancy phrases.' },
    { name: 'Greg (Know-it-all)', desc: 'Highly technical but awkward in social settings.' },
    { name: 'Monica (Receptionist/Assistant)', desc: 'Forgetful and chaotic, yet lovable.' },
    { name: 'Arjun (Overconfident)', desc: 'Too confident, often without reason.' },
    { name: 'Tina (Nervous)', desc: 'Shy and anxious, prone to panic under pressure.' },
    { name: 'Jerry (Casual)', desc: 'Too laid-back, often jokes during serious moments.' },
    { name: 'Ben (Intellectual)', desc: 'Philosophical thinker who overcomplicates everything.' },
    { name: 'Leon (Clueless)', desc: 'Unaware of what the company does, yet strangely confident.' }
];

function assignRoles() {
    const namesInput = document.getElementById('names').value.trim().split('\n').map(name => name.trim()).filter(name => name);

    if (namesInput.length !== roles.length) {
        document.getElementById('result').innerHTML = "Error: Number of names must match 10 roles.";
        return;
    }

    let availableRoles = [...roles];
    assignedRoles = [];

    let output = "<h3>Assigned Roles:</h3>";
    
    namesInput.forEach((name) => {
        const randomIndex = Math.floor(Math.random() * availableRoles.length);
        const selectedRole = availableRoles[randomIndex];

        assignedRoles.push({ name: name, role: selectedRole });

        output += `${name}: <span onclick="showRoleDetails('${selectedRole.name}', '${selectedRole.desc}')">${selectedRole.name}</span><br>`;
        availableRoles.splice(randomIndex, 1);  // Remove assigned role permanently
    });

    document.getElementById('result').innerHTML = output;
}

function resetRoles() {
    document.getElementById('result').innerHTML = "";
    document.getElementById('roleCard').style.display = "none";
    assignedRoles = [];
}

function showRoleDetails(roleName, roleDesc) {
    document.getElementById('roleDescription').innerHTML = `<b>${roleName}</b>: ${roleDesc}`;
    document.getElementById('roleCard').style.display = "block";
}
