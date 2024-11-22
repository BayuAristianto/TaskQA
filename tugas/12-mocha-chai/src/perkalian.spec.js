import { expect } from "chai";
import perkalian from "./perkalian.js";

describe('Unit Test Function Perkalian', function(){

    it('Hitung perkalian dengan parameter yang valid', function(){
        const nilaiA = 5
        const nilaiB = 3

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal(15)
    })

    it('Hitung perkalian dengan parameter yang valid (nilaiA minus)', function(){
        const nilaiA = -5
        const nilaiB = 3

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal(-15)
    })

    it('Hitung perkalian dengan parameter yang valid (nilaiB minus)', function(){
        const nilaiA = 5
        const nilaiB = -3

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal(-15)
    })

    it('Hitung perkalian dengan parameter yang valid (nilaiA & nilaiB minus)', function(){
        const nilaiA = -5
        const nilaiB = -3

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal(15)
    })

    it('Hitung perkalian dengan parameter yang valid (nilaiA 0)', function(){
        const nilaiA = 0
        const nilaiB = 3

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal(0)
    })

    it('Hitung perkalian dengan parameter yang valid (nilaiB 0)', function(){
        const nilaiA = 5
        const nilaiB = 0

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal(0)
    })
    it('Hitung perkalian dengan parameter yang valid (nilaiA & nilaiB 0)', function(){
        const nilaiA = 0
        const nilaiB = 0

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal(0)
    })

    it('Hitung perkalian dengan expected hasil yang salah', function(){
        const nilaiA = 5
        const nilaiB = 3

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal(20)
    })

    it('Hitung perkalian dengan expected hasil benar tetapi dengan tipe data string', function(){
        const nilaiA = 5
        const nilaiB = 3

        const hasil = perkalian(nilaiA,nilaiB)
        expect(hasil).to.equal("15")
    })

    it('Hitung perkalian dengan parameter nilaiA menggunakan tipe data string', function(){
        const nilaiA = "5"
        const nilaiB = 3

        const hasil = () => perkalian(nilaiA,nilaiB)
        expect(hasil).to.throw('Parameter nilaiA harus berupa angka')
    })

    it('Hitung perkalian dengan parameter nilaiB menggunakan tipe data string', function(){
        const nilaiA = 5
        const nilaiB = "3"

        const hasil = () => perkalian(nilaiA,nilaiB)
        expect(hasil).to.throw('Parameter nilaiB harus berupa angka')
    })

    it('Hitung perkalian dengan parameter nilaiA dan nilaiB menggunakan tipe data string', function(){
        const nilaiA = "5"
        const nilaiB = "3"

        const hasil = () => perkalian(nilaiA,nilaiB)
        expect(hasil).to.throw('Parameter nilaiA dan nilaiB harus berupa angka')
    })


    it('Hitung perkalian tanpa parameter ', function(){

        const hasil = function() {
            perkalian()
        }
        expect(hasil).to.throw('Parameter harus diisi')
    })

    it('Hitung perkalian dengan parameter nilaiB kosong ', function(){
        const nilaiA = 5

        const hasil = function() {
            perkalian(nilaiA)
        }
        expect(hasil).to.throw('Parameter harus diisi')
    })

    it('Hitung perkalian dengan parameter nilaiA kosong ', function(){
        const nilaiB = 3

        const hasil = function() {
            perkalian(nilaiB)
        }
        expect(hasil).to.throw('Parameter harus diisi')
    })

    
})