class kucing {

    constructor ( nama,jenis,warna) {
        this.nama = nama;
        this.jenis = jenis;
        this.warna = warna;
    }
    makan() {
        document.write("kucing makan")
    }

    minum() {
        document.write("kucing tidur")
    }
} 


const tambah = document.getElementById("tambah")
const tampilkan = document.getElementById("tampilkan")
let nama = document.getElementById('nama');
let jenis = document.getElementById('jenis')
let warna = document.getElementById('warna');
let i =0;
const array = Array()

tambah.addEventListener("click",function(){
    array[i] = new kucing(nama.value,jenis.value,warna.value);
    i++;
    nama.value='';
    jenis.value='';
    warna.value='';

})
tampilkan.addEventListener("click",function(){
    var e =''; 
for (var y = 0; y < array.length; y++) {

    e += 'nama kucing: '+array[y].nama + ' '+'<br/>' + 'jenis '+array[y].jenis + ' '+'<br/>' + 'warna '+ array[y].warna +'<br/>'+'<hr/>';

}
document.getElementById('data').innerHTML = e
})

