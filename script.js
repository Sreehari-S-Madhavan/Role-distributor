let assignedRoles = []; // To keep track of assigned roles

const roles = [
    { name: 'Mr. Wilkins (Strict)', desc: 'Lead interviewer with a no-nonsense attitude.' },
    { name: 'Mr. Patel (Eccentric)', desc: 'CEO with unpredictable and bizarre questions.' },
    { name: 'Samantha (Buzzword Fanatic)', desc: 'HR rep who loves jargon and corporate lingo.' },
    { name: 'Greg (Know-it-all)', desc: 'Tech specialist who explains too much.' },
    { name: 'Monica (Methodical & Calm)', desc: 'Focuses on teamwork and leadership skills.' },
    { name: 'Arjun (Overconfident)', desc: 'Talks big but lacks real depth.' },
    { name: 'Tina (Nervous)', desc: 'Knows her stuff but panics under pressure.' },
    { name: 'Jerry (Casual)', desc: 'Too relaxed and often jokes during serious moments.' },
    { name: 'Ben (Intellectual)', desc: 'Overthinks everything with excessive analysis.' },
    { name: 'Leah (Chaotic & Forgetful)', desc: 'Receptionist who mixes up names and schedules.' }
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
