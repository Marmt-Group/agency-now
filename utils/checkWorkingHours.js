const checkWorkingHours = () => {
    // Check what day of the week and time it is
    const now = new Date(),
        day = now.getDay(),
        hours = now.getHours();

    //Check if day is Mon-Fri
    if (0 < day && day <= 5) {
        //check between 9am and 5pm
        if (9 <= hours && hours <= 17) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

export default checkWorkingHours