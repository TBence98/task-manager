function getDaysOfMonth(year, month) {
    const daysOfMonth = [];
    if (!year || !month) {
        const today = new Date();
        month = today.getMonth();
        year = today.getFullYear();
    }
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= lastDayOfMonth; day++) {
        const actDate = new Date(year, month, day);

        const dayName = new Intl.DateTimeFormat("en-US", {
            weekday: "short",
        }).format(actDate);

        daysOfMonth.push(dayName);
    }

    return daysOfMonth;
}

export default getDaysOfMonth;
