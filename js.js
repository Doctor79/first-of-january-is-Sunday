const input = document.querySelector('input')
const btn = document.querySelector('button')
const dayOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
btn.addEventListener('click', function(e) {
    e.preventDefault();
    const result = document.querySelector('h3')
    let data = input.value;
    let dataInt = parseInt(input.value)
    const d = new Date(dataInt, 0, 1);
    input.value = '';

    if (isNaN(data)) {

        console.log(data)
        alert('Wpisz cyfry nie literki')
    } else {
        if (data.length > 4) {
            alert('Nie no tak daleko w przyszłość nie zaglądajmy :)')

        } else {

            if (d.getDay() === 0) {

                result.textContent = `Tak, w tym roku pierwszy stycznia to ${dayOfWeek[d.getDay()]}`
            } else {

                result.textContent = `W tym roku pierwszy stycznia to nie niedziela, tylko ${dayOfWeek[d.getDay()]}`


            }
        }
    }
})