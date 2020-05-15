var mahasiswa = ['warganet', 'reemar', 'pelakor', 'han-so-hee'];
//err: Argument of type '62' is not assignable to parameter of type 'string'
// mahasiswa.push(62);
//err: Type '62' is not assignable to type 'string'.
// mahasiswa[0] = 62;
mahasiswa.push('keyboard warrior');
console.log(mahasiswa);
var numbersArray = [20, 30, 40, 50];
numbersArray.push(60);
console.log(numbersArray);
var mixedArray = ['sebuah tulisan', 30];
mixedArray.push(30);
mixedArray.push('coba teks lagi');
//err:  Argument of type 'false' is not assignable to parameter of type 'string | number'.
// mixedArray.push(false);
console.log(mixedArray);
var mahasiswaObj = {
    nama_lengkap: 'reemar martin',
    nim: 2180213934,
    role: 'model'
};
// err: Type '"2180213934"' is not assignable to type 'number'.
// mahasiswaObj.nim = '2180213934';
//err: Property 'married' does not exist on type '{ nama_lengkap: string; nim: number; role: string; }'.
// mahasiswaObj.married = false;
//err: Did you mean to write 'nama_lengkap'?
// mahasiswaObj = {
// 	namaLengkap: 'reemar martin',
// 	nim: 2180213934,
// 	married: false
// }
//err: Type is not assignable to type '{ nama_lengkap: string; nim: number; role: string; }'.
// mahasiswaObj = {
// 	nama_lengkap: 'reemar martin',
// 	nim: 2180213934,
// 	married: false
// }
//still error
// mahasiswaObj = {
// 	nama_lengkap: 'reemar martin',
// 	nim: 2180213934,
// 	married: false,
// 	role: 'model'
// }
//still we cant do this
// mahasiswaObj = {
// 	nama_lengkap: 'reemar martin',
// 	nim: 2180213934,
// 	role: 'model',
// 	married: false
// }
console.log(mahasiswaObj);
