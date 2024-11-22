angka = [1,2,3,4,5,6,7,8,9,10]
//cetakGenap = "#genap"

document.querySelector("#genap").innerHTML = ("<h1>Array Angka Genap.</h1>")
// document.write("<h1>Array Angka Genap.</h1>")

for(i=0;i<angka.length;i++){
    //document.write("Angka Saat Ini " + angka[i] + "<br>")
    if(i%2 != 0){
        document.write("Angka Genap Saja " + angka[i] + "<br>")
    }
}