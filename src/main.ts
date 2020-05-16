let showMhs: Function;

type mahasiswaObj = {nama_lengkap: string, nim: string|number, role: string};

showMhs = (mhs: mahasiswaObj) => {
	return mhs;
};

let mahasiswa = {
	nama_lengkap: 'reemar martin',
	nim: 231343422,
	role: 'model'
};

console.log(showMhs(mahasiswa));