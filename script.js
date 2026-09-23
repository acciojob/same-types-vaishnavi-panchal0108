function isSameType(value1, value2) {
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        return false;
    }

    return typeof value1 === typeof value2;
}