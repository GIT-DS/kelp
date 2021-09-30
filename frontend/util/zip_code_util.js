export const fetchLocation = zipcode => (
    $.ajax({
        url: `https://www.zipcodeapi.com/rest/< SpSgslGvSVSwibTodmHMVjSPeoOyA5npqttBP2e0HFeX30jymLQJ86WPFJUNVopu>/info.json/${zipcode}/city`
    })
)