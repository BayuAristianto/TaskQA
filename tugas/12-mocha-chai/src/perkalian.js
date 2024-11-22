function perkalian (nilaiA, nilaiB){

    const hasil = nilaiA * nilaiB

    if ((nilaiA === undefined || nilaiA === null)||
    (nilaiB === undefined || nilaiB === null)||
    (nilaiA === undefined || nilaiA === null) && (nilaiB === undefined || nilaiB === null)) 
    throw 'Parameter harus diisi'
    
    //if (nilaiA === undefined || nilaiA === null) throw 'Parameter harus diisi'
    if (typeof nilaiA !== 'number' && typeof nilaiB !== 'number') throw 'Parameter nilaiA dan nilaiB harus berupa angka'
    if (typeof nilaiA !== 'number') throw 'Parameter nilaiA harus berupa angka'
    if (typeof nilaiB !== 'number') throw 'Parameter nilaiB harus berupa angka'
    
    
    return hasil
}

export default perkalian