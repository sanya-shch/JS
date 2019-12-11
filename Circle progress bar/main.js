const circle = document.querySelector('.progress-circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}
// setProgress(70);

//test
const input = document.querySelector('.percent');
input.addEventListener('change', function(){
    setProgress(input.value);
});