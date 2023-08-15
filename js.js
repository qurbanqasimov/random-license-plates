function generateLicensePlate() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    let licensePlate = '';
    
    for (let i = 0; i < 2; i++) {
        licensePlate += numbers[Math.floor(Math.random() * numbers.length)] 
    }
    
    for(let i = 0; i<2; i++){
        licensePlate +=letters[Math.floor(Math.random() * letters.length )] 
    }
    
    for (let i = 0; i < 3; i++) {
        licensePlate += numbers[Math.floor(Math.random() * numbers.length)];
    }
    
    return licensePlate;
}

const randomLicensePlate = generateLicensePlate();
const formattedLicensePlate = randomLicensePlate.slice(0,2) + "-" +  randomLicensePlate.slice(2,4) + "-" + randomLicensePlate.slice(4)
document.getElementById('licensePlate').textContent = formattedLicensePlate;


document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
});
