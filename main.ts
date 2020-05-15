//declare explicit types
let sebuahString: string;
let sebuahNumber: number;
let sebuahBoolean: boolean;
let mahassiwa: string[] = []; //empty array. so we can use push() for later

//union types
let uid: string|number;
let mixedArray: (string|number)[] = [];

//declaring objects
let mahasiswaObj: {
	nama_lengkap: string,
	nim: string|number,
	role: string
}