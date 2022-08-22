String.prototype.replaceAt = (index, replacement, obj) => {;
    if (index >= obj.length) {
        return obj.valueOf();
    }
    return obj.substring(0, index) + replacement + obj.substring(index + 1);
    
}