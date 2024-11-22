export function checkIsAsc(data){
    for (let i = 0; i < data.length-1; i++) {
        if (data[i] > data[i+1]) {
            return false;
        }
    }
    return true;
}

export function checkIsDesc(data){
    for (let i = 0; i < data.length-1; i++) {
        if (data[i] < data[i+1]) {
            return false;
        }
    }
    return true;
}
