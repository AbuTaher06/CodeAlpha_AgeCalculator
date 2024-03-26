function calculateAge() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value) - 1;
    const day = parseInt(document.getElementById("day").value);
    if (!year || !month || !day) {
        document.getElementById("result").innerHTML = "Please Enter all fields";
        return;
    }
    const today = new Date();
    const birthDate = new Date(year, month, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerHTML = "Your age is: " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days old";
}
