function nextDay(year1, month1, day1) {


    let year = year1;
    let day = day1;
    let month = month1;



    if (year == 1) {
        year = 1901;
    }

    let dateAsStr = year + `-` + month + `-` + day;


    let date = new Date(dateAsStr);


    date.setDate(date.getDate() + 1);


    function formatDate(date = new Date()) {
        const year = date.toLocaleString('default', { year: 'numeric' });
        const month = date.toLocaleString('default', {
            month: '2-digit',
        });
        const day = date.toLocaleString('default', { day: '2-digit' });

        return [parseInt(year), parseInt(month), parseInt(day)].join('-');
    }

    console.log(formatDate(date));
}

nextDay(1, 1, 1)